import { Building2, ChartColumnStacked, Coins, MapPin, NotebookTabs, Ruler } from "lucide-react";

export const masterList = [
    {
        label:"Business Units",
        key:"businessUnit",
        count:100,
        icon: NotebookTabs,
        route:'/admin/masters/business-unit/'
    },
    {
        label:"Projects",
        key:"project",
        count:0,
        icon: Building2,
        route:'/admin/masters/project/'
    },
    {
        label:"WBS",
        key:"wbs",
        count:0,
        icon: Building2,
        route:'/admin/masters/wbs/'
    },
    {
        label:"Budgets",
        key:"budget",
        count:0,
        icon: Coins,
        route:'/admin/masters/budget/'
    },
    {
        label:"Delivery Locations",
        key:"deliveryLocation",
        count:0,
        icon: MapPin,
        route:'/admin/masters/delivery-location/'
    },
    {
        label:"Cost Centers",
        key:"costCenter",
        count:0,
        icon: Building2,
        route:'/admin/masters/cost-center/'
    },
      {
        label:"Categories",
        key:"category",
        count:100,
        icon: ChartColumnStacked,
        route:'/admin/masters/category/'
    },
     {
        label:"Master Items",
        key:"masterItem",
        count:2679,
        icon: ChartColumnStacked,
        route:'/admin/masters/master-item/'
    },
    {
        label:"Master Currencies",
        key:"masterCurrency",
        count:0,
        icon: Coins,
        route:'/admin/masters/master-currency/'
    },
    {
        label:"Master Units",
        key:"masterUnit",
        count:0,
        icon: Ruler,
        route:'/admin/masters/master-unit/'
    }
]