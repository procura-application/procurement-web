import { Card } from "@/components/ui/card";
import type { MasterCardProp } from "../types";
import { ArrowRightCircleIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";

const MasterCard: React.FC<MasterCardProp> = ({
  label,
  icon,
  count,
  route
}) => {
  const IconComponent = icon;

  return (
    <Card className="rounded-xl border-none p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <p className="text-lg font-extrabold text-foreground">
          {label}
        </p>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <IconComponent size={19} />
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <p className="text-3xl font-bold tracking-tight">
          {count}
        </p>

        <button className="cursor-pointer flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition hover:bg-muted hover:text-foreground">
         <Link to={route}>
          <ArrowRightCircleIcon size={22} />
          </Link>
        </button>
      </div>
    </Card>
  );
};

export default MasterCard;