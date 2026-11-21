import type { PageRequestDto } from "@/features/utils/types";
import { mastersApiClient } from "../api/client";
import type { Wbs } from "./type";

export const getWbs = async (page: PageRequestDto) => {
  const response = await mastersApiClient.get("/wbs", {
    params: page,
  });

  return response?.data?.data;
};

export const addWbs = async (wbs: Wbs) => {
  return mastersApiClient.post("/wbs", wbs);
};

export const updateWbs = async (id: string, wbs: Wbs) => {
  return mastersApiClient.patch(`/wbs/${id}`, wbs);
};

export const deleteWbs = async (id: string) => {
  return mastersApiClient.delete(`/wbs/${id}`);
};
