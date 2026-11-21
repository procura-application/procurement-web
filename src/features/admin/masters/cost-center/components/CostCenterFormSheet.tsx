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
import type { CostCenterFormSheetProps } from "../type";

const CostCenterFormSheet: React.FC<CostCenterFormSheetProps> = ({
  open,
  isEditing,
  triggerModal,
  title,
  handleFormChange,
  handleSelectChange,
  handleSubmit,
  form,
  businessUnits,
}) => (
  <Sheet open={open} onOpenChange={triggerModal}>
    <SheetContent side="bottom">
      <SheetHeader>
        <SheetTitle>{title}</SheetTitle>
      </SheetHeader>
      <div className="grid flex-1 auto-rows-min gap-6 px-4">
        <div className="grid gap-3">
          <Label htmlFor="cost-center-name" className="font-bold">
            Cost Center Name
          </Label>
          <Input
            id="cost-center-name"
            name="costCenterName"
            placeholder="Enter cost center name"
            onChange={handleFormChange}
            value={form.costCenterName ?? ""}
          />
        </div>

        <div className="grid gap-3">
          <Label htmlFor="cost-center-business-unit" className="font-bold">
            Business Unit
          </Label>
          <select
            id="cost-center-business-unit"
            className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            value={form.businessUnitId ?? ""}
            onChange={(event) => handleSelectChange("businessUnitId", event.target.value)}
          >
            <option value="">Select a business unit</option>
            {businessUnits.map((businessUnit) => (
              <option
                key={businessUnit.id ?? businessUnit.businessUnitCode ?? businessUnit.businessUnitName}
                value={businessUnit.id ?? ""}
              >
                {businessUnit.businessUnitName ?? businessUnit.businessUnitCode ?? "Business Unit"}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-3">
          <Label htmlFor="cost-center-description" className="font-bold">
            Description
          </Label>
          <textarea
            id="cost-center-description"
            name="description"
            placeholder="Enter description"
            onChange={handleFormChange}
            value={form.description ?? ""}
            className="flex min-h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <div className="grid gap-3">
            <Label htmlFor="cost-center-effective-from" className="font-bold">
              Effective From
            </Label>
            <Input
              id="cost-center-effective-from"
              type="date"
              name="effectiveFromDate"
              onChange={handleFormChange}
              value={form.effectiveFromDate ?? ""}
            />
          </div>

          <div className="grid gap-3">
            <Label htmlFor="cost-center-effective-to" className="font-bold">
              Effective To
            </Label>
            <Input
              id="cost-center-effective-to"
              type="date"
              name="effectiveToDate"
              onChange={handleFormChange}
              value={form.effectiveToDate ?? ""}
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input
            id="cost-center-effective-range"
            type="checkbox"
            checked={form.effectiveDateRangeValid ?? false}
            onChange={(event) =>
              handleSelectChange("effectiveDateRangeValid", event.target.checked)
            }
          />
          <Label htmlFor="cost-center-effective-range" className="font-bold">
            Effective date range valid
          </Label>
        </div>
      </div>

      <div className="mt-4 flex gap-2 px-4">
        <Button type="button" onClick={handleSubmit}>
          Submit
        </Button>
        <SheetClose render={<Button variant="outline">Close</Button>} />
      </div>
      <SheetFooter />
    </SheetContent>
  </Sheet>
);

export default CostCenterFormSheet;
