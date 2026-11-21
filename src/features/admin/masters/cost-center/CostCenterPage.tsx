import { Button } from "@/components/ui/button";
import TitleTypography from "@/features/components/TitleTypography";
import { DataTable } from "@/features/data-table/DataTable";
import CostCenterFormSheet from "./components/CostCenterFormSheet";
import { useCostCenter } from "./useCostCenter";

const CostCenterPage = () => {
  const {
    rows,
    rowCount,
    columns,
    page,
    setPage,
    form,
    openForm,
    isEditing,
    triggerModal,
    handleFormChange,
    handleSelectChange,
    handleSubmit,
    handleUpdate,
    businessUnits,
  } = useCostCenter();

  return (
    <div>
      <TitleTypography title="Cost Centers" />
      <div className="my-4 flex justify-end px-4">
        <Button onClick={triggerModal}>Add Cost Center</Button>
      </div>
      <CostCenterFormSheet
        title={isEditing ? "Update Cost Center" : "Add Cost Center"}
        open={openForm}
        isEditing={isEditing}
        triggerModal={triggerModal}
        handleFormChange={handleFormChange}
        handleSelectChange={handleSelectChange}
        handleSubmit={isEditing ? handleUpdate : handleSubmit}
        form={form}
        businessUnits={businessUnits}
      />
      <DataTable
        columns={columns}
        data={rows}
        pagination={page}
        setPagination={setPage}
        rowCount={rowCount}
      />
    </div>
  );
};

export default CostCenterPage;
