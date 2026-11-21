import type { ColumnDef, PaginationState } from "@tanstack/react-table";
import type { MasterItem } from "./type";
import type { features } from "@/features/data-table/data-table-features";
import { useState} from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addMasterItem, deleteMasterItem, getMasterItemList, updateMasterItem } from "./api";
import { getCategories } from "../category/api";
import { toast } from "react-toastify";
import StatusBadge from "@/features/components/StatusBadge";
import { Pencil,  Trash } from "lucide-react";
import { masterStatusConfig } from "../utils/statusConfig";

const emptyForm = {
        masterItemName:'',
        masterItemDescription:'',
        masterItemCategoryId:''
    };
export function useMasterItem(){

    const [page,setPage] = useState<PaginationState>({
        pageIndex:0,pageSize:10
    });
    const [form,setForm] = useState<MasterItem>(emptyForm)
    const [openModal,setOpenModal] = useState<boolean>(false);
    const query = useQueryClient();
    const {data} = useQuery({
        queryKey:['master-item',page.pageIndex,page.pageSize],
        queryFn: async ()=>{
           return await  getMasterItemList({pageNumber:page.pageIndex,pageSize:page.pageSize})
        }
    });
    const {data:categories} = useQuery({
        queryKey:['category-master-item'],
        queryFn: async() =>{
            return await getCategories({pageNumber:0,pageSize:1000})
        }
    });
    const saveMasterItemMutation = useMutation({
        mutationFn: addMasterItem,
        onSuccess:()=>{
            setForm(emptyForm);
            triggerModal();
            toast.success('Master Item Saved Successfully');
            query.invalidateQueries({
                queryKey:['master-item']
            })
        },
        onError:()=>{
             toast.error('Error in Saving Master Item');
        }
    });
    const updateMasterItemMutation = useMutation({
        mutationFn: updateMasterItem,
        onSuccess:()=>{
            setForm(emptyForm);
            triggerModal();
            toast.success('Master Item Updated Successfully');
            query.invalidateQueries({
                queryKey:['master-item']
            })
        },
        onError:()=>{
             toast.error('Error in Updating Master Item');
        }
    });
    const deleteMasterItemMutation = useMutation({
        mutationFn:deleteMasterItem,
        onSuccess:()=>{
            toast.success("Master Item Deleted Successfully");
            query.invalidateQueries({
                queryKey:['master-item']
            })
            
        },
        onError:()=>{
                toast.error("Issue in deleting Master Item")
            }
    })
    const columns :Array<ColumnDef<typeof features, MasterItem>> = [
            {
                accessorKey:'masterItemCode',
                header:'Master Item Code'
            },
            {
                accessorKey:'masterItemName',
                header: 'Master Item Name',
            },
            {
                accessorKey:'masterItemDescription',
                header:' Master Item Description'
            },
             {
                accessorKey:'status',
                header:'Status',
                cell: ({row})=>{
                    return <StatusBadge
                    status={row.original.status ?? 'NOTFOUND'}
                    config={masterStatusConfig}
                    />
                }
            },
            {
                accessorKey:'masterItemCategory',
                header:' Category Code'
            },
            {
                accessorKey:'masterItemCategoryName',
                header:'Category Name'
            },
            {
                accessorKey:'masterItemBusinessUnitCode',
                header:'Business Unit Code'
            },
            {
                accessorKey:'masterItemBusinessUnitName',
                header:'Business Unit Name'
            },
            {
                accessorKey:'status',
                cell:({row})=>{
                    const status = row.original.status;
                   return  <div className="flex gap-2">
            <Pencil size={15} className="cursor-pointer" onClick={()=>handleUpdateModal(row.original)}/>
            {status==='ACTIVE' && <Trash size={15} className="cursor-pointer"  onClick={()=>handleDelete(row.original.masterItemId ?? '')}/>}
            </div>
                }
            }
           
    ];
    const handleUpdateModal = (masterItem:MasterItem)=>{
        setForm({
            masterItemName: masterItem.masterItemName,
            masterItemDescription: masterItem.masterItemDescription,
            masterItemCategoryId: masterItem.masterItemCategoryId,
            masterItemId: masterItem.masterItemId
        });
        triggerModal();
    }
    const triggerModal = ()=>{
        const masterItemId = form.masterItemId
        setOpenModal(!openModal);
        if(masterItemId && masterItemId!='') setForm((prev)=>({
            ...prev,masterItemId:''
        }));
    }
    const handleFormChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value} = event.target;
        setForm((prev)=>({
            ...prev,[name]:value
        }))

    };

    const handleSelectChange = (key:keyof MasterItem,value:string)=>{
        setForm((prev)=>({
            ...prev,[key]:value
        }))
    }

    const handleSubmit = ()=>{
        saveMasterItemMutation.mutate(form);
    }
    const handleUpdate = ()=>{
        updateMasterItemMutation.mutate(form);
    }
    const handleDelete = (masterItemId:string)=>{
            deleteMasterItemMutation.mutate(masterItemId);
    }
    return {rows: data?.data?.data?.content ?? [],columns,page,setPage,
        rowCount:data?.data.data?.totalElements,categories: categories?.content ?? [],triggerModal,openModal,form,
    handleFormChange,handleSelectChange,handleSubmit,handleUpdate
    }
}