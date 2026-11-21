import type { ChangeEvent } from "react";

export type Budget = {
  id?: string;
  budgetCode?: string;
  budgetName?: string;
  budgetDescription?: string;
  wbsId?: string;
  wbsCode?: string;
  wbsName?: string;
  currencyCode?: string;
  currencyName?: string;
  allocatedAmount?: number;
  consumedAmount?: number;
  startDate?: string;
  endDate?: string;
  dateRangeValid?: boolean;
  status?: "ACTIVE" | "INACTIVE";
};

export interface BudgetFormSheetProps {
  open: boolean;
  isEditing: boolean;
  triggerModal: () => void;
  title: string;
  handleFormChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSelectChange: (name: keyof Budget, value: string | boolean | number) => void;
  handleSubmit: () => void;
  form: Budget;
  wbsList: Array<{ id?: string; wbsCode?: string; wbsName?: string; }>;
  currencies: Array<{ code?: string; name?: string; masterCurrencyCode?: string; masterCurrencyName?: string; }>;
}
