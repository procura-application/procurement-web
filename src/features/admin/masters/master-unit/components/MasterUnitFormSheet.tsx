import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import type { MasterUnitFormSheetProps } from "../type";

const MasterUnitFormSheet: React.FC<MasterUnitFormSheetProps> = ({
  open,
  isEditing,
  triggerModal,
  title,
  handleFormChange,
  handleSubmit,
  form,
}) => (
  <Sheet open={open} onOpenChange={triggerModal}>
    <SheetContent side="bottom">
      <SheetHeader>
        <SheetTitle>{title}</SheetTitle>
      </SheetHeader>
      <div className="grid flex-1 auto-rows-min gap-6 px-4">
        <div className="grid gap-3">
          <Label htmlFor="master-unit-code" className="font-bold">
            Unit Code
          </Label>
          <Input
            id="master-unit-code"
            name="masterUnitCode"
            placeholder="Enter unit code"
            onChange={handleFormChange}
            value={form.masterUnitCode ?? ""}
            disabled={isEditing}
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="master-unit-name" className="font-bold">
            Unit Name
          </Label>
          <Input
            id="master-unit-name"
            name="masterUnitName"
            placeholder="Enter unit name"
            onChange={handleFormChange}
            value={form.masterUnitName ?? ""}
          />
        </div>
      </div>
      <Button type="button" onClick={handleSubmit}>
        Submit
      </Button>
      <SheetClose render={<Button variant="outline">Close</Button>} />
      <SheetFooter />
    </SheetContent>
  </Sheet>
);

export default MasterUnitFormSheet;