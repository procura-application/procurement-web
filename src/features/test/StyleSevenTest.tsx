import {
  ArrowUpRight,
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
} from "lucide-react";

export default function NavyGoldBetterDashboard() {
  return (
    <div className="min-h-screen bg-[#F8F7F2] text-[#1B2430]">
      {/* =========================================================
          SIDEBAR
      ========================================================= */}
      <aside className="fixed inset-y-0 left-0 z-30 flex w-64 flex-col bg-[#17243A] text-white shadow-[4px_0_18px_rgba(23,36,58,0.10)]">
        {/* Logo */}
        <div className="flex h-20 items-center border-b border-[#2B3850] px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D5A72A] text-[#17243A] shadow-[0_4px_12px_rgba(213,167,42,0.20)]">
              <ShoppingCart size={19} strokeWidth={2.4} />
            </div>

            <div>
              <div className="text-[15px] font-bold tracking-tight">
                ProcureFlow
              </div>

              <div className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.16em] text-[#AEB7C6]">
                Procurement OS
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 px-4 py-6">
          <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#6F7D93]">
            Workspace
          </p>

          <nav className="space-y-1.5">
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

          <p className="mb-3 mt-10 px-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#6F7D93]">
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
          <div className="flex items-center gap-3 rounded-xl px-2 py-2">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#31415D] text-sm font-bold text-[#E4C55F]">
              YL
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">
                Yatin Lakkaraju
              </p>

              <p className="mt-0.5 truncate text-xs text-[#9BA6B7]">
                Procurement Admin
              </p>
            </div>

            <ChevronDown
              size={15}
              className="text-[#8D99AC]"
            />
          </div>
        </div>
      </aside>

      {/* =========================================================
          MAIN
      ========================================================= */}
      <main className="ml-64 min-h-screen">
        {/* Header */}
        <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-[#DEE1E5] bg-[#F8F7F2]/95 px-8 backdrop-blur-sm">
          <div>
            <p className="text-sm font-medium text-[#737D8A]">
              Tuesday, September 15, 2026
            </p>

            <h1 className="mt-1 text-xl font-bold tracking-tight text-[#17243A]">
              Good morning, Yatin
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              className="
                relative flex h-10 w-10 items-center justify-center
                rounded-xl border border-[#DEE1E5] bg-white
                text-[#657080]
                shadow-[0_2px_8px_rgba(23,36,58,0.04)]
                transition-all
                hover:-translate-y-0.5
                hover:border-[#C9CDD3]
                hover:shadow-[0_6px_18px_rgba(23,36,58,0.08)]
              "
            >
              <Bell size={17} />

              <span className="absolute right-2.5 top-2.5 h-1.5 w-1.5 rounded-full bg-[#D5A72A]" />
            </button>

            <button
              className="
                flex items-center gap-2 rounded-xl
                bg-[#17243A] px-4 py-2.5
                text-sm font-semibold text-white
                shadow-[0_4px_12px_rgba(23,36,58,0.16)]
                transition-all
                hover:-translate-y-0.5
                hover:bg-[#22334F]
                hover:shadow-[0_7px_18px_rgba(23,36,58,0.20)]
              "
            >
              <Plus size={17} strokeWidth={2.3} />
              Create Request
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="p-8">
          {/* Page heading */}
          <div className="mb-8">
            <div className="flex items-center gap-2">
              <div className="h-5 w-1 rounded-full bg-[#D5A72A]" />

              <h2 className="text-2xl font-bold tracking-tight text-[#17243A]">
                Procurement Overview
              </h2>
            </div>

            <p className="mt-2 pl-3 text-sm font-medium text-[#737D8A]">
              Monitor your procurement activity and pending actions.
            </p>
          </div>

          {/* =====================================================
              KPI CARDS
          ===================================================== */}
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
              iconClass="bg-[#EEF0F4] text-[#33445D]"
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

          {/* =====================================================
              MAIN CONTENT
          ===================================================== */}
          <div className="mt-7 grid grid-cols-[1.65fr_1fr] gap-6">
            {/* Recent PRs */}
            <section
              className="
                overflow-hidden rounded-xl
                border border-[#DEE1E5] bg-white
                shadow-[0_2px_10px_rgba(23,36,58,0.045)]
                transition-shadow
                hover:shadow-[0_8px_24px_rgba(23,36,58,0.07)]
              "
            >
              <div className="flex items-center justify-between border-b border-[#E7E9EC] px-6 py-5">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-[#17243A]">
                      Recent Purchase Requests
                    </h3>

                    <span className="rounded-full bg-[#EEF0F4] px-2 py-0.5 text-[10px] font-bold text-[#56657A]">
                      128
                    </span>
                  </div>

                  <p className="mt-1.5 text-xs font-medium text-[#7B8490]">
                    Latest requests created across the organization
                  </p>
                </div>

                <button className="flex items-center gap-1 text-xs font-bold text-[#A77F18] transition hover:text-[#896814]">
                  View all
                  <ArrowUpRight size={13} />
                </button>
              </div>

              <div className="overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#E7E9EC] bg-[#FAFAF8] text-left">
                      <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#737D8A]">
                        Request
                      </th>

                      <th className="px-4 py-3.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#737D8A]">
                        Department
                      </th>

                      <th className="px-4 py-3.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#737D8A]">
                        Amount
                      </th>

                      <th className="px-4 py-3.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#737D8A]">
                        Status
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <RequestRow
                      id="PR-2026-0148"
                      category="Industrial Equipment"
                      department="Operations"
                      amount="₹4,85,000"
                      status="Pending"
                      statusType="pending"
                    />

                    <RequestRow
                      id="PR-2026-0147"
                      category="IT Infrastructure"
                      department="Technology"
                      amount="₹2,10,500"
                      status="Approved"
                      statusType="approved"
                    />

                    <RequestRow
                      id="PR-2026-0146"
                      category="Raw Materials"
                      department="Manufacturing"
                      amount="₹8,72,000"
                      status="Sourcing"
                      statusType="sourcing"
                    />

                    <RequestRow
                      id="PR-2026-0145"
                      category="Office Supplies"
                      department="Administration"
                      amount="₹76,800"
                      status="Approved"
                      statusType="approved"
                      last
                    />
                  </tbody>
                </table>
              </div>
            </section>

            {/* Activity */}
            <section
              className="
                overflow-hidden rounded-xl
                border border-[#DEE1E5] bg-white
                shadow-[0_2px_10px_rgba(23,36,58,0.045)]
                transition-shadow
                hover:shadow-[0_8px_24px_rgba(23,36,58,0.07)]
              "
            >
              <div className="border-b border-[#E7E9EC] px-6 py-5">
                <h3 className="text-sm font-bold text-[#17243A]">
                  Procurement Activity
                </h3>

                <p className="mt-1.5 text-xs font-medium text-[#737D8A]">
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
                          className="
                            w-full rounded-t-md
                            bg-[#D5A72A]
                            transition-all
                            hover:bg-[#B98E1F]
                          "
                          style={{ height: `${height}%` }}
                        />
                      </div>
                    )
                  )}
                </div>

                <div className="mt-3 flex justify-between text-[10px] font-semibold text-[#8A93A0]">
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

          {/* =====================================================
              BOTTOM CARDS
          ===================================================== */}
          <div className="mt-6 grid grid-cols-[1fr_1fr] gap-6">
            {/* Quick Action */}
            <section
              className="
                relative overflow-hidden rounded-xl
                bg-[#17243A] p-6 text-white
                shadow-[0_5px_18px_rgba(23,36,58,0.14)]
                transition-all
                hover:-translate-y-0.5
                hover:shadow-[0_12px_28px_rgba(23,36,58,0.20)]
              "
            >
              {/* Decorative gold glow */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#D5A72A]/10 blur-2xl" />

              <div className="relative flex items-start justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#D5A72A]">
                    Quick Action
                  </p>

                  <h3 className="mt-3 text-xl font-bold tracking-tight">
                    Start a new sourcing event
                  </h3>

                  <p className="mt-2 max-w-md text-sm font-medium leading-6 text-[#AEB7C6]">
                    Move approved purchase requests into sourcing and invite
                    suppliers to participate.
                  </p>
                </div>

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#263651] text-[#D5A72A]">
                  <TrendingUp size={19} />
                </div>
              </div>

              <button
                className="
                  relative mt-6 flex items-center gap-2
                  rounded-lg bg-[#D5A72A]
                  px-4 py-2.5
                  text-sm font-bold text-[#17243A]
                  shadow-[0_4px_12px_rgba(213,167,42,0.18)]
                  transition-all
                  hover:-translate-y-0.5
                  hover:bg-[#E1B63D]
                  hover:shadow-[0_7px_18px_rgba(213,167,42,0.22)]
                "
              >
                Create Sourcing Event
                <ArrowUpRight size={16} />
              </button>
            </section>

            {/* Supplier Directory */}
            <section
              className="
                rounded-xl border border-[#DEE1E5] bg-white p-6
                shadow-[0_2px_10px_rgba(23,36,58,0.045)]
                transition-shadow
                hover:shadow-[0_8px_24px_rgba(23,36,58,0.07)]
              "
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-bold text-[#17243A]">
                    Supplier Directory
                  </h3>

                  <p className="mt-1.5 text-xs font-medium text-[#737D8A]">
                    Find and manage registered suppliers
                  </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF0F4] text-[#253A59]">
                  <Users size={18} />
                </div>
              </div>

              <div className="relative mt-6">
                <Search
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8A93A0]"
                />

                <input
                  type="text"
                  placeholder="Search suppliers..."
                  className="
                    h-11 w-full rounded-lg
                    border border-[#DEE1E5]
                    bg-[#FAFAF8]
                    pl-10 pr-3
                    text-sm font-medium text-[#1B2430]
                    outline-none
                    placeholder:text-[#9AA1AB]
                    transition
                    focus:border-[#C19A2B]
                    focus:bg-white
                    focus:ring-2
                    focus:ring-[#F1E8CA]
                  "
                />
              </div>

              <div className="mt-5 flex items-center justify-between">
                <div>
                  <p className="text-xl font-bold text-[#17243A]">
                    342
                  </p>

                  <p className="mt-0.5 text-xs font-medium text-[#737D8A]">
                    Registered suppliers
                  </p>
                </div>

                <button className="text-xs font-bold text-[#A77F18] transition hover:text-[#896814]">
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

/* ===============================================================
   NAV ITEM
================================================================ */

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
      className={`
        group relative flex w-full items-center gap-3
        rounded-lg px-3.5 py-2.5
        text-sm font-semibold
        transition-all
        ${
          active
            ? "bg-[#263651] text-[#E3C457] shadow-[inset_0_0_0_1px_rgba(213,167,42,0.08)]"
            : "text-[#AEB7C6] hover:bg-[#202F48] hover:text-white"
        }
      `}
    >
      {active && (
        <span className="absolute left-0 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-full bg-[#D5A72A]" />
      )}

      {icon}

      <span>{label}</span>
    </button>
  );
}

/* ===============================================================
   METRIC CARD
================================================================ */

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
    <div
      className="
        group rounded-xl
        border border-[#DEE1E5]
        bg-white p-5
        shadow-xl
        transition-all duration-200
        hover:-translate-y-0.5
        hover:border-[#D5D9DE]
        hover:shadow-[0_9px_24px_rgba(23,36,58,0.09)]
      "
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold text-[#737D8A]">
            {title}
          </p>

          <p className="mt-2 text-[28px] font-bold tracking-tight text-[#17243A]">
            {value}
          </p>
        </div>

        <div
          className={`
            flex h-10 w-10 items-center justify-center
            rounded-xl
            transition-transform duration-200
            group-hover:scale-105
            ${iconClass}
          `}
        >
          {icon}
        </div>
      </div>

      <div className="mt-4 flex items-center gap-1.5 text-xs">
        <span className="font-bold text-[#9A761B]">
          {change}
        </span>

        <span className="font-medium text-[#8A93A0]">
          {description}
        </span>
      </div>
    </div>
  );
}

/* ===============================================================
   REQUEST ROW
================================================================ */

function RequestRow({
  id,
  category,
  department,
  amount,
  status,
  statusType,
  last = false,
}: {
  id: string;
  category: string;
  department: string;
  amount: string;
  status: string;
  statusType: "pending" | "approved" | "sourcing";
  last?: boolean;
}) {
  return (
    <tr
      className={`
        transition-colors hover:bg-[#FAFBFC]
        ${!last ? "border-b border-[#ECEEF0]" : ""}
      `}
    >
      <td className="px-6 py-4">
        <div>
          <p className="text-sm font-bold text-[#17243A]">
            {id}
          </p>

          <p className="mt-1 text-xs font-medium text-[#7B8490]">
            {category}
          </p>
        </div>
      </td>

      <td className="px-4 py-4 text-sm font-medium text-[#596473]">
        {department}
      </td>

      <td className="px-4 py-4 text-sm font-bold text-[#1B2430]">
        {amount}
      </td>

      <td className="px-4 py-4">
        <StatusBadge type={statusType}>
          {status}
        </StatusBadge>
      </td>
    </tr>
  );
}

/* ===============================================================
   STATUS BADGE
================================================================ */

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
      className={`
        inline-flex rounded-full
        px-2.5 py-1
        text-[11px] font-bold
        ${styles[type]}
      `}
    >
      {children}
    </span>
  );
}