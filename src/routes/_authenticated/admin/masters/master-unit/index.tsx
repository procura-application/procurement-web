import MasterUnitPage from "@/features/admin/masters/master-unit/MasterUnitPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_authenticated/admin/masters/master-unit/",
)({
  component: MasterUnitPage,
});