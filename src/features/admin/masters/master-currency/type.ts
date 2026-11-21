export type MasterCurrency = {
  masterCurrencyCode?: string;
  masterCurrencyName?: string;
  mainUnit?: string;
  subUnit?: string;
  status?: string;
};

export interface MasterCurrencyFormSheetProps {
  open: boolean;
  isEditing: boolean;
  triggerModal: () => void;
  title: string;
  handleFormChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  form: MasterCurrency;
}