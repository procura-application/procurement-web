import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { ColumnDef, PaginationState } from "@tanstack/react-table";
import { Pencil, Trash } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
import StatusBadge from "@/features/components/StatusBadge";
import type { features } from "@/features/data-table/data-table-features";
import { masterStatusConfig } from "../utils/statusConfig";
import { getWbs } from "../wbs/api";
import { addBudget, deleteBudget, getBudgets, updateBudget } from "./api";
import type { Budget } from "./type";

const emptyForm: Budget = {
  budgetName: "",
  budgetDescription: "",
  wbsId: "",
  currencyCode: "",
  allocatedAmount: 0,
  startDate: "",
  endDate: "",
  dateRangeValid: false,
};

export function useBudget() {
  const [page, setPage] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [form, setForm] = useState<Budget>(emptyForm);
  const [openForm, setOpenForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ["budget", page.pageIndex, page.pageSize],
    queryFn: () =>
      getBudgets({
        pageNumber: page.pageIndex,
        pageSize: page.pageSize,
      }),
  });

  const { data: wbsList } = useQuery({
    queryKey: ["wbs-for-budget"],
    queryFn: () =>
      getWbs({
        pageNumber: 0,
        pageSize: 1000,
      }),
  });

  const currencies = [
    { masterCurrencyCode: "USD", masterCurrencyName: "US Dollar" },
    { masterCurrencyCode: "INR", masterCurrencyName: "Indian Rupee" },
    { masterCurrencyCode: "EUR", masterCurrencyName: "Euro" },
    { masterCurrencyCode: "AED", masterCurrencyName: "UAE Dirham" },
  ];

  const refreshBudgets = () => {
    void queryClient.invalidateQueries({ queryKey: ["budget"] });
  };

  const addMutation = useMutation({
    mutationFn: addBudget,
    onSuccess: () => {
      toast.success("Budget added successfully");
      setForm(emptyForm);
      setIsEditing(false);
      setOpenForm(false);
      refreshBudgets();
    },
    onError: (error) => toast.error(`Unable to add budget: ${error.message}`),
  });

  const updateMutation = useMutation({
    mutationFn: (budget: Budget) => updateBudget(budget.id ?? "", budget),
    onSuccess: () => {
      toast.success("Budget updated successfully");
      setForm(emptyForm);
      setIsEditing(false);
      setOpenForm(false);
      refreshBudgets();
    },
    onError: (error) => toast.error(`Unable to update budget: ${error.message}`),
  });

  const deleteMutation = useMutation({
    mutationFn: deleteBudget,
    onSuccess: () => {
      toast.success("Budget deleted successfully");
      refreshBudgets();
    },
    onError: (error) => toast.error(`Unable to delete budget: ${error.message}`),
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

    let fieldValue: string | number | boolean = value;

    if (type === "checkbox") {
      fieldValue = checked;
    } else if (type === "number") {
      fieldValue = Number(value);
    }

    setForm((current) => ({
      ...current,
      [name]: fieldValue,
    }));
  };

  const handleSelectChange = (name: keyof Budget, value: string | boolean | number) => {
    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleEdit = (budget: Budget) => {
    setForm({
      ...budget,
      budgetDescription: budget.budgetDescription ?? "",
      wbsId: budget.wbsId ?? "",
      currencyCode: budget.currencyCode ?? "",
      allocatedAmount: budget.allocatedAmount ?? 0,
      startDate: budget.startDate ?? "",
      endDate: budget.endDate ?? "",
      dateRangeValid: budget.dateRangeValid ?? false,
    });
    setIsEditing(true);
    setOpenForm(true);
  };

  const columns: Array<ColumnDef<typeof features, Budget>> = [
    { accessorKey: "budgetCode", header: "Budget Code" },
    { accessorKey: "budgetName", header: "Budget Name" },
    { accessorKey: "wbsCode", header: "WBS Code" },
    { accessorKey: "wbsName", header: "WBS Name" },
    { accessorKey: "currencyCode", header: "Currency" },
    { accessorKey: "allocatedAmount", header: "Allocated Amount" },
    { accessorKey: "consumedAmount", header: "Consumed Amount" },
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
      toast.error("Unable to update budget without a selected record.");
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
    wbsList: wbsList?.content ?? [],
    currencies,
  };
}
