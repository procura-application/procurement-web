import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export interface NavItemProps{
    label:string;
    icon: LucideIcon;
    active?: boolean;
}