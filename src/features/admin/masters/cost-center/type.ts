import type { ChangeEvent } from "react";

export type CostCenter = {
  id?: string;
  costCenterCode?: string;
  costCenterName?: string;
  description?: string;
  businessUnitId?: string;
  businessUnitCode?: string;
  businessUnitName?: string;
  effectiveFromDate?: string;
  effectiveToDate?: string;
  effectiveDateRangeValid?: boolean;
  status?: "ACTIVE" | "INACTIVE";
};

export interface CostCenterFormSheetProps {
  open: boolean;
  isEditing: boolean;
  triggerModal: () => void;
  title: string;
  handleFormChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSelectChange: (name: keyof CostCenter, value: string | boolean) => void;
  handleSubmit: () => void;
  form: CostCenter;
  businessUnits: Array<{
    id?: string;
    businessUnitCode?: string;
    businessUnitName?: string;
  }>;
}
