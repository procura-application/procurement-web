import type { PageRequestDto } from "@/features/utils/types";
import { mastersApiClient } from "../api/client";
import type { Category } from "./type";

export const getCategories= async(page?:PageRequestDto)=>{

    const response =  await mastersApiClient.get(`/category?pageNumber=${page?.pageNumber}&pageSize=${page?.pageSize}`);
    return response?.data?.data;

}

export const saveCategory = async(category:Category)=>{
    return await mastersApiClient.post('/category',category);
}

export const updateCategory = async(category:Category)=>{
    return await mastersApiClient.patch(`/category/${category.masterCategoryId}`,category );
}

export const deleteCategory = async(id:string)=>{
    return await mastersApiClient.delete(`/category/${id}`);
}