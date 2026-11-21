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
import type { MasterCurrencyFormSheetProps } from "../type";

const MasterCurrencyFormSheet: React.FC<MasterCurrencyFormSheetProps> = ({
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
          <Label htmlFor="master-currency-code" className="font-bold">
            Currency Code
          </Label>
          <Input
            id="master-currency-code"
            name="masterCurrencyCode"
            placeholder="Enter currency code"
            onChange={handleFormChange}
            value={form.masterCurrencyCode ?? ""}
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="master-currency-name" className="font-bold">
            Currency Name
          </Label>
          <Input
            id="master-currency-name"
            name="masterCurrencyName"
            placeholder="Enter currency name"
            onChange={handleFormChange}
            value={form.masterCurrencyName ?? ""}
          />
        </div>
        {!isEditing && (
          <>
            <div className="grid gap-3">
              <Label htmlFor="master-currency-main-unit" className="font-bold">
                Main Unit
              </Label>
              <Input
                id="master-currency-main-unit"
                name="mainUnit"
                placeholder="Enter main unit"
                onChange={handleFormChange}
                value={form.mainUnit ?? ""}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="master-currency-sub-unit" className="font-bold">
                Sub Unit
              </Label>
              <Input
                id="master-currency-sub-unit"
                name="subUnit"
                placeholder="Enter sub unit"
                onChange={handleFormChange}
                value={form.subUnit ?? ""}
              />
            </div>
          </>
        )}
      </div>
      <Button type="button" onClick={handleSubmit}>
        Submit
      </Button>
      <SheetClose render={<Button variant="outline">Close</Button>} />
      <SheetFooter />
    </SheetContent>
  </Sheet>
);

export default MasterCurrencyFormSheet;