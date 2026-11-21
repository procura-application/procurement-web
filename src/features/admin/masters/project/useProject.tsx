import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { ColumnDef, PaginationState } from "@tanstack/react-table";
import { Pencil, Trash } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
import StatusBadge from "@/features/components/StatusBadge";
import type { features } from "@/features/data-table/data-table-features";
import { masterStatusConfig } from "../utils/statusConfig";
import { getBusinessUnits } from "../business-unit/api";
import { addProject, deleteProject, getProjects, updateProject } from "./api";
import type { Project } from "./type";

const emptyForm: Project = {
  projectName: "",
  description: "",
  businessUnitId: "",
  startDate: "",
  endDate: "",
  dateRangeValid: false,
};

export function useProject() {
  const [page, setPage] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [form, setForm] = useState<Project>(emptyForm);
  const [openForm, setOpenForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ["project", page.pageIndex, page.pageSize],
    queryFn: () =>
      getProjects({
        pageNumber: page.pageIndex,
        pageSize: page.pageSize,
      }),
  });

  const { data: businessUnits } = useQuery({
    queryKey: ["business-units-for-project"],
    queryFn: () =>
      getBusinessUnits({
        pageNumber: 0,
        pageSize: 1000,
      }),
  });

  const refreshProjects = () => {
    void queryClient.invalidateQueries({ queryKey: ["project"] });
  };

  const addMutation = useMutation({
    mutationFn: addProject,
    onSuccess: () => {
      toast.success("Project added successfully");
      setForm(emptyForm);
      setIsEditing(false);
      setOpenForm(false);
      refreshProjects();
    },
    onError: (error) => toast.error(`Unable to add project: ${error.message}`),
  });

  const updateMutation = useMutation({
    mutationFn: (project: Project) => updateProject(project.id ?? "", project),
    onSuccess: () => {
      toast.success("Project updated successfully");
      setForm(emptyForm);
      setIsEditing(false);
      setOpenForm(false);
      refreshProjects();
    },
    onError: (error) => toast.error(`Unable to update project: ${error.message}`),
  });

  const deleteMutation = useMutation({
    mutationFn: deleteProject,
    onSuccess: () => {
      toast.success("Project deleted successfully");
      refreshProjects();
    },
    onError: (error) => toast.error(`Unable to delete project: ${error.message}`),
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

  const handleSelectChange = (name: keyof Project, value: string | boolean) => {
    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleEdit = (project: Project) => {
    setForm({
      ...project,
      description: project.description ?? "",
      businessUnitId: project.businessUnitId ?? "",
      startDate: project.startDate ?? "",
      endDate: project.endDate ?? "",
      dateRangeValid: project.dateRangeValid ?? false,
    });
    setIsEditing(true);
    setOpenForm(true);
  };

  const columns: Array<ColumnDef<typeof features, Project>> = [
    { accessorKey: "projectCode", header: "Project Code" },
    { accessorKey: "projectName", header: "Project Name" },
    { accessorKey: "businessUnitCode", header: "Business Unit Code" },
    { accessorKey: "businessUnitName", header: "Business Unit Name" },
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
      toast.error("Unable to update project without a selected record.");
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
    businessUnits: businessUnits?.content ?? [],
  };
}
