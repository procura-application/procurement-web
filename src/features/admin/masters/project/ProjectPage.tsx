import { Button } from "@/components/ui/button";
import TitleTypography from "@/features/components/TitleTypography";
import { DataTable } from "@/features/data-table/DataTable";
import ProjectFormSheet from "./components/ProjectFormSheet";
import { useProject } from "./useProject";

const ProjectPage = () => {
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
  } = useProject();

  return (
    <div>
      <TitleTypography title="Projects" />
      <div className="my-4 flex justify-end px-4">
        <Button onClick={triggerModal}>Add Project</Button>
      </div>
      <ProjectFormSheet
        title={isEditing ? "Update Project" : "Add Project"}
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

export default ProjectPage;
