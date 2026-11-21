import {
  Bell,
  ChevronDown,
  FileText,
  Gavel,
  LayoutDashboard,
  Package,
  Plus,
  Search,
  Settings,
  ShoppingCart,
  TrendingUp,
  Users,
  ArrowUpRight,
} from "lucide-react";

export default function AmberIvoryDashboard() {
  return (
    <div className="min-h-screen bg-[#FAF8F2] text-[#27231C]">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-20 flex w-64 flex-col border-r border-[#E7E1D5] bg-[#FFFDF8]">
        {/* Logo */}
        <div className="flex h-20 items-center border-b border-[#E7E1D5] px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#B7791F] text-white">
              <ShoppingCart size={19} strokeWidth={2.2} />
            </div>

            <div>
              <div className="text-[15px] font-bold tracking-tight">
                ProcureFlow
              </div>
              <div className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#8A8478]">
                Procurement OS
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 px-4 py-6">
          <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#9A9387]">
            Workspace
          </p>

          <nav className="space-y-1">
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
              icon={<TrendingUp size={17} />}
              label="Sourcing"
            />

            <NavItem
              icon={<Gavel size={17} />}
              label="Auctions"
            />

            <NavItem
              icon={<Package size={17} />}
              label="Purchase Orders"
            />

            <NavItem
              icon={<Users size={17} />}
              label="Suppliers"
            />
          </nav>

          <p className="mb-3 mt-9 px-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#9A9387]">
            System
          </p>

          <nav>
            <NavItem
              icon={<Settings size={17} />}
              label="Settings"
            />
          </nav>
        </div>

        {/* User */}
        <div className="border-t border-[#E7E1D5] p-4">
          <div className="flex items-center gap-3 rounded-lg px-2 py-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F3E5C8] text-sm font-semibold text-[#8C5B15]">
              YL
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">
                Yatin Lakkaraju
              </p>
              <p className="truncate text-xs text-[#8A8478]">
                Procurement Admin
              </p>
            </div>

            <ChevronDown size={15} className="text-[#9A9387]" />
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="ml-64 min-h-screen">
        {/* Header */}
        <header className="flex h-20 items-center justify-between border-b border-[#E7E1D5] bg-[#FFFDF8] px-8">
          <div>
            <p className="text-sm text-[#8A8478]">
              Tuesday, September 15, 2026
            </p>
            <h1 className="mt-0.5 text-xl font-semibold tracking-tight">
              Good morning, Yatin
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-[#E7E1D5] bg-white text-[#756F63] transition hover:bg-[#F7F2E8]">
              <Bell size={17} />

              <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#C17C22]" />
            </button>

            <button className="flex items-center gap-2 rounded-lg bg-[#B7791F] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#9F6719]">
              <Plus size={17} />
              Create Request
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="p-8">
          {/* Page heading */}
          <div className="mb-7">
            <h2 className="text-2xl font-semibold tracking-tight">
              Procurement Overview
            </h2>

            <p className="mt-1 text-sm text-[#756F63]">
              Monitor your procurement activity and pending actions.
            </p>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-4 gap-5">
            <MetricCard
              title="Purchase Requests"
              value="128"
              change="+12.5%"
              description="vs. last month"
              icon={<FileText size={19} />}
              iconClass="bg-[#F5E8CF] text-[#A46719]"
            />

            <MetricCard
              title="Active Sourcing"
              value="24"
              change="+4"
              description="this month"
              icon={<TrendingUp size={19} />}
              iconClass="bg-[#F4E8D2] text-[#A46719]"
            />

            <MetricCard
              title="Pending Approvals"
              value="17"
              change="-8.2%"
              description="vs. last month"
              icon={<Gavel size={19} />}
              iconClass="bg-[#F6EFD9] text-[#9A741F]"
            />

            <MetricCard
              title="Purchase Orders"
              value="86"
              change="+18.4%"
              description="this month"
              icon={<Package size={19} />}
              iconClass="bg-[#F3E5C8] text-[#915E16]"
            />
          </div>

          {/* Main Grid */}
          <div className="mt-7 grid grid-cols-[1.65fr_1fr] gap-6">
            {/* Recent PRs */}
            <section className="rounded-lg border border-[#E7E1D5] bg-white">
              <div className="flex items-center justify-between border-b border-[#E7E1D5] px-6 py-5">
                <div>
                  <h3 className="text-sm font-semibold">
                    Recent Purchase Requests
                  </h3>

                  <p className="mt-1 text-xs text-[#8A8478]">
                    Latest requests created across the organization
                  </p>
                </div>

                <button className="text-xs font-semibold text-[#A46719] hover:text-[#8C5B15]">
                  View all
                </button>
              </div>

              <div className="overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#E7E1D5] bg-[#FCFAF5] text-left">
                      <th className="px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#8A8478]">
                        Request
                      </th>

                      <th className="px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#8A8478]">
                        Department
                      </th>

                      <th className="px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#8A8478]">
                        Amount
                      </th>

                      <th className="px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#8A8478]">
                        Status
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="border-b border-[#EEEAE1] transition hover:bg-[#FCFAF5]">
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-sm font-semibold">
                            PR-2026-0148
                          </p>
                          <p className="mt-0.5 text-xs text-[#8A8478]">
                            Industrial Equipment
                          </p>
                        </div>
                      </td>

                      <td className="px-4 py-4 text-sm text-[#5F5A51]">
                        Operations
                      </td>

                      <td className="px-4 py-4 text-sm font-medium">
                        ₹4,85,000
                      </td>

                      <td className="px-4 py-4">
                        <StatusBadge type="pending">
                          Pending
                        </StatusBadge>
                      </td>
                    </tr>

                    <tr className="border-b border-[#EEEAE1] transition hover:bg-[#FCFAF5]">
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-sm font-semibold">
                            PR-2026-0147
                          </p>
                          <p className="mt-0.5 text-xs text-[#8A8478]">
                            IT Infrastructure
                          </p>
                        </div>
                      </td>

                      <td className="px-4 py-4 text-sm text-[#5F5A51]">
                        Technology
                      </td>

                      <td className="px-4 py-4 text-sm font-medium">
                        ₹2,10,500
                      </td>

                      <td className="px-4 py-4">
                        <StatusBadge type="approved">
                          Approved
                        </StatusBadge>
                      </td>
                    </tr>

                    <tr className="border-b border-[#EEEAE1] transition hover:bg-[#FCFAF5]">
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-sm font-semibold">
                            PR-2026-0146
                          </p>
                          <p className="mt-0.5 text-xs text-[#8A8478]">
                            Raw Materials
                          </p>
                        </div>
                      </td>

                      <td className="px-4 py-4 text-sm text-[#5F5A51]">
                        Manufacturing
                      </td>

                      <td className="px-4 py-4 text-sm font-medium">
                        ₹8,72,000
                      </td>

                      <td className="px-4 py-4">
                        <StatusBadge type="sourcing">
                          Sourcing
                        </StatusBadge>
                      </td>
                    </tr>

                    <tr className="transition hover:bg-[#FCFAF5]">
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-sm font-semibold">
                            PR-2026-0145
                          </p>
                          <p className="mt-0.5 text-xs text-[#8A8478]">
                            Office Supplies
                          </p>
                        </div>
                      </td>

                      <td className="px-4 py-4 text-sm text-[#5F5A51]">
                        Administration
                      </td>

                      <td className="px-4 py-4 text-sm font-medium">
                        ₹76,800
                      </td>

                      <td className="px-4 py-4">
                        <StatusBadge type="approved">
                          Approved
                        </StatusBadge>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Activity */}
            <section className="rounded-lg border border-[#E7E1D5] bg-white">
              <div className="border-b border-[#E7E1D5] px-6 py-5">
                <h3 className="text-sm font-semibold">
                  Procurement Activity
                </h3>

                <p className="mt-1 text-xs text-[#8A8478]">
                  Purchase requests created
                </p>
              </div>

              <div className="px-6 py-6">
                <div className="flex h-48 items-end justify-between gap-3 border-b border-[#E7E1D5]">
                  {[35, 48, 42, 65, 55, 78, 68, 92, 74, 84, 70, 96].map(
                    (height, index) => (
                      <div
                        key={index}
                        className="flex h-full flex-1 items-end"
                      >
                        <div
                          className="w-full rounded-t-sm bg-[#D69E2E] transition hover:bg-[#B7791F]"
                          style={{ height: `${height}%` }}
                        />
                      </div>
                    )
                  )}
                </div>

                <div className="mt-3 flex justify-between text-[10px] font-medium text-[#9A9387]">
                  <span>Oct</span>
                  <span>Nov</span>
                  <span>Dec</span>
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                  <span>Aug</span>
                  <span>Sep</span>
                </div>
              </div>
            </section>
          </div>

          {/* Bottom Row */}
          <div className="mt-6 grid grid-cols-[1fr_1fr] gap-6">
            {/* Quick Actions */}
            <section className="rounded-lg bg-[#27231C] p-6 text-[#FFFDF8]">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#D6B16A]">
                    Quick Action
                  </p>

                  <h3 className="mt-3 text-xl font-semibold tracking-tight">
                    Start a new sourcing event
                  </h3>

                  <p className="mt-2 max-w-md text-sm leading-6 text-[#C7C1B5]">
                    Move approved purchase requests into sourcing and invite
                    suppliers to participate.
                  </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#3B3429] text-[#D69E2E]">
                  <TrendingUp size={19} />
                </div>
              </div>

              <button className="mt-6 flex items-center gap-2 rounded-lg bg-[#D69E2E] px-4 py-2.5 text-sm font-semibold text-[#27231C] transition hover:bg-[#E2AD3A]">
                Create Sourcing Event
                <ArrowUpRight size={16} />
              </button>
            </section>

            {/* Search / Supplier */}
            <section className="rounded-lg border border-[#E7E1D5] bg-white p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-semibold">
                    Supplier Directory
                  </h3>

                  <p className="mt-1 text-xs text-[#8A8478]">
                    Find and manage registered suppliers
                  </p>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F5E8CF] text-[#A46719]">
                  <Users size={18} />
                </div>
              </div>

              <div className="relative mt-6">
                <Search
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9A9387]"
                />

                <input
                  type="text"
                  placeholder="Search suppliers..."
                  className="h-10 w-full rounded-lg border border-[#E7E1D5] bg-[#FCFAF5] pl-9 pr-3 text-sm outline-none transition placeholder:text-[#AAA49A] focus:border-[#C28A32] focus:ring-2 focus:ring-[#F1E4CD]"
                />
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-lg font-semibold">342</p>
                  <p className="text-xs text-[#8A8478]">
                    Registered suppliers
                  </p>
                </div>

                <button className="text-xs font-semibold text-[#A46719] hover:text-[#8C5B15]">
                  Manage suppliers →
                </button>
              </div>
            </section>
          </div>
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
      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
        active
          ? "bg-[#F3E5C8] text-[#8C5B15]"
          : "text-[#706A60] hover:bg-[#F7F2E8] hover:text-[#27231C]"
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

function MetricCard({
  title,
  value,
  change,
  description,
  icon,
  iconClass,
}: {
  title: string;
  value: string;
  change: string;
  description: string;
  icon: React.ReactNode;
  iconClass: string;
}) {
  return (
    <div className="rounded-lg border border-[#E7E1D5] bg-white p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-[#8A8478]">
            {title}
          </p>

          <p className="mt-2 text-2xl font-semibold tracking-tight">
            {value}
          </p>
        </div>

        <div
          className={`flex h-9 w-9 items-center justify-center rounded-lg ${iconClass}`}
        >
          {icon}
        </div>
      </div>

      <div className="mt-4 flex items-center gap-1.5 text-xs">
        <span className="font-semibold text-[#8C6A2A]">
          {change}
        </span>

        <span className="text-[#9A9387]">
          {description}
        </span>
      </div>
    </div>
  );
}

function StatusBadge({
  children,
  type,
}: {
  children: React.ReactNode;
  type: "pending" | "approved" | "sourcing";
}) {
  const styles = {
    pending: "bg-[#F7EBCF] text-[#94641A]",
    approved: "bg-[#E8E9DD] text-[#596044]",
    sourcing: "bg-[#F0E7D4] text-[#876B37]",
  };

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold ${styles[type]}`}
    >
      {children}
    </span>
  );
}