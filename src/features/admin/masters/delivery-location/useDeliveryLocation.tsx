import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { ColumnDef, PaginationState } from "@tanstack/react-table";
import { Pencil, Trash } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
import StatusBadge from "@/features/components/StatusBadge";
import type { features } from "@/features/data-table/data-table-features";
import { getBusinessUnits } from "../business-unit/api";
import { masterStatusConfig } from "../utils/statusConfig";
import {
  addDeliveryLocation,
  deleteDeliveryLocation,
  getDeliveryLocations,
  updateDeliveryLocation,
} from "./api";
import type { DeliveryLocation } from "./type";

const emptyForm: DeliveryLocation = {
  locationName: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  country: "",
  postalCode: "",
  businessUnitId: "",
  contactPersonName: "",
  contactPersonEmail: "",
  contactPersonNumber: "",
};

export function useDeliveryLocation() {
  const [page, setPage] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [form, setForm] = useState<DeliveryLocation>(emptyForm);
  const [openForm, setOpenForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ["deliveryLocation", page.pageIndex, page.pageSize],
    queryFn: () =>
      getDeliveryLocations({
        pageNumber: page.pageIndex,
        pageSize: page.pageSize,
      }),
  });

  const { data: businessUnitList } = useQuery({
    queryKey: ["businessUnit-for-delivery-location"],
    queryFn: () =>
      getBusinessUnits({
        pageNumber: 0,
        pageSize: 1000,
      }),
  });

  const refreshDeliveryLocations = () => {
    void queryClient.invalidateQueries({ queryKey: ["deliveryLocation"] });
  };

  const addMutation = useMutation({
    mutationFn: addDeliveryLocation,
    onSuccess: () => {
      toast.success("Delivery location added successfully");
      setForm(emptyForm);
      setIsEditing(false);
      setOpenForm(false);
      refreshDeliveryLocations();
    },
    onError: (error) =>
      toast.error(`Unable to add delivery location: ${error.message}`),
  });

  const updateMutation = useMutation({
    mutationFn: (deliveryLocation: DeliveryLocation) =>
      updateDeliveryLocation(deliveryLocation.id ?? "", deliveryLocation),
    onSuccess: () => {
      toast.success("Delivery location updated successfully");
      setForm(emptyForm);
      setIsEditing(false);
      setOpenForm(false);
      refreshDeliveryLocations();
    },
    onError: (error) =>
      toast.error(`Unable to update delivery location: ${error.message}`),
  });

  const deleteMutation = useMutation({
    mutationFn: deleteDeliveryLocation,
    onSuccess: () => {
      toast.success("Delivery location deleted successfully");
      refreshDeliveryLocations();
    },
    onError: (error) =>
      toast.error(`Unable to delete delivery location: ${error.message}`),
  });

  const triggerModal = () => {
    setForm(emptyForm);
    setIsEditing(false);
    setOpenForm((current) => !current);
  };

  const handleFormChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = event.target;

    let fieldValue: string | number | boolean = value;

    if (type === "number") {
      fieldValue = Number(value);
    }

    setForm((current) => ({
      ...current,
      [name]: fieldValue,
    }));
  };

  const handleSelectChange = (
    name: keyof DeliveryLocation,
    value: string | boolean | number,
  ) => {
    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleEdit = (deliveryLocation: DeliveryLocation) => {
    setForm({
      ...deliveryLocation,
      locationName: deliveryLocation.locationName ?? "",
      addressLine1: deliveryLocation.addressLine1 ?? "",
      addressLine2: deliveryLocation.addressLine2 ?? "",
      city: deliveryLocation.city ?? "",
      state: deliveryLocation.state ?? "",
      country: deliveryLocation.country ?? "",
      postalCode: deliveryLocation.postalCode ?? "",
      businessUnitId: deliveryLocation.businessUnitId ?? "",
      contactPersonName: deliveryLocation.contactPersonName ?? "",
      contactPersonEmail: deliveryLocation.contactPersonEmail ?? "",
      contactPersonNumber: deliveryLocation.contactPersonNumber ?? "",
    });
    setIsEditing(true);
    setOpenForm(true);
  };

  const columns: Array<ColumnDef<typeof features, DeliveryLocation>> = [
    { accessorKey: "deliveryLocationCode", header: "Location Code" },
    { accessorKey: "locationName", header: "Location Name" },
    { accessorKey: "businessUnitName", header: "Business Unit" },
    { accessorKey: "city", header: "City" },
    { accessorKey: "state", header: "State" },
    { accessorKey: "country", header: "Country" },
    { accessorKey: "contactPersonName", header: "Contact Person" },
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
      toast.error("Unable to update delivery location without a selected record.");
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
    businessUnitList: businessUnitList?.content ?? [],
  };
}
