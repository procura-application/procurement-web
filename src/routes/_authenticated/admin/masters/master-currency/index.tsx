import MasterCurrencyPage from "@/features/admin/masters/master-currency/MasterCurrencyPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_authenticated/admin/masters/master-currency/",
)({
  component: MasterCurrencyPage,
});