import TitleTypography from "@/features/components/TitleTypography"
import { DataTable } from "@/features/data-table/DataTable"
import { useMasterItem } from "./useMasterItem"
import { Button } from "@/components/ui/button";
import MasterItemFormChange from "./components/MasterItemFormSheet";

const MasterItemPage = () => {
    const {rows,columns,setPage,rowCount,page,
categories,triggerModal,openModal,form,handleFormChange,handleSelectChange,handleSubmit,
        handleUpdate
    } = useMasterItem();
  return (
    <div>
      
      <TitleTypography
      title="Master Items"
      />
    <div className="flex justify-end items-end mx-4 my-4">
        <Button onClick={triggerModal}>+ Master Item</Button>
    </div>
    <MasterItemFormChange
    title={form.masterItemId && form.masterItemId!='' ? "Update Master Item": "Add Master Item"}
    triggerModal={triggerModal}
    open={openModal}
    handleFormChange={handleFormChange}
    handleSelectChange={handleSelectChange}
    handleSubmit={form.masterItemId && form.masterItemId!='' ? handleUpdate: handleSubmit}
    form={form}
    categories={categories}
    />
      <DataTable
      columns={columns}
      data={rows}
      setPagination={setPage}
      rowCount={rowCount}
      pagination={page}
      />
    </div>
  )
}

export default MasterItemPage
