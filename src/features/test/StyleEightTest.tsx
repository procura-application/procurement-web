import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
} from "lucide-react";

const items = [
  {
    itemCode: "MAT-10024",
    description: "Industrial Safety Helmet",
    category: "Safety Equipment",
    quantity: 250,
    uom: "EA",
    estimatedPrice: "₹1,25,000",
    status: "Pending",
  },
  {
    itemCode: "MAT-10025",
    description: "Safety Gloves - Cut Resistant",
    category: "Safety Equipment",
    quantity: 500,
    uom: "PAIR",
    estimatedPrice: "₹75,000",
    status: "Sourcing",
  },
  {
    itemCode: "MAT-10026",
    description: "Industrial Safety Shoes",
    category: "PPE",
    quantity: 180,
    uom: "PAIR",
    estimatedPrice: "₹2,16,000",
    status: "Approved",
  },
  {
    itemCode: "MAT-10027",
    description: "Reflective Safety Jacket",
    category: "Safety Equipment",
    quantity: 300,
    uom: "EA",
    estimatedPrice: "₹90,000",
    status: "Pending",
  },
  {
    itemCode: "MAT-10028",
    description: "Protective Welding Goggles",
    category: "PPE",
    quantity: 120,
    uom: "EA",
    estimatedPrice: "₹48,000",
    status: "Approved",
  },
];

function StatusBadge({ status }: { status: string }) {
  const styles = {
    Pending: "bg-[#FFF7E0] text-[#9A7410] border-[#F0D98A]",
    Approved: "bg-[#EAF7EF] text-[#247044] border-[#BFE3CB]",
    Sourcing: "bg-[#EEF3F8] text-[#3F5872] border-[#CBD7E3]",
  };

  return (
    <span
      className={`inline-flex items-center rounded-md border px-2.5 py-1 text-[11px] font-bold ${
        styles[status as keyof typeof styles]
      }`}
    >
      {status}
    </span>
  );
}

