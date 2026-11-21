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
import type { DeliveryLocationFormSheetProps } from "../type";

const DeliveryLocationFormSheet: React.FC<DeliveryLocationFormSheetProps> = ({
  open,
  isEditing,
  triggerModal,
  title,
  handleFormChange,
  handleSelectChange,
  handleSubmit,
  form,
  businessUnitList,
}) => (
  <Sheet open={open} onOpenChange={triggerModal}>
    <SheetContent side="bottom">
      <SheetHeader>
        <SheetTitle>{title}</SheetTitle>
      </SheetHeader>
      <div className="grid flex-1 auto-rows-min gap-6 px-4">
        <div className="grid gap-3 md:grid-cols-2">
          <div className="grid gap-3">
            <Label htmlFor="delivery-location-name" className="font-bold">
              Location Name
            </Label>
            <Input
              id="delivery-location-name"
              name="locationName"
              placeholder="Enter location name"
              onChange={handleFormChange}
              value={form.locationName ?? ""}
            />
          </div>

          <div className="grid gap-3">
            <Label htmlFor="delivery-location-business-unit" className="font-bold">
              Business Unit
            </Label>
            <select
              id="delivery-location-business-unit"
              className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              value={form.businessUnitId ?? ""}
              onChange={(event) =>
                handleSelectChange("businessUnitId", event.target.value)
              }
            >
              <option value="">Select a business unit</option>
              {businessUnitList.map((item) => (
                <option
                  key={item.id ?? item.businessUnitCode ?? item.businessUnitName}
                  value={item.id ?? ""}
                >
                  {item.businessUnitName ?? item.businessUnitCode ?? "Business Unit"}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <div className="grid gap-3">
            <Label htmlFor="delivery-location-address1" className="font-bold">
              Address Line 1
            </Label>
            <Input
              id="delivery-location-address1"
              name="addressLine1"
              placeholder="Enter address line 1"
              onChange={handleFormChange}
              value={form.addressLine1 ?? ""}
            />
          </div>

          <div className="grid gap-3">
            <Label htmlFor="delivery-location-address2" className="font-bold">
              Address Line 2
            </Label>
            <Input
              id="delivery-location-address2"
              name="addressLine2"
              placeholder="Enter address line 2"
              onChange={handleFormChange}
              value={form.addressLine2 ?? ""}
            />
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <div className="grid gap-3">
            <Label htmlFor="delivery-location-city" className="font-bold">
              City
            </Label>
            <Input
              id="delivery-location-city"
              name="city"
              placeholder="Enter city"
              onChange={handleFormChange}
              value={form.city ?? ""}
            />
          </div>

          <div className="grid gap-3">
            <Label htmlFor="delivery-location-state" className="font-bold">
              State
            </Label>
            <Input
              id="delivery-location-state"
              name="state"
              placeholder="Enter state"
              onChange={handleFormChange}
              value={form.state ?? ""}
            />
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <div className="grid gap-3">
            <Label htmlFor="delivery-location-country" className="font-bold">
              Country
            </Label>
            <Input
              id="delivery-location-country"
              name="country"
              placeholder="Enter country"
              onChange={handleFormChange}
              value={form.country ?? ""}
            />
          </div>

          <div className="grid gap-3">
            <Label htmlFor="delivery-location-postal-code" className="font-bold">
              Postal Code
            </Label>
            <Input
              id="delivery-location-postal-code"
              name="postalCode"
              placeholder="Enter postal code"
              onChange={handleFormChange}
              value={form.postalCode ?? ""}
            />
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <div className="grid gap-3">
            <Label htmlFor="delivery-location-contact-name" className="font-bold">
              Contact Person Name
            </Label>
            <Input
              id="delivery-location-contact-name"
              name="contactPersonName"
              placeholder="Enter contact person name"
              onChange={handleFormChange}
              value={form.contactPersonName ?? ""}
            />
          </div>

          <div className="grid gap-3">
            <Label htmlFor="delivery-location-contact-email" className="font-bold">
              Contact Email
            </Label>
            <Input
              id="delivery-location-contact-email"
              name="contactPersonEmail"
              type="email"
              placeholder="Enter contact email"
              onChange={handleFormChange}
              value={form.contactPersonEmail ?? ""}
            />
          </div>
        </div>

        <div className="grid gap-3">
          <Label htmlFor="delivery-location-contact-number" className="font-bold">
            Contact Number
          </Label>
          <Input
            id="delivery-location-contact-number"
            name="contactPersonNumber"
            placeholder="Enter contact number"
            onChange={handleFormChange}
            value={form.contactPersonNumber ?? ""}
          />
        </div>
      </div>

      <div className="mt-4 flex gap-2 px-4">
        <Button type="button" onClick={handleSubmit}>
          {isEditing ? "Update" : "Submit"}
        </Button>
        <SheetClose render={<Button variant="outline">Close</Button>} />
      </div>
      <SheetFooter />
    </SheetContent>
  </Sheet>
);

export default DeliveryLocationFormSheet;
