import CostCenterPage from "@/features/admin/masters/cost-center/CostCenterPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/admin/masters/cost-center/")({
  component: CostCenterPage,
});
