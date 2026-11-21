import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { ColumnDef, PaginationState } from "@tanstack/react-table";
import { Pencil, Trash } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
import StatusBadge from "@/features/components/StatusBadge";
import type { features } from "@/features/data-table/data-table-features";
import { masterStatusConfig } from "../utils/statusConfig";
import { getBusinessUnits } from "../business-unit/api";
import { addCostCenter, deleteCostCenter, getCostCenters, updateCostCenter } from "./api";
import type { CostCenter } from "./type";

const emptyForm: CostCenter = {
  costCenterName: "",
  description: "",
  businessUnitId: "",
  effectiveFromDate: "",
  effectiveToDate: "",
  effectiveDateRangeValid: false,
};

export function useCostCenter() {
  const [page, setPage] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [form, setForm] = useState<CostCenter>(emptyForm);
  const [openForm, setOpenForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ["cost-center", page.pageIndex, page.pageSize],
    queryFn: () =>
      getCostCenters({
        pageNumber: page.pageIndex,
        pageSize: page.pageSize,
      }),
  });

  const { data: businessUnits } = useQuery({
    queryKey: ["business-units-for-cost-center"],
    queryFn: () =>
      getBusinessUnits({
        pageNumber: 0,
        pageSize: 1000,
      }),
  });

  const refreshCostCenters = () => {
    void queryClient.invalidateQueries({ queryKey: ["cost-center"] });
  };

  const addMutation = useMutation({
    mutationFn: addCostCenter,
    onSuccess: () => {
      toast.success("Cost center added successfully");
      setForm(emptyForm);
      setIsEditing(false);
      setOpenForm(false);
      refreshCostCenters();
    },
    onError: (error) =>
      toast.error(`Unable to add cost center: ${error.message}`),
  });

  const updateMutation = useMutation({
    mutationFn: (costCenter: CostCenter) =>
      updateCostCenter(costCenter.id ?? "", costCenter),
    onSuccess: () => {
      toast.success("Cost center updated successfully");
      setForm(emptyForm);
      setIsEditing(false);
      setOpenForm(false);
      refreshCostCenters();
    },
    onError: (error) =>
      toast.error(`Unable to update cost center: ${error.message}`),
  });

  const deleteMutation = useMutation({
    mutationFn: deleteCostCenter,
    onSuccess: () => {
      toast.success("Cost center deleted successfully");
      refreshCostCenters();
    },
    onError: (error) =>
      toast.error(`Unable to delete cost center: ${error.message}`),
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

  const handleSelectChange = (name: keyof CostCenter, value: string | boolean) => {
    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleEdit = (costCenter: CostCenter) => {
    setForm({
      ...costCenter,
      description: costCenter.description ?? "",
      businessUnitId: costCenter.businessUnitId ?? "",
      effectiveFromDate: costCenter.effectiveFromDate ?? "",
      effectiveToDate: costCenter.effectiveToDate ?? "",
      effectiveDateRangeValid: costCenter.effectiveDateRangeValid ?? false,
    });
    setIsEditing(true);
    setOpenForm(true);
  };

  const columns: Array<ColumnDef<typeof features, CostCenter>> = [
    { accessorKey: "costCenterCode", header: "Cost Center Code" },
    { accessorKey: "costCenterName", header: "Cost Center Name" },
    { accessorKey: "businessUnitCode", header: "Business Unit Code" },
    { accessorKey: "businessUnitName", header: "Business Unit Name" },
    { accessorKey: "effectiveFromDate", header: "Effective From" },
    { accessorKey: "effectiveToDate", header: "Effective To" },
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
                row.original.id && deleteMutation.mutate(row.original.id)
              }
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
      toast.error("Unable to update cost center without a selected record.");
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
