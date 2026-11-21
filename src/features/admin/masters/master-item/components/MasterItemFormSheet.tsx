import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SheetContent, SheetHeader, SheetTitle,SheetFooter, SheetClose, Sheet } from "@/components/ui/sheet"
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from "@/components/ui/combobox"
import type { MasterItemSheetProps } from "../type"

const MasterItemFormChange:React.FC<MasterItemSheetProps> = ({open,triggerModal,title,handleFormChange,
  handleSubmit,form,categories,handleSelectChange}) => {
  const categoriesOptionList = categories?.map((category)=>(
    {
      label: category.masterCategoryName,
      key: category.masterCategoryId
    }
  ));
  console.log("matched:",(categoriesOptionList?.find((item)=>item.key==form.masterItemCategoryId)));
  return (
     <Sheet open={open} onOpenChange={triggerModal}>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
         
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-name" className="font-bold">Master Item Name</Label>
            <Input id="sheet-demo-name" placeholder="Enter Master Item Name" name="masterItemName" 
            onChange={handleFormChange} value={form.masterItemName} />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-name" className="font-bold">Master Item Description</Label>
            <Input id="sheet-demo-name" placeholder="Enter Master Item Name" name="masterItemDescription" 
            onChange={handleFormChange} value={form.masterItemDescription} />
          </div>
         
          <div className="grid gap-3">
          <Label htmlFor="sheet-demo-name" className="font-bold">Category</Label>

             <Combobox items={categoriesOptionList}
             itemToStringValue={(item) => item.label ?? ''}
            onValueChange={(value)=>handleSelectChange("masterItemCategoryId",value?.key ?? '')}
      value={categoriesOptionList?.find((item)=>item.key==form.masterItemCategoryId) ?? null}
             >
      <ComboboxInput placeholder="Select a Category" />
      <ComboboxContent>
        <ComboboxEmpty>No Category found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item.key} value={item}>
              {item.label}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
          </div>
        </div>
         <Button type="submit" onClick={handleSubmit}>Submit</Button>
          <SheetClose render={<Button variant="outline">Close</Button>} />
        <SheetFooter>
         
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default MasterItemFormChange
