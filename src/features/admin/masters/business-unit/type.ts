export type BusinessUnit = {
  id?: string;
  businessUnitCode?: string;
  businessUnitName?: string;
  businessUnitDescription?: string;
  businessUnitManager?: string;
  status?: "ACTIVE" | "INACTIVE";
};

export interface BusinessUnitFormSheetProps{
  open: boolean;
  triggerModal: ()=>void;
  title: string;
  handleFormChange: (event:React.ChangeEvent<HTMLInputElement>)=>void;
  handleSubmit:()=>void;
  form: BusinessUnit
}