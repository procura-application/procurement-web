import TitleTypography from "@/features/components/TitleTypography"
import useBusinessUnit from "./useBusinessUnit"
import { DataTable } from "@/features/data-table/DataTable";
import { Button } from "@/components/ui/button";
import BusinessUnitFormSheet from "./components/BusinessUnitFormSheet";

const BusinessUnitPage = () => {

  const {rowCount,rows,columns,openModal,triggerModal,
    submitBusinessUnit,handleFormChange,form,updateBu,pagination,setPagination} = useBusinessUnit();
  return (
    <div>
      <TitleTypography
      className="m-4"
      title="Business Unit"
      />
      <div className="flex justify-end">
          <Button className="mx-4 my-2" onClick={triggerModal}>
        Add Business Unit
      </Button>
      </div>
          <BusinessUnitFormSheet
          open={openModal}
          triggerModal={triggerModal}
          title={form?.id && form?.id!='' ? "Update Business Unit" : "Add Business Unit"}
          handleFormChange={handleFormChange}
          handleSubmit={form?.id && form?.id!='' ? updateBu :submitBusinessUnit}
          form={form}
          />
  
           <DataTable
      rowCount={rowCount}
      columns={columns}
      data={rows}
      pagination={pagination}
      setPagination={setPagination}
      />
   
    
    </div>
  )
}

export default BusinessUnitPage
