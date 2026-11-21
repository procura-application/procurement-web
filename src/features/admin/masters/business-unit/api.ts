import type { PageRequestDto } from "@/features/utils/types";
import { mastersApiClient } from "../api/client";
import type { BusinessUnit } from "./type";


export const getBusinessUnits = async (page?:PageRequestDto) => {
const response = await mastersApiClient.get(`/businessUnit?pageNumber=${page?.pageNumber}&pageSize=${page?.pageSize}`);
    return response?.data?.data;
}

export const addBusinessUnit = async(bu:BusinessUnit) => {
    const response = await mastersApiClient.post('/businessUnit',bu);
    return response;
}

export const updateBusinessUnit = async(bu:BusinessUnit)=>{
    const response = await mastersApiClient.put(`/businessUnit/${bu.id}`,bu);
    return response;
}

export const deleteBusinessUnit = async(id:string)=>{
    return mastersApiClient.delete(`/businessUnit/${id}`)
}