export default function ProcurementDataTable() {
  return (
    <div className="w-full rounded-xl border border-[#DEE1E5] bg-white shadow-[0_2px_10px_rgba(23,36,58,0.045)]">
      {/* Table Header */}
      <div className="flex items-center justify-between border-b border-[#E7E9EC] px-5 py-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-1 rounded-full bg-[#D5A72A]" />

            <h2 className="text-base font-bold text-[#17243A]">
              Requisition Items
            </h2>
          </div>

          <p className="mt-1 pl-3 text-xs text-[#737D8A]">
            Items included in this purchase request
          </p>
        </div>

        <div className="text-xs font-semibold text-[#737D8A]">
          5 Items
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1000px] border-collapse">
          <thead>
            <tr className="border-b border-[#DEE1E5] bg-[#F7F8FA]">
              <th className="px-5 py-3 text-left text-[11px] font-bold uppercase tracking-[0.07em] text-[#737D8A]">
                Item Code
              </th>

              <th className="px-5 py-3 text-left text-[11px] font-bold uppercase tracking-[0.07em] text-[#737D8A]">
                Description
              </th>

              <th className="px-5 py-3 text-left text-[11px] font-bold uppercase tracking-[0.07em] text-[#737D8A]">
                Category
              </th>

              <th className="px-5 py-3 text-right text-[11px] font-bold uppercase tracking-[0.07em] text-[#737D8A]">
                Quantity
              </th>

              <th className="px-5 py-3 text-left text-[11px] font-bold uppercase tracking-[0.07em] text-[#737D8A]">
                UOM
              </th>

              <th className="px-5 py-3 text-right text-[11px] font-bold uppercase tracking-[0.07em] text-[#737D8A]">
                Estimated Value
              </th>

              <th className="px-5 py-3 text-left text-[11px] font-bold uppercase tracking-[0.07em] text-[#737D8A]">
                Status
              </th>

              <th className="w-12 px-3 py-3" />
            </tr>
          </thead>

          <tbody>
            {items.map((item, index) => (
              <tr
                key={item.itemCode}
                className="group border-b border-[#EEF0F2] transition-colors hover:bg-[#FAFAF7]"
              >
                {/* Item Code */}
                <td className="px-5 py-4">
                  <span className="text-sm font-bold text-[#17243A]">
                    {item.itemCode}
                  </span>
                </td>

                {/* Description */}
                <td className="px-5 py-4">
                  <div className="max-w-[260px]">
                    <p className="text-sm font-semibold text-[#1B2430]">
                      {item.description}
                    </p>
                  </div>
                </td>

                {/* Category */}
                <td className="px-5 py-4">
                  <span className="text-sm font-medium text-[#596575]">
                    {item.category}
                  </span>
                </td>

                {/* Quantity */}
                <td className="px-5 py-4 text-right">
                  <span className="text-sm font-semibold tabular-nums text-[#1B2430]">
                    {item.quantity}
                  </span>
                </td>

                {/* UOM */}
                <td className="px-5 py-4">
                  <span className="text-sm font-medium text-[#596575]">
                    {item.uom}
                  </span>
                </td>

                {/* Value */}
                <td className="px-5 py-4 text-right">
                  <span className="text-sm font-bold tabular-nums text-[#17243A]">
                    {item.estimatedPrice}
                  </span>
                </td>

                {/* Status */}
                <td className="px-5 py-4">
                  <StatusBadge status={item.status} />
                </td>

                {/* Actions */}
                <td className="px-3 py-4 text-center">
                  <button
                    className="rounded-md p-1.5 text-[#737D8A] opacity-0 transition-all hover:bg-[#EEF0F4] hover:text-[#17243A] group-hover:opacity-100"
                    aria-label={`Actions for ${item.itemCode}`}
                  >
                    <MoreHorizontal size={17} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer / Pagination */}
      <div className="flex items-center justify-between border-t border-[#E7E9EC] px-5 py-3">
        <div className="text-xs font-medium text-[#737D8A]">
          Showing{" "}
          <span className="font-bold text-[#1B2430]">1–5</span>{" "}
          of{" "}
          <span className="font-bold text-[#1B2430]">24</span> items
        </div>

        <div className="flex items-center gap-1">
          <button
            className="flex h-8 w-8 items-center justify-center rounded-md border border-[#DEE1E5] text-[#737D8A] transition hover:border-[#C7CBD1] hover:bg-[#F7F8FA] hover:text-[#17243A]"
          >
            <ChevronsLeft size={15} />
          </button>

          <button
            className="flex h-8 w-8 items-center justify-center rounded-md border border-[#D5A72A] bg-[#D5A72A] text-xs font-bold text-[#17243A]"
          >
            1
          </button>

          <button
            className="flex h-8 w-8 items-center justify-center rounded-md text-xs font-semibold text-[#596575] transition hover:bg-[#EEF0F4]"
          >
            2
          </button>

          <button
            className="flex h-8 w-8 items-center justify-center rounded-md text-xs font-semibold text-[#596575] transition hover:bg-[#EEF0F4]"
          >
            3
          </button>

          <button
            className="flex h-8 w-8 items-center justify-center rounded-md text-xs font-semibold text-[#596575] transition hover:bg-[#EEF0F4]"
          >
            4
          </button>

          <span className="px-1 text-[#9AA1AA]">
            <MoreHorizontal size={15} />
          </span>

          <button
            className="flex h-8 w-8 items-center justify-center rounded-md text-xs font-semibold text-[#596575] transition hover:bg-[#EEF0F4]"
          >
            5
          </button>

          <button
            className="flex h-8 w-8 items-center justify-center rounded-md border border-[#DEE1E5] text-[#737D8A] transition hover:border-[#C7CBD1] hover:bg-[#F7F8FA] hover:text-[#17243A]"
          >
            <ChevronsRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}