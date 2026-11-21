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

export default function NavyGoldDashboard() {
  return (
    <div className="min-h-screen bg-[#F8F7F2] text-[#1B2430]">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-20 flex w-64 flex-col bg-[#17243A] text-white">
        {/* Logo */}
        <div className="flex h-20 items-center border-b border-[#2B3850] px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#D5A72A] text-[#17243A]">
              <ShoppingCart size={19} strokeWidth={2.3} />
            </div>

            <div>
              <div className="text-[15px] font-bold tracking-tight">
                ProcureFlow
              </div>

              <div className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#AEB7C6]">
                Procurement OS
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 px-4 py-6">
          <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7F8BA0]">
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

          <p className="mb-3 mt-9 px-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7F8BA0]">
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
        <div className="border-t border-[#2B3850] p-4">
          <div className="flex items-center gap-3 rounded-lg px-2 py-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#31415D] text-sm font-semibold text-[#E4C55F]">
              YL
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">
                Yatin Lakkaraju
              </p>

              <p className="truncate text-xs text-[#9BA6B7]">
                Procurement Admin
              </p>
            </div>

            <ChevronDown size={15} className="text-[#8D99AC]" />
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="ml-64 min-h-screen">
        {/* Header */}
        <header className="flex h-20 items-center justify-between border-b border-[#DEE1E5] bg-white px-8">
          <div>
            <p className="text-sm text-[#737D8A]">
              Tuesday, September 15, 2026
            </p>

            <h1 className="mt-0.5 text-xl font-semibold tracking-tight text-[#1B2430]">
              Good morning, Yatin
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-[#DEE1E5] bg-white text-[#657080] transition hover:bg-[#F5F6F7]">
              <Bell size={17} />

              <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#D5A72A]" />
            </button>

            <button className="flex items-center gap-2 rounded-lg bg-[#17243A] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#22334F]">
              <Plus size={17} />
              Create Request
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="p-8">
          {/* Heading */}
          <div className="mb-7">
            <h2 className="text-2xl font-semibold tracking-tight text-[#1B2430]">
              Procurement Overview
            </h2>

            <p className="mt-1 text-sm text-[#737D8A]">
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
              iconClass="bg-[#EEF0F4] text-[#243752]"
            />

            <MetricCard
              title="Active Sourcing"
              value="24"
              change="+4"
              description="this month"
              icon={<TrendingUp size={19} />}
              iconClass="bg-[#F5EBCB] text-[#9B791B]"
            />

            <MetricCard
              title="Pending Approvals"
              value="17"
              change="-8.2%"
              description="vs. last month"
              icon={<Gavel size={19} />}
              iconClass="bg-[#F0F2F5] text-[#33445D]"
            />

            <MetricCard
              title="Purchase Orders"
              value="86"
              change="+18.4%"
              description="this month"
              icon={<Package size={19} />}
              iconClass="bg-[#F5EBCB] text-[#9B791B]"
            />
          </div>

          {/* Main Grid */}
          <div className="mt-7 grid grid-cols-[1.65fr_1fr] gap-6">
            {/* Recent PRs */}
            <section className="rounded-lg border border-[#DEE1E5] bg-white">
              <div className="flex items-center justify-between border-b border-[#DEE1E5] px-6 py-5">
                <div>
                  <h3 className="text-sm font-semibold text-[#1B2430]">
                    Recent Purchase Requests
                  </h3>

                  <p className="mt-1 text-xs text-[#737D8A]">
                    Latest requests created across the organization
                  </p>
                </div>

                <button className="text-xs font-semibold text-[#A77F18] hover:text-[#896814]">
                  View all
                </button>
              </div>

              <div className="overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#DEE1E5] bg-[#FAFAF8] text-left">
                      <th className="px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#737D8A]">
                        Request
                      </th>

                      <th className="px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#737D8A]">
                        Department
                      </th>

                      <th className="px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#737D8A]">
                        Amount
                      </th>

                      <th className="px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#737D8A]">
                        Status
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="border-b border-[#ECEEF0] transition hover:bg-[#FAFBFC]">
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-sm font-semibold text-[#1B2430]">
                            PR-2026-0148
                          </p>

                          <p className="mt-0.5 text-xs text-[#7B8490]">
                            Industrial Equipment
                          </p>
                        </div>
                      </td>

                      <td className="px-4 py-4 text-sm text-[#596473]">
                        Operations
                      </td>

                      <td className="px-4 py-4 text-sm font-medium text-[#1B2430]">
                        ₹4,85,000
                      </td>

                      <td className="px-4 py-4">
                        <StatusBadge type="pending">
                          Pending
                        </StatusBadge>
                      </td>
                    </tr>

                    <tr className="border-b border-[#ECEEF0] transition hover:bg-[#FAFBFC]">
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-sm font-semibold text-[#1B2430]">
                            PR-2026-0147
                          </p>

                          <p className="mt-0.5 text-xs text-[#7B8490]">
                            IT Infrastructure
                          </p>
                        </div>
                      </td>

                      <td className="px-4 py-4 text-sm text-[#596473]">
                        Technology
                      </td>

                      <td className="px-4 py-4 text-sm font-medium text-[#1B2430]">
                        ₹2,10,500
                      </td>

                      <td className="px-4 py-4">
                        <StatusBadge type="approved">
                          Approved
                        </StatusBadge>
                      </td>
                    </tr>

                    <tr className="border-b border-[#ECEEF0] transition hover:bg-[#FAFBFC]">
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-sm font-semibold text-[#1B2430]">
                            PR-2026-0146
                          </p>

                          <p className="mt-0.5 text-xs text-[#7B8490]">
                            Raw Materials
                          </p>
                        </div>
                      </td>

                      <td className="px-4 py-4 text-sm text-[#596473]">
                        Manufacturing
                      </td>

                      <td className="px-4 py-4 text-sm font-medium text-[#1B2430]">
                        ₹8,72,000
                      </td>

                      <td className="px-4 py-4">
                        <StatusBadge type="sourcing">
                          Sourcing
                        </StatusBadge>
                      </td>
                    </tr>

                    <tr className="transition hover:bg-[#FAFBFC]">
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-sm font-semibold text-[#1B2430]">
                            PR-2026-0145
                          </p>

                          <p className="mt-0.5 text-xs text-[#7B8490]">
                            Office Supplies
                          </p>
                        </div>
                      </td>

                      <td className="px-4 py-4 text-sm text-[#596473]">
                        Administration
                      </td>

                      <td className="px-4 py-4 text-sm font-medium text-[#1B2430]">
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
            <section className="rounded-lg border border-[#DEE1E5] bg-white">
              <div className="border-b border-[#DEE1E5] px-6 py-5">
                <h3 className="text-sm font-semibold text-[#1B2430]">
                  Procurement Activity
                </h3>

                <p className="mt-1 text-xs text-[#737D8A]">
                  Purchase requests created
                </p>
              </div>

              <div className="px-6 py-6">
                <div className="flex h-48 items-end justify-between gap-3 border-b border-[#DEE1E5]">
                  {[35, 48, 42, 65, 55, 78, 68, 92, 74, 84, 70, 96].map(
                    (height, index) => (
                      <div
                        key={index}
                        className="flex h-full flex-1 items-end"
                      >
                        <div
                          className="w-full rounded-t-sm bg-[#D5A72A] transition hover:bg-[#B98E1F]"
                          style={{ height: `${height}%` }}
                        />
                      </div>
                    )
                  )}
                </div>

                <div className="mt-3 flex justify-between text-[10px] font-medium text-[#8A93A0]">
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
            {/* Quick Action */}
            <section className="rounded-lg bg-[#17243A] p-6 text-white">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#D5A72A]">
                    Quick Action
                  </p>

                  <h3 className="mt-3 text-xl font-semibold tracking-tight">
                    Start a new sourcing event
                  </h3>

                  <p className="mt-2 max-w-md text-sm leading-6 text-[#AEB7C6]">
                    Move approved purchase requests into sourcing and invite
                    suppliers to participate.
                  </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#25344D] text-[#D5A72A]">
                  <TrendingUp size={19} />
                </div>
              </div>

              <button className="mt-6 flex items-center gap-2 rounded-lg bg-[#D5A72A] px-4 py-2.5 text-sm font-semibold text-[#17243A] transition hover:bg-[#E1B63D]">
                Create Sourcing Event
                <ArrowUpRight size={16} />
              </button>
            </section>

            {/* Supplier Directory */}
            <section className="rounded-lg border border-[#DEE1E5] bg-white p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-[#1B2430]">
                    Supplier Directory
                  </h3>

                  <p className="mt-1 text-xs text-[#737D8A]">
                    Find and manage registered suppliers
                  </p>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EEF0F4] text-[#253A59]">
                  <Users size={18} />
                </div>
              </div>

              <div className="relative mt-6">
                <Search
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8A93A0]"
                />

                <input
                  type="text"
                  placeholder="Search suppliers..."
                  className="h-10 w-full rounded-lg border border-[#DEE1E5] bg-[#FAFAF8] pl-9 pr-3 text-sm text-[#1B2430] outline-none transition placeholder:text-[#9AA1AB] focus:border-[#C19A2B] focus:ring-2 focus:ring-[#F1E8CA]"
                />
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-lg font-semibold text-[#1B2430]">
                    342
                  </p>

                  <p className="text-xs text-[#737D8A]">
                    Registered suppliers
                  </p>
                </div>

                <button className="text-xs font-semibold text-[#A77F18] hover:text-[#896814]">
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
          ? "bg-[#263651] text-[#E3C457]"
          : "text-[#AEB7C6] hover:bg-[#202F48] hover:text-white"
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
    <div className="rounded-lg border border-[#DEE1E5] bg-white p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-[#737D8A]">
            {title}
          </p>

          <p className="mt-2 text-2xl font-semibold tracking-tight text-[#1B2430]">
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
        <span className="font-semibold text-[#9A761B]">
          {change}
        </span>

        <span className="text-[#8A93A0]">
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
    pending: "bg-[#F7EBCF] text-[#946E18]",
    approved: "bg-[#E7EBE5] text-[#53634D]",
    sourcing: "bg-[#E9EDF2] text-[#4B607A]",
  };

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold ${styles[type]}`}
    >
      {children}
    </span>
  );
}