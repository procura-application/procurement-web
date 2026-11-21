import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SheetContent, SheetHeader, SheetTitle,SheetFooter, SheetClose, Sheet } from "@/components/ui/sheet"
import type { BusinessUnitFormSheetProps } from "../type"

const BusinessUnitFormSheet:React.FC<BusinessUnitFormSheetProps> = ({open,triggerModal,title,handleFormChange,handleSubmit,form}) => {
  return (
     <Sheet open={open} onOpenChange={triggerModal}>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
         
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-name" className="font-bold">Business Unit Name</Label>
            <Input id="sheet-demo-name" placeholder="Enter Business Unit Name" name="businessUnitName" 
            onChange={handleFormChange} value={form.businessUnitName} />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-username" className="font-bold">Business Unit Description</Label>
            <Input id="sheet-demo-username" placeholder="Enter Business Unit Description" name="businessUnitDescription" 
            onChange={handleFormChange} value={form.businessUnitDescription}/>
          </div>
           <div className="grid gap-3">
            <Label htmlFor="sheet-demo-username" className="font-bold">Business Unit Manager</Label>
            <Input id="sheet-demo-username" placeholder="Enter Business Unit Manager" name="businessUnitManager" 
            onChange={handleFormChange} value={form.businessUnitManager}/>
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

export default BusinessUnitFormSheet
