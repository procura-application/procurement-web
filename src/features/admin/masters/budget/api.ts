import type { PageRequestDto } from "@/features/utils/types";
import { mastersApiClient } from "../api/client";
import type { Budget } from "./type";

export const getBudgets = async (page: PageRequestDto) => {
  const response = await mastersApiClient.get("/budget", {
    params: page,
  });

  return response?.data?.data;
};

export const addBudget = async (budget: Budget) => {
  return mastersApiClient.post("/budget", budget);
};

export const updateBudget = async (id: string, budget: Budget) => {
  return mastersApiClient.patch(`/budget/${id}`, budget);
};

export const deleteBudget = async (id: string) => {
  return mastersApiClient.delete(`/budget/${id}`);
};
