
import {
  CheckCircle2,
  FilePenLine,
  XCircle,
} from "lucide-react";

export type MasterStatus =
"ACTIVE" | "INACTIVE" | "NOTFOUND"

export const masterStatusConfig = {


  ACTIVE: {
    label: "Active",
    icon: CheckCircle2,
    className: "text-green-700",
  },

  INACTIVE: {
    label: "Inactive",
    icon: XCircle,
    className: "text-red-700",
  },
  NOTFOUND : {
    label:"Status not found",
    icon: XCircle,
    className:" text-black"
  }
} satisfies Record<MasterStatus, {
  label: string;
  icon: typeof FilePenLine;
  className: string;
}>;

