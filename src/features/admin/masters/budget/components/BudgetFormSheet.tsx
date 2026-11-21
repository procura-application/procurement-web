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
import type { BudgetFormSheetProps } from "../type";

const BudgetFormSheet: React.FC<BudgetFormSheetProps> = ({
  open,
  isEditing,
  triggerModal,
  title,
  handleFormChange,
  handleSelectChange,
  handleSubmit,
  form,
  wbsList,
  currencies,
}) => (
  <Sheet open={open} onOpenChange={triggerModal}>
    <SheetContent side="bottom">
      <SheetHeader>
        <SheetTitle>{title}</SheetTitle>
      </SheetHeader>
      <div className="grid flex-1 auto-rows-min gap-6 px-4">
        <div className="grid gap-3">
          <Label htmlFor="budget-name" className="font-bold">
            Budget Name
          </Label>
          <Input
            id="budget-name"
            name="budgetName"
            placeholder="Enter budget name"
            onChange={handleFormChange}
            value={form.budgetName ?? ""}
          />
        </div>

        <div className="grid gap-3">
          <Label htmlFor="budget-wbs" className="font-bold">
            WBS
          </Label>
          <select
            id="budget-wbs"
            className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            value={form.wbsId ?? ""}
            onChange={(event) => handleSelectChange("wbsId", event.target.value)}
          >
            <option value="">Select a WBS</option>
            {wbsList.map((item) => (
              <option
                key={item.id ?? item.wbsCode ?? item.wbsName}
                value={item.id ?? ""}
              >
                {item.wbsName ?? item.wbsCode ?? "WBS"}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-3">
          <Label htmlFor="budget-currency" className="font-bold">
            Currency
          </Label>
          <select
            id="budget-currency"
            className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            value={form.currencyCode ?? ""}
            onChange={(event) => handleSelectChange("currencyCode", event.target.value)}
          >
            <option value="">Select a currency</option>
            {currencies.map((currency) => (
              <option
                key={currency.masterCurrencyCode ?? currency.code ?? currency.masterCurrencyName}
                value={currency.masterCurrencyCode ?? currency.code ?? ""}
              >
                {currency.masterCurrencyName ?? currency.name ?? currency.masterCurrencyCode ?? "Currency"}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-3">
          <Label htmlFor="budget-description" className="font-bold">
            Description
          </Label>
          <textarea
            id="budget-description"
            name="budgetDescription"
            placeholder="Enter description"
            onChange={handleFormChange}
            value={form.budgetDescription ?? ""}
            className="flex min-h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <div className="grid gap-3">
            <Label htmlFor="budget-allocated-amount" className="font-bold">
              Allocated Amount
            </Label>
            <Input
              id="budget-allocated-amount"
              type="number"
              name="allocatedAmount"
              placeholder="0.00"
              onChange={handleFormChange}
              value={form.allocatedAmount ?? 0}
            />
          </div>

          <div className="grid gap-3">
            <Label htmlFor="budget-consumed-amount" className="font-bold">
              Consumed Amount
            </Label>
            <Input
              id="budget-consumed-amount"
              type="number"
              name="consumedAmount"
              placeholder="0.00"
              onChange={handleFormChange}
              value={form.consumedAmount ?? 0}
              disabled
            />
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <div className="grid gap-3">
            <Label htmlFor="budget-start-date" className="font-bold">
              Start Date
            </Label>
            <Input
              id="budget-start-date"
              type="date"
              name="startDate"
              onChange={handleFormChange}
              value={form.startDate ?? ""}
            />
          </div>

          <div className="grid gap-3">
            <Label htmlFor="budget-end-date" className="font-bold">
              End Date
            </Label>
            <Input
              id="budget-end-date"
              type="date"
              name="endDate"
              onChange={handleFormChange}
              value={form.endDate ?? ""}
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input
            id="budget-date-range-valid"
            type="checkbox"
            checked={form.dateRangeValid ?? false}
            onChange={(event) =>
              handleSelectChange("dateRangeValid", event.target.checked)
            }
          />
          <Label htmlFor="budget-date-range-valid" className="font-bold">
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

export default BudgetFormSheet;
