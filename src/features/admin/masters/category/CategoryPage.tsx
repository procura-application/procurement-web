import TitleTypography from "@/features/components/TitleTypography"
import { useCategory } from "./useCategory"
import { DataTable } from "@/features/data-table/DataTable";
import { Button } from "@/components/ui/button";
import CategoryFormSheet from "./components/CategoryFormSheet";

const CategoryPage = () => {
    const {rows,rowCount,columns,page,setPage,
        openForm,handleFormChange,handleSubmit,form,triggerModal,businessUnits,handleSelectChange,
        handleUpdateCategory
    } = useCategory();
  return (
    <div>
      <TitleTypography
      title="Category"
      />
    <div className="flex justify-end items-end my-4 mx-4">
            <Button onClick={triggerModal}>
        Add Category
    </Button>
    </div>

    <CategoryFormSheet
    title={form.masterCategoryId && form.masterCategoryId!='' ? 'Update Category': 'Add Category'}
    open={openForm}
    triggerModal={triggerModal}
    handleFormChange={handleFormChange}
    handleSubmit={form.masterCategoryId && form.masterCategoryId!='' ? handleUpdateCategory: handleSubmit}
    form={form}
    businessUnits={businessUnits}
    handleSelectChange={handleSelectChange}
    
    />
      <DataTable
      rowCount={rowCount}
        columns={columns}
        data={rows}
        pagination={page}
        setPagination={setPage}
      
      />
    </div>
  )
}

export default CategoryPage
