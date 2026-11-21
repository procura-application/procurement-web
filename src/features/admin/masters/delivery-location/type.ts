import type { ChangeEvent } from "react";

export type DeliveryLocation = {
  id?: string;
  deliveryLocationCode?: string;
  locationName?: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
  businessUnitId?: string;
  businessUnitCode?: string;
  businessUnitName?: string;
  contactPersonName?: string;
  contactPersonEmail?: string;
  contactPersonNumber?: string;
  status?: "ACTIVE" | "INACTIVE";
};

export interface DeliveryLocationFormSheetProps {
  open: boolean;
  isEditing: boolean;
  triggerModal: () => void;
  title: string;
  handleFormChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  handleSelectChange: (
    name: keyof DeliveryLocation,
    value: string | boolean | number,
  ) => void;
  handleSubmit: () => void;
  form: DeliveryLocation;
  businessUnitList: Array<{
    id?: string;
    businessUnitCode?: string;
    businessUnitName?: string;
  }>;
}
