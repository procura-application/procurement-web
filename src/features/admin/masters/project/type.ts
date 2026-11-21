import type { ChangeEvent } from "react";

export type Project = {
  id?: string;
  projectCode?: string;
  projectName?: string;
  description?: string;
  businessUnitId?: string;
  businessUnitCode?: string;
  businessUnitName?: string;
  startDate?: string;
  endDate?: string;
  dateRangeValid?: boolean;
  status?: "ACTIVE" | "INACTIVE";
};

export interface ProjectFormSheetProps {
  open: boolean;
  isEditing: boolean;
  triggerModal: () => void;
  title: string;
  handleFormChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSelectChange: (name: keyof Project, value: string | boolean) => void;
  handleSubmit: () => void;
  form: Project;
  businessUnits: Array<{
    id?: string;
    businessUnitCode?: string;
    businessUnitName?: string;
  }>;
}
