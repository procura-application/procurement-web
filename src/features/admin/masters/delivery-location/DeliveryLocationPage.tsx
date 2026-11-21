import { Button } from "@/components/ui/button";
import TitleTypography from "@/features/components/TitleTypography";
import { DataTable } from "@/features/data-table/DataTable";
import DeliveryLocationFormSheet from "./components/DeliveryLocationFormSheet";
import { useDeliveryLocation } from "./useDeliveryLocation";

const DeliveryLocationPage = () => {
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
    businessUnitList,
  } = useDeliveryLocation();

  return (
    <div>
      <TitleTypography title="Delivery Locations" />
      <div className="my-4 flex justify-end px-4">
        <Button onClick={triggerModal}>Add Delivery Location</Button>
      </div>
      <DeliveryLocationFormSheet
        title={isEditing ? "Update Delivery Location" : "Add Delivery Location"}
        open={openForm}
        isEditing={isEditing}
        triggerModal={triggerModal}
        handleFormChange={handleFormChange}
        handleSelectChange={handleSelectChange}
        handleSubmit={isEditing ? handleUpdate : handleSubmit}
        form={form}
        businessUnitList={businessUnitList}
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

export default DeliveryLocationPage;
