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
    Pending: "bg-[#F7EBCF] text-[#8A671C]",
    Approved: "bg-[#E8E9DD] text-[#596044]",
    Sourcing: "bg-[#EEE8D8] text-[#78683D]",
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

export default function MustardCreamDashboard() {
  return (
    <div className="min-h-screen bg-[#F4EFE2] text-[#302A20]">

      {/* =========================================================
          SIDEBAR
      ========================================================= */}

      <aside className="fixed inset-y-0 left-0 w-64 bg-[#302A20] text-white">

        <div className="flex h-full flex-col">

          {/* Logo */}
          <div className="flex h-20 items-center gap-3 border-b border-white/10 px-6">

            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#A98224] text-[#FFF8E8]">
              <ShoppingCart size={18} />
            </div>

            <div>
              <p className="text-sm font-semibold tracking-tight">
                ProcureFlow
              </p>

              <p className="text-[11px] text-[#C8C0AF]">
                Procurement Platform
              </p>
            </div>

          </div>


          {/* Navigation */}
          <nav className="flex-1 space-y-7 px-3 py-6">

            <div>

              <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-widest text-[#817867]">
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

              <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-widest text-[#817867]">
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
          <div className="border-t border-white/10 p-4">

            <div className="flex items-center gap-3 rounded-lg p-2">

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#A98224] text-sm font-semibold text-[#FFF8E8]">
                YL
              </div>

              <div className="min-w-0 flex-1">

                <p className="truncate text-sm font-medium">
                  Yatin Lakkaraju
                </p>

                <p className="truncate text-xs text-[#B9B09E]">
                  Procurement Admin
                </p>

              </div>

              <ChevronDown
                size={15}
                className="text-[#B9B09E]"
              />

            </div>

          </div>

        </div>

      </aside>


      {/* =========================================================
          MAIN
      ========================================================= */}

      <main className="ml-64 min-h-screen">

        {/* Header */}
        <header className="flex h-20 items-center justify-between border-b border-[#DED6C5] bg-[#FCFAF5] px-8">

          <div>

            <h1 className="text-xl font-semibold tracking-tight">
              Good morning, Yatin
            </h1>

            <p className="mt-0.5 text-sm text-[#766F63]">
              Here's what's happening with procurement today.
            </p>

          </div>


          <div className="flex items-center gap-3">

            <button className="relative flex h-9 w-9 items-center justify-center rounded-md border border-[#DCD4C3] bg-[#FCFAF5] text-[#766F63] transition hover:bg-[#F4EFE2]">

              <Bell size={17} />

              <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-[#A98224]" />

            </button>


            <button className="flex items-center gap-2 rounded-md bg-[#A98224] px-4 py-2 text-sm font-medium text-[#FFF8E8] shadow-sm transition hover:bg-[#8F701C]">

              <Plus size={16} />

              Create Request

            </button>

          </div>

        </header>


        <div className="space-y-8 p-8">


          {/* Page intro */}
          <div>

            <p className="text-xs font-semibold uppercase tracking-widest text-[#8A671C]">
              Overview
            </p>

            <h2 className="mt-1 text-2xl font-semibold tracking-tight">
              Procurement Overview
            </h2>

          </div>


          {/* =====================================================
              KPI CARDS
          ===================================================== */}

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


          {/* =====================================================
              PURCHASE REQUEST TABLE
          ===================================================== */}

          <section className="rounded-lg border border-[#DED6C5] bg-[#FCFAF5]">

            <div className="flex items-center justify-between border-b border-[#E9E2D4] px-6 py-5">

              <div>

                <h3 className="text-base font-semibold">
                  Recent Purchase Requests
                </h3>

                <p className="mt-1 text-xs text-[#766F63]">
                  Latest requests across your organization
                </p>

              </div>


              <button className="flex items-center gap-1 text-sm font-medium text-[#8A671C] hover:text-[#6E5217]">

                View all

                <ArrowUpRight size={15} />

              </button>

            </div>


            <div className="overflow-x-auto">

              <table className="w-full text-left">

                <thead>

                  <tr className="border-b border-[#E9E2D4] bg-[#F9F6ED]">

                    <th className="px-6 py-3 text-xs font-medium text-[#766F63]">
                      Request
                    </th>

                    <th className="px-6 py-3 text-xs font-medium text-[#766F63]">
                      Requester
                    </th>

                    <th className="px-6 py-3 text-xs font-medium text-[#766F63]">
                      Amount
                    </th>

                    <th className="px-6 py-3 text-xs font-medium text-[#766F63]">
                      Status
                    </th>

                    <th className="px-6 py-3" />

                  </tr>

                </thead>


                <tbody>

                  {purchaseRequests.map((request) => (

                    <tr
                      key={request.id}
                      className="border-b border-[#EEE9DE] last:border-0 hover:bg-[#FAF7EF]"
                    >

                      <td className="px-6 py-4">

                        <div>

                          <p className="text-sm font-medium">
                            {request.title}
                          </p>

                          <p className="mt-0.5 text-xs text-[#938A7A]">
                            {request.id}
                          </p>

                        </div>

                      </td>


                      <td className="px-6 py-4 text-sm text-[#625B50]">
                        {request.requester}
                      </td>


                      <td className="px-6 py-4 text-sm font-medium">
                        {request.amount}
                      </td>


                      <td className="px-6 py-4">
                        <StatusBadge status={request.status} />
                      </td>


                      <td className="px-6 py-4 text-right">

                        <button className="text-xs font-medium text-[#766F63] hover:text-[#302A20]">
                          View
                        </button>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </section>


          {/* =====================================================
              BOTTOM SECTION
          ===================================================== */}

          <section className="grid grid-cols-3 gap-4">


            {/* Activity */}
            <div className="col-span-2 rounded-lg border border-[#DED6C5] bg-[#FCFAF5] p-6">

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="text-base font-semibold">
                    Procurement Activity
                  </h3>

                  <p className="mt-1 text-xs text-[#766F63]">
                    Activity across procurement workflows
                  </p>

                </div>


                <button className="rounded-md border border-[#DCD4C3] px-3 py-1.5 text-xs font-medium text-[#625B50] hover:bg-[#F4EFE2]">

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
                        className="w-full rounded-t-md bg-[#A98224] transition hover:bg-[#8F701C]"
                        style={{
                          height: `${height}%`,
                        }}
                      />

                    </div>

                  )
                )}

              </div>

            </div>


            {/* CTA */}
            <div className="relative overflow-hidden rounded-lg bg-[#302A20] p-6 text-[#FFF8E8]">

              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#A98224]/10" />

              <div className="absolute -bottom-12 -left-10 h-32 w-32 rounded-full bg-[#A98224]/10" />


              <div className="relative">

                <p className="text-xs font-semibold uppercase tracking-widest text-[#C5A34D]">
                  Quick Action
                </p>

                <h3 className="mt-4 text-xl font-semibold">
                  Start a new sourcing event
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#C9C1B1]">
                  Invite suppliers, collect quotations and compare
                  commercial offers.
                </p>

                <button className="mt-6 rounded-md bg-[#A98224] px-4 py-2 text-sm font-semibold text-[#FFF8E8] transition hover:bg-[#B9902C]">
                  Create Event
                </button>

              </div>

            </div>

          </section>

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
      className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition ${
        active
          ? "bg-[#A98224] text-[#FFF8E8]"
          : "text-[#B9B09E] hover:bg-white/5 hover:text-[#FFF8E8]"
      }`}
    >
      {icon}

      {label}
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
  icon,
}: {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-[#DED6C5] bg-[#FCFAF5] p-5 transition hover:border-[#CFC4AE]">

      <div className="flex items-start justify-between">

        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#EEE8D8] text-[#8A671C]">
          {icon}
        </div>

        <span className="text-xs font-semibold text-[#8A671C]">
          {change}
        </span>

      </div>


      <p className="mt-5 text-sm text-[#766F63]">
        {title}
      </p>

      <p className="mt-1 text-2xl font-semibold tracking-tight">
        {value}
      </p>

    </div>
  );
}