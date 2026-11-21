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
import type { ProjectFormSheetProps } from "../type";

const ProjectFormSheet: React.FC<ProjectFormSheetProps> = ({
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
          <Label htmlFor="project-name" className="font-bold">
            Project Name
          </Label>
          <Input
            id="project-name"
            name="projectName"
            placeholder="Enter project name"
            onChange={handleFormChange}
            value={form.projectName ?? ""}
          />
        </div>

        <div className="grid gap-3">
          <Label htmlFor="project-business-unit" className="font-bold">
            Business Unit
          </Label>
          <select
            id="project-business-unit"
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
          <Label htmlFor="project-description" className="font-bold">
            Description
          </Label>
          <textarea
            id="project-description"
            name="description"
            placeholder="Enter description"
            onChange={handleFormChange}
            value={form.description ?? ""}
            className="flex min-h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <div className="grid gap-3">
            <Label htmlFor="project-start-date" className="font-bold">
              Start Date
            </Label>
            <Input
              id="project-start-date"
              type="date"
              name="startDate"
              onChange={handleFormChange}
              value={form.startDate ?? ""}
            />
          </div>

          <div className="grid gap-3">
            <Label htmlFor="project-end-date" className="font-bold">
              End Date
            </Label>
            <Input
              id="project-end-date"
              type="date"
              name="endDate"
              onChange={handleFormChange}
              value={form.endDate ?? ""}
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input
            id="project-date-range-valid"
            type="checkbox"
            checked={form.dateRangeValid ?? false}
            onChange={(event) =>
              handleSelectChange("dateRangeValid", event.target.checked)
            }
          />
          <Label htmlFor="project-date-range-valid" className="font-bold">
            Date range valid
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

export default ProjectFormSheet;
