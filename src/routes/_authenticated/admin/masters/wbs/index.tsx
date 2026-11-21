import WbsPage from "@/features/admin/masters/wbs/WbsPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/admin/masters/wbs/")({
  component: WbsPage,
});
