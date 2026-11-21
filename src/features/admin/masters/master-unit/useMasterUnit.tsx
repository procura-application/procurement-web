import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { ColumnDef, PaginationState } from "@tanstack/react-table";
import { Pencil, Trash } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
import StatusBadge from "@/features/components/StatusBadge";
import type { features } from "@/features/data-table/data-table-features";
import { masterStatusConfig } from "../utils/statusConfig";
import {
  addMasterUnit,
  deleteMasterUnit,
  getMasterUnits,
  updateMasterUnit,
} from "./api";
import type { MasterUnit } from "./type";

const emptyForm: MasterUnit = {
  masterUnitCode: "",
  masterUnitName: "",
};

export function useMasterUnit() {
  const [page, setPage] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [form, setForm] = useState<MasterUnit>(emptyForm);
  const [openForm, setOpenForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ["master-unit", page.pageIndex, page.pageSize],
    queryFn: () =>
      getMasterUnits({
        pageNumber: page.pageIndex,
        pageSize: page.pageSize,
      }),
  });

  const refreshUnits = () =>
    queryClient.invalidateQueries({ queryKey: ["master-unit"] });

  const addMutation = useMutation({
    mutationFn: addMasterUnit,
    onSuccess: () => {
      toast.success("Unit added successfully");
      setForm(emptyForm);
      setIsEditing(false);
      setOpenForm(false);
      refreshUnits();
    },
    onError: (error) => toast.error(`Unable to add unit: ${error.message}`),
  });

  const updateMutation = useMutation({
    mutationFn: updateMasterUnit,
    onSuccess: () => {
      toast.success("Unit updated successfully");
      setForm(emptyForm);
      setIsEditing(false);
      setOpenForm(false);
      refreshUnits();
    },
    onError: (error) => toast.error(`Unable to update unit: ${error.message}`),
  });

  const deleteMutation = useMutation({
    mutationFn: deleteMasterUnit,
    onSuccess: () => {
      toast.success("Unit deleted successfully");
      refreshUnits();
    },
    onError: (error) => toast.error(`Unable to delete unit: ${error.message}`),
  });

  const triggerModal = () => {
    setForm(emptyForm);
    setIsEditing(false);
    setOpenForm(!openForm);
  };

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleEdit = (unit: MasterUnit) => {
    setForm({ ...unit });
    setIsEditing(true);
    setOpenForm(true);
  };

  const columns: Array<ColumnDef<typeof features, MasterUnit>> = [
    { accessorKey: "masterUnitCode", header: "Unit Code" },
    { accessorKey: "masterUnitName", header: "Unit Name" },
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
              onClick={() =>
                row.original.masterUnitCode &&
                deleteMutation.mutate(row.original.masterUnitCode)
              }
            />
          )}
        </div>
      ),
    },
  ];

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
    handleSubmit: () => addMutation.mutate(form),
    handleUpdate: () =>
      updateMutation.mutate({
        masterUnitCode: form.masterUnitCode,
        masterUnitName: form.masterUnitName,
      }),
  };
}