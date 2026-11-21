import ProjectPage from "@/features/admin/masters/project/ProjectPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/admin/masters/project/")({
  component: ProjectPage,
});
