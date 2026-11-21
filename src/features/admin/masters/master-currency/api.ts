import type { PageRequestDto } from "@/features/utils/types";
import { mastersApiClient } from "../api/client";
import type { MasterCurrency } from "./type";

export const getMasterCurrencies = async (page: PageRequestDto) => {
  const response = await mastersApiClient.get("/master-currency", {
    params: page,
  });
  return response?.data?.data;
};

export const addMasterCurrency = async (currency: MasterCurrency) => {
  return mastersApiClient.post("/master-currency", currency);
};

export const updateMasterCurrency = async (currency: MasterCurrency) => {
  return mastersApiClient.patch("/master-currency", currency);
};

export const deleteMasterCurrency = async (currencyCode: string) => {
  return mastersApiClient.delete(`/master-currency/${currencyCode}`);
};