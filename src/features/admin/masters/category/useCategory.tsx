import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteCategory, getCategories, saveCategory, updateCategory } from "./api";
import { useState } from "react";
import type { ColumnDef, PaginationState } from "@tanstack/react-table";
import type { features } from "@/features/data-table/data-table-features";
import type { Category } from "./type";
import StatusBadge from "@/features/components/StatusBadge";
import { masterStatusConfig } from "../utils/statusConfig";
import { toast } from "react-toastify";
import { getBusinessUnits } from "../business-unit/api";
import { Pencil, Trash } from "lucide-react";

const emptyForm = {
    masterCategoryName:''
}
export function useCategory(){

    const [page,setPage]= useState<PaginationState>({
        pageIndex:0,
        pageSize:10
    });
    const [form,setForm] = useState<Category>({
        masterCategoryName:'',
        itemType:undefined,
        businessUnitId:'',
        categoryName:''
    });
    const [openForm,setOpenForm] = useState<boolean>(false);
    const {data} = useQuery({
        queryKey:["category",page.pageIndex,page.pageSize],
        queryFn: async()=>{
            return getCategories({
                pageNumber:page.pageIndex,pageSize:page.pageSize
            });
        }
    });
    const {data:businessUnits} = useQuery({
        queryKey:['bu'],
        queryFn: async ()=> {
            return await getBusinessUnits({
            pageNumber:0,pageSize:100
        })
    }
    })
    const query = useQueryClient();
    const addCategoryMutation = useMutation({
        mutationFn:saveCategory,
        onSuccess:()=>{
                setForm(emptyForm);
                toast.success('Category Added Successfully');
                triggerModal();
                query.invalidateQueries({
                    queryKey:['category']
                })
        },
        onError:(error)=>{
            console.log("error:",error);
                toast.error(`There was some issue with adding the category : ${error.message}`);
                
        }
    });
    const updateCategoryMutation = useMutation({
        mutationFn: updateCategory,
        onSuccess:()=>{
                setForm(emptyForm);
                toast.success('Category Updated Successfully');
                triggerModal();
                query.invalidateQueries({
                    queryKey:['category']
                })
        },
        onError:(error)=>{
            console.log("error:",error);
                toast.error(`There was some issue with updating the category : ${error.message}`);
                
        }
    });

        const deleteCategoryMutation = useMutation({
        mutationFn: deleteCategory,
        onSuccess:()=>{
                toast.success('Category deleted Successfully');
                query.invalidateQueries({
                    queryKey:['category']
                })
        },
        onError:(error)=>{
                toast.error(`There was some issue with delete the category : ${error.message}`);
                
        }
    });
    const columns : Array<ColumnDef<typeof features, Category>> = [
        {
            accessorKey:"masterCategoryCode",
            header:"Category Code"
        },
        {
            accessorKey:"masterCategoryName",
            header:"Category Name"
        },
        {
            accessorKey:"itemType",
            header:"Item Type"
        },
        {
            accessorKey:"businessUnitCode",
            header:"Business Unit Code"
        },
        {
            accessorKey:"businessUnitName",
            header:"Business Unit Name"
        },
          {
            accessorKey:"status",
            header:"Status",
            cell:({row}) => {
                return <StatusBadge
                status={row?.original?.status || "NOTFOUND"}
                config={masterStatusConfig}
                />
            }
        },
         {
          accessorKey:'Actions',
          cell:({row})=>{
            const status = row.original.status
            return <div className="flex gap-2">
            <Pencil size={15} className="cursor-pointer" onClick={()=>handleUpdateModal(row.original)}/>
            {status==='ACTIVE' && <Trash size={15} className="cursor-pointer"  onClick={()=>handleDeleteCategory(row.original.masterCategoryId)}/>}
            </div>
          }
        }
    ];
    const triggerModal = ()=>{
        const open = openForm;
        setOpenForm(!openForm);
        if(open) setForm((prev)=>({
            ...prev,masterCategoryId:''
        }))
    };
    const handleFormChange = (event:React.ChangeEvent<HTMLInputElement>)=> {
        const {name,value} = event.target;
        setForm((prevData)=>({
            ...prevData,[name]:value
        }));
    }
    const handleSelectChange = (name: keyof Category,value: string) => {
  setForm((prev) => ({
    ...prev,
    [name]: value,
  }));
};
    const handleUpdateModal = (category:Category) =>{
        setForm({
            categoryName:category.masterCategoryName,
            businessUnitId: category.businessUnitId,
            itemType: category.itemType,
            masterCategoryId:category.masterCategoryId
        });
        triggerModal();
    }
    const handleSubmit = ()=>{
        //console.log("update form:",form);
        addCategoryMutation.mutate(form);
    }
    const handleUpdateCategory = ()=>{
            updateCategoryMutation.mutate(form);
    }
    const handleDeleteCategory = (id:string)=>{
            deleteCategoryMutation.mutate(id);
    }
    return {page,setPage,rows: data?.content ?? [],columns,rowCount: data?.totalElements,triggerModal,
            form,handleFormChange,handleSubmit,openForm,businessUnits: businessUnits?.content,handleSelectChange,
            handleUpdateCategory
    };
}