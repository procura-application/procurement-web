import { Button } from "@/components/ui/button";
import TitleTypography from "@/features/components/TitleTypography";
import { DataTable } from "@/features/data-table/DataTable";
import WbsFormSheet from "./components/WbsFormSheet";
import { useWbs } from "./useWbs";

const WbsPage = () => {
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
    projects,
  } = useWbs();

  return (
    <div>
      <TitleTypography title="WBS" />
      <div className="my-4 flex justify-end px-4">
        <Button onClick={triggerModal}>Add WBS</Button>
      </div>
      <WbsFormSheet
        title={isEditing ? "Update WBS" : "Add WBS"}
        open={openForm}
        isEditing={isEditing}
        triggerModal={triggerModal}
        handleFormChange={handleFormChange}
        handleSelectChange={handleSelectChange}
        handleSubmit={isEditing ? handleUpdate : handleSubmit}
        form={form}
        projects={projects}
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

export default WbsPage;
