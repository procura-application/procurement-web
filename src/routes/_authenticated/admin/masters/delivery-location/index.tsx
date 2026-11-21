import DeliveryLocationPage from "@/features/admin/masters/delivery-location/DeliveryLocationPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/admin/masters/delivery-location/")({
  component: DeliveryLocationPage,
});
