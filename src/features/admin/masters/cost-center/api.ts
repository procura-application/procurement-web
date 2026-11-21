import type { PageRequestDto } from "@/features/utils/types";
import { mastersApiClient } from "../api/client";
import type { CostCenter } from "./type";

export const getCostCenters = async (page: PageRequestDto) => {
  const response = await mastersApiClient.get("/cost-center", {
    params: page,
  });

  return response?.data?.data;
};

export const addCostCenter = async (costCenter: CostCenter) => {
  return mastersApiClient.post("/cost-center", costCenter);
};

export const updateCostCenter = async (id: string, costCenter: CostCenter) => {
  return mastersApiClient.patch(`/cost-center/${id}`, costCenter);
};

export const deleteCostCenter = async (id: string) => {
  return mastersApiClient.delete(`/cost-center/${id}`);
};
