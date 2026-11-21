import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addBusinessUnit, deleteBusinessUnit, getBusinessUnits, updateBusinessUnit } from "./api";
import type { ColumnDef, PaginationState } from "@tanstack/react-table";
import type { features } from "@/features/data-table/data-table-features";
import type { BusinessUnit } from "./type";
import StatusBadge from "@/features/components/StatusBadge";
import { masterStatusConfig } from "../utils/statusConfig";
import { useState } from "react";
import { toast } from "react-toastify";
import { Pencil, Trash } from "lucide-react";

const emptyForm = {
    businessUnitName:'',
    businessUnitDescription:'',
    businessUnitManager:''
  }
export default function useBusinessUnit() {
  console.log("🟢 useBusinessUnit HOOK RENDERED");
  const [openModal,setOpenModal] = useState<boolean>(false);
  const [form,setForm] = useState<BusinessUnit>(emptyForm);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
   const { status, data } = useQuery({
    queryKey: [
    "business-units",
    pagination.pageIndex,
    pagination.pageSize,
  ],
  queryFn: async () => {
    console.log("🔥 BUSINESS UNIT QUERY FUNCTION CALLED");
    return getBusinessUnits({pageNumber:pagination.pageIndex,
      pageSize:pagination.pageSize
    });
  }
//queryFn: getBusinessUnits
});
const queryClient = useQueryClient();

const addBuMutation = useMutation({
  mutationFn:addBusinessUnit,
  onSuccess: ()=>{
    toast.success('Business Unit Added Successfully');
       queryClient.invalidateQueries({
      queryKey: ["business-units"],
    });
    triggerModal();
    setForm(emptyForm)
  },
  onError: (error) =>{
    toast.success('Error Adding Business Unit: ',error.message);
triggerModal();
  }
});
const updateBuMutation = useMutation({
  mutationFn:updateBusinessUnit,
  onSuccess: ()=>{
    toast.success('Business Unit Updated Successfully');
       queryClient.invalidateQueries({
      queryKey: ["business-units"],
    });
    triggerModal();
    setForm(emptyForm)
  },
  onError: (error) =>{
    toast.success('Error updating Business Unit: ',error.message);
triggerModal();
  }
});
const deleteBuMutation = useMutation({
  mutationFn:deleteBusinessUnit,
  onSuccess: ()=>{
    toast.success('Business Unit Deleted Successfully');
       queryClient.invalidateQueries({
      queryKey: ["business-units"],
    });
    setForm(emptyForm)
  },
  onError: (error) =>{
    toast.success('Error Deleting Business Unit: ',error.message);
  }
});

const triggerModal = ()=>{
  const originalVal = openModal;
  setOpenModal(!openModal);
  if(originalVal)
  setForm((prevdata)=>({
    ...prevdata,id:''
  }))
}


    const columns: Array<ColumnDef<typeof features, BusinessUnit>> = [
        {
           accessorKey:'businessUnitCode',
           header:'Business Unit Code'
        },
          {
           accessorKey:'businessUnitName',
           header:'Business Unit Name'
        },
          {
           accessorKey:'businessUnitDescription',
           header:'Business Unit Description'
        },
          {
           accessorKey:'businessUnitManager',
           header:'Business Unit Manager'
        },
        {
            accessorKey:'status',
            header:'Status',
            
            cell : ({row}) =>{

                return (
                    <StatusBadge
                    status={row?.original.status ?? 'NOTFOUND'}
                    config={masterStatusConfig}
                    />)
            }
        },
        {
          accessorKey:'Actions',
          cell:({row})=>{
            const status = row.original.status
            return <div className="flex gap-2">
            <Pencil size={15} className="cursor-pointer" onClick={()=>handleUpdate(row.original)}/>
            {status==='ACTIVE' && <Trash size={15} className="cursor-pointer" onClick={()=>handleDelete(row.original.id ?? '')}/>}
            </div>
          }
        }

    ]

    const submitBusinessUnit = ()=>{
      //console.log("form in submit:",form);  
      addBuMutation.mutate(form);
    };

    const handleFormChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
      const {name,value} = e.target;
      setForm((prevdata)=>({
          ...prevdata,[name]:value
        }));
    }
    const handleUpdate = (bu:BusinessUnit)=>{
      setForm({
        businessUnitName:bu.businessUnitName,
        businessUnitDescription:bu.businessUnitDescription,
        businessUnitManager:bu.businessUnitManager,
        id:bu.id
      });
      triggerModal();
    }

    const handleDelete = (id:string)=>{
        deleteBuMutation.mutate(id);
    }
    const updateBu = ()=>{
          updateBuMutation.mutate(form);
    }
    return { status, data,columns,rows:data?.content ?? [],
      rowCount:data?.totalElements ?? 0,openModal,triggerModal,submitBusinessUnit,
    handleFormChange,form,updateBu,pagination,setPagination };
}