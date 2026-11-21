import type { PageRequestDto } from "@/features/utils/types";
import { mastersApiClient } from "../api/client";
import type { MasterItem } from "./type";

export const getMasterItemList = async (page?:PageRequestDto) => {
   return await mastersApiClient.get(`/master-item?pageNumber=${page?.pageNumber}&pageSize=${page?.pageSize}`);

}

export const addMasterItem = async(masterItem:MasterItem)=>{
    return await mastersApiClient.post('/master-item',masterItem);

}


export const updateMasterItem = async(masterItem: MasterItem)=>{
    return await mastersApiClient.patch(`/master-item/${masterItem.masterItemId}`,masterItem);
}

export const deleteMasterItem = async(masterItemId:string)=>{
    return await mastersApiClient.delete(`/master-item/${masterItemId}`);
}