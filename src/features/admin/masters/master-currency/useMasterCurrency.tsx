import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { ColumnDef, PaginationState } from "@tanstack/react-table";
import { Pencil, Trash } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
import StatusBadge from "@/features/components/StatusBadge";
import type { features } from "@/features/data-table/data-table-features";
import { masterStatusConfig } from "../utils/statusConfig";
import {
  addMasterCurrency,
  deleteMasterCurrency,
  getMasterCurrencies,
  updateMasterCurrency,
} from "./api";
import type { MasterCurrency } from "./type";

const emptyForm: MasterCurrency = {
  masterCurrencyCode: "",
  masterCurrencyName: "",
  mainUnit: "",
  subUnit: "",
};

export function useMasterCurrency() {
  const [page, setPage] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [form, setForm] = useState<MasterCurrency>(emptyForm);
  const [openForm, setOpenForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ["master-currency", page.pageIndex, page.pageSize],
    queryFn: () =>
      getMasterCurrencies({
        pageNumber: page.pageIndex,
        pageSize: page.pageSize,
      }),
  });

  const refreshCurrencies = () =>
    queryClient.invalidateQueries({ queryKey: ["master-currency"] });

  const addMutation = useMutation({
    mutationFn: addMasterCurrency,
    onSuccess: () => {
      toast.success("Currency added successfully");
      setForm(emptyForm);
      setOpenForm(false);
      refreshCurrencies();
    },
    onError: (error) => toast.error(`Unable to add currency: ${error.message}`),
  });

  const updateMutation = useMutation({
    mutationFn: updateMasterCurrency,
    onSuccess: () => {
      toast.success("Currency updated successfully");
      setForm(emptyForm);
      setOpenForm(false);
      refreshCurrencies();
    },
    onError: (error) => toast.error(`Unable to update currency: ${error.message}`),
  });

  const deleteMutation = useMutation({
    mutationFn: deleteMasterCurrency,
    onSuccess: () => {
      toast.success("Currency deleted successfully");
      refreshCurrencies();
    },
    onError: (error) => toast.error(`Unable to delete currency: ${error.message}`),
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

  const handleEdit = (currency: MasterCurrency) => {
    setForm({ ...currency });
    setIsEditing(true);
    setOpenForm(true);
  };

  const columns: Array<ColumnDef<typeof features, MasterCurrency>> = [
    { accessorKey: "masterCurrencyCode", header: "Currency Code" },
    { accessorKey: "masterCurrencyName", header: "Currency Name" },
    { accessorKey: "mainUnit", header: "Main Unit" },
    { accessorKey: "subUnit", header: "Sub Unit" },
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
                row.original.masterCurrencyCode &&
                deleteMutation.mutate(row.original.masterCurrencyCode)
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
    updateMutation.mutate({
      masterCurrencyCode: form.masterCurrencyCode,
      masterCurrencyName: form.masterCurrencyName,
    });
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
    handleSubmit,
    handleUpdate,
  };
}