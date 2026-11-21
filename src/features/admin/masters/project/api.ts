import type { PageRequestDto } from "@/features/utils/types";
import { mastersApiClient } from "../api/client";
import type { Project } from "./type";

export const getProjects = async (page: PageRequestDto) => {
  const response = await mastersApiClient.get("/project", {
    params: page,
  });

  return response?.data?.data;
};

export const addProject = async (project: Project) => {
  return mastersApiClient.post("/project", project);
};

export const updateProject = async (id: string, project: Project) => {
  return mastersApiClient.patch(`/project/${id}`, project);
};

export const deleteProject = async (id: string) => {
  return mastersApiClient.delete(`/project/${id}`);
};
