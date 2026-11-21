import { Button } from "@/components/ui/button";
import TitleTypography from "@/features/components/TitleTypography";
import { DataTable } from "@/features/data-table/DataTable";
import MasterUnitFormSheet from "./components/MasterUnitFormSheet";
import { useMasterUnit } from "./useMasterUnit";

const MasterUnitPage = () => {
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
    handleSubmit,
    handleUpdate,
  } = useMasterUnit();

  return (
    <div>
      <TitleTypography title="Master Units" />
      <div className="my-4 flex justify-end px-4">
        <Button onClick={triggerModal}>Add Unit</Button>
      </div>
      <MasterUnitFormSheet
        title={isEditing ? "Update Unit" : "Add Unit"}
        open={openForm}
        isEditing={isEditing}
        triggerModal={triggerModal}
        handleFormChange={handleFormChange}
        handleSubmit={isEditing ? handleUpdate : handleSubmit}
        form={form}
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

export default MasterUnitPage;