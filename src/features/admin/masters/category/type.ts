import type { BusinessUnit } from "../business-unit/type";

export type Category = {
    businessUnitCode?: string;
    businessUnitId?:string;
    businessUnitName?:string;
    itemType?:"GOODS" | "SERVICES";
    masterCategoryCode?:string;
    masterCategoryId?:string;
    masterCategoryName?:string;
    status?:"ACTIVE" | "INACTIVE" | "NOTFOUND";
    categoryName ?: string;
}

export interface CategorySheetProps{
  open: boolean;
  triggerModal: ()=>void;
  title: string;
  handleFormChange: (event:React.ChangeEvent<HTMLInputElement>)=>void;
  handleSubmit:()=>void;
  form: Category;
  businessUnits: BusinessUnit[];
  handleSelectChange: (name: keyof Category,value: string) => void;
}