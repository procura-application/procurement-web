import type { PageRequestDto } from "@/features/utils/types";
import { mastersApiClient } from "../api/client";
import type { DeliveryLocation } from "./type";

export const getDeliveryLocations = async (page: PageRequestDto) => {
  const response = await mastersApiClient.get("/delivery-location", {
    params: page,
  });

  return response?.data?.data;
};

export const addDeliveryLocation = async (deliveryLocation: DeliveryLocation) => {
  return mastersApiClient.post("/delivery-location", deliveryLocation);
};

export const updateDeliveryLocation = async (
  id: string,
  deliveryLocation: DeliveryLocation,
) => {
  return mastersApiClient.patch(`/delivery-location/${id}`, deliveryLocation);
};

export const deleteDeliveryLocation = async (id: string) => {
  return mastersApiClient.delete(`/delivery-location/${id}`);
};
