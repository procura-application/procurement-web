import { Button } from "@/components/ui/button";
import TitleTypography from "@/features/components/TitleTypography";
import { DataTable } from "@/features/data-table/DataTable";
import BudgetFormSheet from "./components/BudgetFormSheet";
import { useBudget } from "./useBudget";

const BudgetPage = () => {
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
    wbsList,
    currencies,
  } = useBudget();

  return (
    <div>
      <TitleTypography title="Budgets" />
      <div className="my-4 flex justify-end px-4">
        <Button onClick={triggerModal}>Add Budget</Button>
      </div>
      <BudgetFormSheet
        title={isEditing ? "Update Budget" : "Add Budget"}
        open={openForm}
        isEditing={isEditing}
        triggerModal={triggerModal}
        handleFormChange={handleFormChange}
        handleSelectChange={handleSelectChange}
        handleSubmit={isEditing ? handleUpdate : handleSubmit}
        form={form}
        wbsList={wbsList}
        currencies={currencies}
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

export default BudgetPage;
