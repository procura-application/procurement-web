import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SheetContent, SheetHeader, SheetTitle,SheetFooter, SheetClose, Sheet } from "@/components/ui/sheet"
import type { CategorySheetProps } from "../type"
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from "@/components/ui/combobox"
import { itemtypeList } from "../constants"
import type { ChangeEvent } from "react"

const CategoryFormSheet:React.FC<CategorySheetProps> = ({open,triggerModal,title,handleFormChange,
  handleSubmit,form,businessUnits,handleSelectChange}) => {
  const businessUnitOptionsList = businessUnits?.map((businessUnit)=>(
    {
      label: businessUnit.businessUnitName,
      key: businessUnit.id
    }
  ));
  return (
     <Sheet open={open} onOpenChange={triggerModal}>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
         
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-name" className="font-bold">Category Name</Label>
            <Input id="sheet-demo-name" placeholder="Enter Category Name" name="categoryName" 
            onChange={handleFormChange} value={form.categoryName} />
          </div>
          <div className="grid gap-3">
          <Label htmlFor="sheet-demo-name" className="font-bold">Item Type</Label>

             <Combobox items={itemtypeList}
             itemToStringValue={(item) => item.label}
            onValueChange={(value)=>handleSelectChange("itemType",value.key)}
            value={itemtypeList.find((item)=>item.key==form.itemType)}
             >
      <ComboboxInput placeholder="Select an Item Type" />
      <ComboboxContent>
        <ComboboxEmpty>No item type found.</ComboboxEmpty>
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
          <div className="grid gap-3">
          <Label htmlFor="sheet-demo-name" className="font-bold">Business Unit</Label>

             <Combobox items={businessUnitOptionsList}
             itemToStringValue={(item) => item.label ?? ''}
            onValueChange={(value)=>handleSelectChange("businessUnitId",value.key)}
      value={businessUnitOptionsList?.find((item)=>item.key==form.businessUnitId)}
             >
      <ComboboxInput placeholder="Select a Business Unit" />
      <ComboboxContent>
        <ComboboxEmpty>No Business Unit found.</ComboboxEmpty>
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

export default CategoryFormSheet
