import type { PageRequestDto } from "@/features/utils/types";
import { mastersApiClient } from "../api/client";
import type { MasterUnit } from "./type";

export const getMasterUnits = async (page: PageRequestDto) => {
  const response = await mastersApiClient.get("/master-unit", {
    params: page,
  });
  return response?.data?.data;
};

export const addMasterUnit = async (unit: MasterUnit) => {
  return mastersApiClient.post("/master-unit", unit);
};

export const updateMasterUnit = async (unit: MasterUnit) => {
  return mastersApiClient.patch("/master-unit", unit);
};

export const deleteMasterUnit = async (unitCode: string) => {
  return mastersApiClient.delete(`/master-unit/${unitCode}`);
};