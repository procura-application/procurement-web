import BudgetPage from "@/features/admin/masters/budget/BudgetPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/admin/masters/budget/")({
  component: BudgetPage,
});
