import type { Category } from "../category/type";

export type MasterItem = {

    masterItemId ?: string;
    masterItemName ?: string;
    masterItemCode ?: string;
    masterItemDescription ?: string;
    masterItemCategory ?: string;
    masterItemCategoryName ?: string;
    masterItemBusinessUnitCode ?: string;
    masterItemBusinessUnitName ?: string;
    status?: string;
    masterItemCategoryId ?: string;
}

export interface MasterItemSheetProps{
  open: boolean;
  triggerModal: ()=>void;
  title: string;
  handleFormChange: (event:React.ChangeEvent<HTMLInputElement>)=>void;
  handleSubmit:()=>void;
  form: MasterItem;
  categories: Category[];
  handleSelectChange: (name: keyof MasterItem,value: string) => void;
}