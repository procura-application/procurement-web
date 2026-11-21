import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader } from "@/components/ui/sidebar"
import {  ShoppingCart } from "lucide-react"
import NavItem from "./NavItem"
import { Link, useMatch, useMatches } from "@tanstack/react-router";
import { routes } from "../constants";

const AdminSideBar = () => {
  const leaf = useMatches({
    select: (matches) => matches[matches.length - 1].routeId,
  });
  const currentRoute = leaf.substring(15);
  return (
      <Sidebar>
    <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex gap-2 px-2 py-3">
            <div className="text-black bg-gold p-2 w-10 rounded-xl flex items-center justify-center"><ShoppingCart size={19} strokeWidth={2.4}/></div>
            <div>
                <p className="font-bold text-md tracking-tight">Procura</p>
                <p className="text-sm text-sidebar-accent-foreground">Procurement Application</p>
            </div>
            
        </div>
        </SidebarHeader>
      <SidebarContent className="flex-1 px-4 py-6">
        <p className="px-3 font-bold uppercase tracking-[0.16em] text-[10px] text-sidebar-accent-foreground">Modules</p>
        <SidebarGroup className="flex flex-col gap-4">
          {routes.map((item)=>(
            <Link 
            key={item.key}
            to={item.route}>
      <NavItem
              key={item.key}
          icon={item.icon}
          label={item.label}
          active={currentRoute===item.route}
          />
          </Link>
          ))}
         
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}

export default AdminSideBar
