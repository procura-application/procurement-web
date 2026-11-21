
import type { LucideIcon } from "lucide-react";

export interface StatusConfig {
  label: string;
  icon: LucideIcon;
  className: string;
}

interface StatusBadgeProps<T extends string> {
  status: T;
  config: Record<T, StatusConfig>;
}

const StatusBadge = <T extends string>({
  status,
  config,
}: StatusBadgeProps<T>) => {
  const statusConfig = config[status];

  if (!statusConfig) {
    return null;
  }

  const Icon = statusConfig.icon;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-extrabold ${statusConfig.className}`}
    >
      <Icon className="h-3.5 w-3.5" />
      {statusConfig.label}
    </span>
  );
};

export default StatusBadge;

