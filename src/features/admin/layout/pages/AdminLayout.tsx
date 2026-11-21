import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Outlet } from "@tanstack/react-router"
import AdminSideBar from "../components/AdminSideBar"

const AdminLayout = () => {
  return (
    <SidebarProvider>
      <AdminSideBar />

      <main className="flex-1 min-w-0">
        {/* <SidebarTrigger/> */}
        <Outlet />
      </main>
    </SidebarProvider>
  );
};

export default AdminLayout
