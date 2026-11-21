import {
  ArrowUpRight,
  Bell,
  ChevronDown,
  FileText,
  LayoutDashboard,
  Package,
  Plus,
  Search,
  Settings,
  ShoppingCart,
  TrendingUp,
  Users,
} from "lucide-react";

const purchaseRequests = [
  {
    id: "PR-2026-0142",
    title: "Developer Workstations",
    requester: "Rahul Sharma",
    amount: "₹2,40,000",
    status: "Pending",
  },
  {
    id: "PR-2026-0141",
    title: "Cloud Infrastructure",
    requester: "Ananya Rao",
    amount: "₹85,000",
    status: "Approved",
  },
  {
    id: "PR-2026-0140",
    title: "Office Equipment",
    requester: "Vikram Singh",
    amount: "₹1,20,000",
    status: "Sourcing",
  },
  {
    id: "PR-2026-0139",
    title: "Security Software",
    requester: "Priya Nair",
    amount: "₹64,500",
    status: "Approved",
  },
];

function StatusBadge({ status }: { status: string }) {
  const styles = {
    Pending: "bg-[#FFF5D9] text-[#9A6B00]",
    Approved: "bg-[#E4F2EA] text-[#176B4D]",
    Sourcing: "bg-[#E8F0EC] text-[#356B55]",
  };

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
        styles[status as keyof typeof styles]
      }`}
    >
      {status}
    </span>
  );
}

export default function ProcurementDashboard() {
  return (
    <div className="min-h-screen bg-[#F7F8F5] text-[#17201C]">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 w-64 border-r border-[#DDE4DF] bg-[#FFFFFF]">
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-20 items-center gap-3 border-b border-[#EEF1EE] px-6">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#176B4D] text-white">
              <ShoppingCart size={18} />
            </div>

            <div>
              <p className="text-sm font-semibold tracking-tight">
                ProcureFlow
              </p>
              <p className="text-[11px] text-[#66736C]">
                Procurement Platform
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-7 px-3 py-6">
            <div>
              <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-widest text-[#89948E]">
                Workspace
              </p>

              <div className="space-y-1">
                <NavItem
                  icon={<LayoutDashboard size={17} />}
                  label="Dashboard"
                  active
                />
                <NavItem
                  icon={<FileText size={17} />}
                  label="Purchase Requests"
                />
                <NavItem
                  icon={<Search size={17} />}
                  label="Sourcing"
                />
                <NavItem
                  icon={<TrendingUp size={17} />}
                  label="Auctions"
                />
                <NavItem
                  icon={<Package size={17} />}
                  label="Purchase Orders"
                />
              </div>
            </div>

            <div>
              <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-widest text-[#89948E]">
                Management
              </p>

              <div className="space-y-1">
                <NavItem
                  icon={<Users size={17} />}
                  label="Suppliers"
                />
                <NavItem
                  icon={<Settings size={17} />}
                  label="Settings"
                />
              </div>
            </div>
          </nav>

          {/* User */}
          <div className="border-t border-[#EEF1EE] p-4">
            <div className="flex items-center gap-3 rounded-lg p-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#DCEBE3] text-sm font-semibold text-[#176B4D]">
                YL
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">
                  Yatin Lakkaraju
                </p>
                <p className="truncate text-xs text-[#66736C]">
                  Procurement Admin
                </p>
              </div>

              <ChevronDown size={15} className="text-[#89948E]" />
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="ml-64 min-h-screen">
        {/* Header */}
        <header className="flex h-20 items-center justify-between border-b border-[#DDE4DF] bg-[#FFFFFF] px-8">
          <div>
            <h1 className="text-xl font-semibold tracking-tight">
              Good morning, Yatin
            </h1>
            <p className="mt-0.5 text-sm text-[#66736C]">
              Here's what's happening with procurement today.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button className="relative flex h-9 w-9 items-center justify-center rounded-md border border-[#DDE4DF] bg-white text-[#66736C] hover:bg-[#F7F8F5]">
              <Bell size={17} />
              <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-[#176B4D]" />
            </button>

            <button className="flex items-center gap-2 rounded-md bg-[#176B4D] px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-[#0F4D38]">
              <Plus size={16} />
              Create Request
            </button>
          </div>
        </header>

        <div className="space-y-8 p-8">
          {/* Page intro */}
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-[#176B4D]">
              Overview
            </p>

            <h2 className="mt-1 text-2xl font-semibold tracking-tight">
              Procurement Overview
            </h2>
          </div>

          {/* KPI Cards */}
          <section className="grid grid-cols-4 gap-4">
            <MetricCard
              title="Purchase Requests"
              value="128"
              change="+12.5%"
              icon={<FileText size={18} />}
            />

            <MetricCard
              title="Pending Approval"
              value="24"
              change="+4 this week"
              icon={<TrendingUp size={18} />}
            />

            <MetricCard
              title="Active Sourcing"
              value="16"
              change="3 closing soon"
              icon={<Search size={18} />}
            />

            <MetricCard
              title="Purchase Orders"
              value="84"
              change="+8.2%"
              icon={<Package size={18} />}
            />
          </section>

          {/* Main content */}
          <section className="rounded-lg border border-[#DDE4DF] bg-white">
            <div className="flex items-center justify-between border-b border-[#EEF1EE] px-6 py-5">
              <div>
                <h3 className="text-base font-semibold">
                  Recent Purchase Requests
                </h3>
                <p className="mt-1 text-xs text-[#66736C]">
                  Latest requests across your organization
                </p>
              </div>

              <button className="flex items-center gap-1 text-sm font-medium text-[#176B4D] hover:text-[#0F4D38]">
                View all
                <ArrowUpRight size={15} />
              </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-[#EEF1EE] bg-[#FAFBF9]">
                    <th className="px-6 py-3 text-xs font-medium text-[#66736C]">
                      Request
                    </th>
                    <th className="px-6 py-3 text-xs font-medium text-[#66736C]">
                      Requester
                    </th>
                    <th className="px-6 py-3 text-xs font-medium text-[#66736C]">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-xs font-medium text-[#66736C]">
                      Status
                    </th>
                    <th className="px-6 py-3" />
                  </tr>
                </thead>

                <tbody>
                  {purchaseRequests.map((request) => (
                    <tr
                      key={request.id}
                      className="border-b border-[#F0F2F0] last:border-0 hover:bg-[#FAFBF9]"
                    >
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-sm font-medium">
                            {request.title}
                          </p>
                          <p className="mt-0.5 text-xs text-[#89948E]">
                            {request.id}
                          </p>
                        </div>
                      </td>

                      <td className="px-6 py-4 text-sm text-[#4E5B54]">
                        {request.requester}
                      </td>

                      <td className="px-6 py-4 text-sm font-medium">
                        {request.amount}
                      </td>

                      <td className="px-6 py-4">
                        <StatusBadge status={request.status} />
                      </td>

                      <td className="px-6 py-4 text-right">
                        <button className="text-xs font-medium text-[#66736C] hover:text-[#176B4D]">
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Bottom section */}
          <section className="grid grid-cols-3 gap-4">
            <div className="col-span-2 rounded-lg border border-[#DDE4DF] bg-white p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-semibold">
                    Procurement Activity
                  </h3>
                  <p className="mt-1 text-xs text-[#66736C]">
                    Activity across procurement workflows
                  </p>
                </div>

                <button className="rounded-md border border-[#DDE4DF] px-3 py-1.5 text-xs font-medium text-[#4E5B54] hover:bg-[#F7F8F5]">
                  This month
                  <ChevronDown
                    size={13}
                    className="ml-1 inline"
                  />
                </button>
              </div>

              <div className="mt-8 flex h-40 items-end gap-3">
                {[45, 65, 50, 80, 60, 95, 72, 85, 68, 92, 78, 100].map(
                  (height, index) => (
                    <div
                      key={index}
                      className="flex flex-1 items-end"
                    >
                      <div
                        className="w-full rounded-t-md bg-[#176B4D] opacity-80 transition hover:opacity-100"
                        style={{ height: `${height}%` }}
                      />
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="rounded-lg border border-[#DDE4DF] bg-[#176B4D] p-6 text-white">
              <p className="text-xs font-medium uppercase tracking-widest text-[#BFD8CB]">
                Quick Action
              </p>

              <h3 className="mt-4 text-xl font-semibold">
                Start a new sourcing event
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#D7E7DF]">
                Invite suppliers, collect quotations and compare
                commercial offers.
              </p>

              <button className="mt-6 rounded-md bg-white px-4 py-2 text-sm font-medium text-[#176B4D] hover:bg-[#F7F8F5]">
                Create Event
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

function NavItem({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <button
      className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition ${
        active
          ? "bg-[#E7F1EB] text-[#176B4D]"
          : "text-[#66736C] hover:bg-[#F5F7F4] hover:text-[#17201C]"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

function MetricCard({
  title,
  value,
  change,
  icon,
}: {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-[#DDE4DF] bg-white p-5">
      <div className="flex items-start justify-between">
        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#E7F1EB] text-[#176B4D]">
          {icon}
        </div>

        <span className="text-xs font-medium text-[#176B4D]">
          {change}
        </span>
      </div>

      <p className="mt-5 text-sm text-[#66736C]">{title}</p>
      <p className="mt-1 text-2xl font-semibold tracking-tight">
        {value}
      </p>
    </div>
  );
}