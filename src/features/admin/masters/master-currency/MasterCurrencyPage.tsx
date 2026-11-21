import { Button } from "@/components/ui/button";
import { DataTable } from "@/features/data-table/DataTable";
import TitleTypography from "@/features/components/TitleTypography";
import MasterCurrencyFormSheet from "./components/MasterCurrencyFormSheet";
import { useMasterCurrency } from "./useMasterCurrency";

const MasterCurrencyPage = () => {
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
  } = useMasterCurrency();
  return (
    <div>
      <TitleTypography title="Master Currencies" />
      <div className="my-4 flex justify-end px-4">
        <Button onClick={triggerModal}>Add Currency</Button>
      </div>
      <MasterCurrencyFormSheet
        title={isEditing ? "Update Currency" : "Add Currency"}
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

export default MasterCurrencyPage;