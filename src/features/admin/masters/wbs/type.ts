import type { ChangeEvent } from "react";

export type Wbs = {
  id?: string;
  wbsCode?: string;
  wbsName?: string;
  wbsDescription?: string;
  projectId?: string;
  projectCode?: string;
  projectName?: string;
  startDate?: string;
  endDate?: string;
  dateRangeValid?: boolean;
  status?: "ACTIVE" | "INACTIVE";
};

export interface WbsFormSheetProps {
  open: boolean;
  isEditing: boolean;
  triggerModal: () => void;
  title: string;
  handleFormChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSelectChange: (name: keyof Wbs, value: string | boolean) => void;
  handleSubmit: () => void;
  form: Wbs;
  projects: Array<{
    id?: string;
    projectCode?: string;
    projectName?: string;
  }>;
}
