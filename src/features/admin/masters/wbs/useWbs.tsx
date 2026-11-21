import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { ColumnDef, PaginationState } from "@tanstack/react-table";
import { Pencil, Trash } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
import StatusBadge from "@/features/components/StatusBadge";
import type { features } from "@/features/data-table/data-table-features";
import { masterStatusConfig } from "../utils/statusConfig";
import { getProjects } from "../project/api";
import { addWbs, deleteWbs, getWbs, updateWbs } from "./api";
import type { Wbs } from "./type";

const emptyForm: Wbs = {
  wbsName: "",
  wbsDescription: "",
  projectId: "",
  startDate: "",
  endDate: "",
  dateRangeValid: false,
};

export function useWbs() {
  const [page, setPage] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [form, setForm] = useState<Wbs>(emptyForm);
  const [openForm, setOpenForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ["wbs", page.pageIndex, page.pageSize],
    queryFn: () =>
      getWbs({
        pageNumber: page.pageIndex,
        pageSize: page.pageSize,
      }),
  });

  const { data: projects } = useQuery({
    queryKey: ["projects-for-wbs"],
    queryFn: () =>
      getProjects({
        pageNumber: 0,
        pageSize: 1000,
      }),
  });

  const refreshWbs = () => {
    void queryClient.invalidateQueries({ queryKey: ["wbs"] });
  };

  const addMutation = useMutation({
    mutationFn: addWbs,
    onSuccess: () => {
      toast.success("WBS added successfully");
      setForm(emptyForm);
      setIsEditing(false);
      setOpenForm(false);
      refreshWbs();
    },
    onError: (error) => toast.error(`Unable to add WBS: ${error.message}`),
  });

  const updateMutation = useMutation({
    mutationFn: (wbs: Wbs) => updateWbs(wbs.id ?? "", wbs),
    onSuccess: () => {
      toast.success("WBS updated successfully");
      setForm(emptyForm);
      setIsEditing(false);
      setOpenForm(false);
      refreshWbs();
    },
    onError: (error) => toast.error(`Unable to update WBS: ${error.message}`),
  });

  const deleteMutation = useMutation({
    mutationFn: deleteWbs,
    onSuccess: () => {
      toast.success("WBS deleted successfully");
      refreshWbs();
    },
    onError: (error) => toast.error(`Unable to delete WBS: ${error.message}`),
  });

  const triggerModal = () => {
    setForm(emptyForm);
    setIsEditing(false);
    setOpenForm((current) => !current);
  };

  const handleFormChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type, checked } = event.target;

    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSelectChange = (name: keyof Wbs, value: string | boolean) => {
    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleEdit = (wbs: Wbs) => {
    setForm({
      ...wbs,
      wbsDescription: wbs.wbsDescription ?? "",
      projectId: wbs.projectId ?? "",
      startDate: wbs.startDate ?? "",
      endDate: wbs.endDate ?? "",
      dateRangeValid: wbs.dateRangeValid ?? false,
    });
    setIsEditing(true);
    setOpenForm(true);
  };

  const columns: Array<ColumnDef<typeof features, Wbs>> = [
    { accessorKey: "wbsCode", header: "WBS Code" },
    { accessorKey: "wbsName", header: "WBS Name" },
    { accessorKey: "projectCode", header: "Project Code" },
    { accessorKey: "projectName", header: "Project Name" },
    { accessorKey: "startDate", header: "Start Date" },
    { accessorKey: "endDate", header: "End Date" },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => (
        <StatusBadge
          status={row.original.status ?? "NOTFOUND"}
          config={masterStatusConfig}
        />
      ),
    },
    {
      accessorKey: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <div className="flex gap-2">
          <Pencil
            size={15}
            className="cursor-pointer"
            onClick={() => handleEdit(row.original)}
          />
          {row.original.status === "ACTIVE" && (
            <Trash
              size={15}
              className="cursor-pointer"
              onClick={() => row.original.id && deleteMutation.mutate(row.original.id)}
            />
          )}
        </div>
      ),
    },
  ];

  const handleSubmit = () => {
    addMutation.mutate(form);
  };

  const handleUpdate = () => {
    if (!form.id) {
      toast.error("Unable to update WBS without a selected record.");
      return;
    }

    updateMutation.mutate(form);
  };

  return {
    rows: data?.content ?? [],
    rowCount: data?.totalElements ?? 0,
    columns,
    page,
    setPage,
    form,
    openForm,
    isEditing,
    triggerModal,
    handleFormChange,
    handleSelectChange,
    handleSubmit,
    handleUpdate,
    projects: projects?.content ?? [],
  };
}
