import { LayoutDashboard } from "lucide-react";

export const routes = [
    {
        key:'masters',
        label:'Masters',
        route:'/admin/masters/',
        icon: LayoutDashboard
    },
     {
        key:'workflow',
        label:'Worflow Config',
        route:'/admin/workflow/',
        icon: LayoutDashboard
    },
     {
        key:'users',
        label:'User',
        route:'/admin/users/',
        icon: LayoutDashboard
    },
]