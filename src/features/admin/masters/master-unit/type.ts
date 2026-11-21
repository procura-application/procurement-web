export type MasterUnit = {
  masterUnitCode?: string;
  masterUnitName?: string;
  status?: string;
};

export interface MasterUnitFormSheetProps {
  open: boolean;
  isEditing: boolean;
  triggerModal: () => void;
  title: string;
  handleFormChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  form: MasterUnit;
}