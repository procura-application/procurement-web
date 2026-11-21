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
import type { WbsFormSheetProps } from "../type";

const WbsFormSheet: React.FC<WbsFormSheetProps> = ({
  open,
  isEditing,
  triggerModal,
  title,
  handleFormChange,
  handleSelectChange,
  handleSubmit,
  form,
  projects,
}) => (
  <Sheet open={open} onOpenChange={triggerModal}>
    <SheetContent side="bottom">
      <SheetHeader>
        <SheetTitle>{title}</SheetTitle>
      </SheetHeader>
      <div className="grid flex-1 auto-rows-min gap-6 px-4">
        <div className="grid gap-3">
          <Label htmlFor="wbs-name" className="font-bold">
            WBS Name
          </Label>
          <Input
            id="wbs-name"
            name="wbsName"
            placeholder="Enter WBS name"
            onChange={handleFormChange}
            value={form.wbsName ?? ""}
          />
        </div>

        <div className="grid gap-3">
          <Label htmlFor="wbs-project" className="font-bold">
            Project
          </Label>
          <select
            id="wbs-project"
            className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            value={form.projectId ?? ""}
            onChange={(event) => handleSelectChange("projectId", event.target.value)}
          >
            <option value="">Select a project</option>
            {projects.map((project) => (
              <option
                key={project.id ?? project.projectCode ?? project.projectName}
                value={project.id ?? ""}
              >
                {project.projectName ?? project.projectCode ?? "Project"}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-3">
          <Label htmlFor="wbs-description" className="font-bold">
            Description
          </Label>
          <textarea
            id="wbs-description"
            name="wbsDescription"
            placeholder="Enter description"
            onChange={handleFormChange}
            value={form.wbsDescription ?? ""}
            className="flex min-h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <div className="grid gap-3">
            <Label htmlFor="wbs-start-date" className="font-bold">
              Start Date
            </Label>
            <Input
              id="wbs-start-date"
              type="date"
              name="startDate"
              onChange={handleFormChange}
              value={form.startDate ?? ""}
            />
          </div>

          <div className="grid gap-3">
            <Label htmlFor="wbs-end-date" className="font-bold">
              End Date
            </Label>
            <Input
              id="wbs-end-date"
              type="date"
              name="endDate"
              onChange={handleFormChange}
              value={form.endDate ?? ""}
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input
            id="wbs-date-range-valid"
            type="checkbox"
            checked={form.dateRangeValid ?? false}
            onChange={(event) =>
              handleSelectChange("dateRangeValid", event.target.checked)
            }
          />
          <Label htmlFor="wbs-date-range-valid" className="font-bold">
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

export default WbsFormSheet;
