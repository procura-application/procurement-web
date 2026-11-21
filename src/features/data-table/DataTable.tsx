import {
  useTable,
  type ColumnDef,
  type OnChangeFn,
  type PaginationState,
  type RowData,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

import { features } from "./data-table-features";

interface DataTableProps<TData extends RowData> {
  columns: ColumnDef<TData>[];
  data: TData[];
  rowCount: number;
  pagination: PaginationState;
  setPagination:  OnChangeFn<PaginationState>;

}

export function DataTable<TData extends RowData>({
  columns,
  data,
  rowCount,pagination,setPagination
}: Readonly<DataTableProps<TData>>) {
 
  
  const table = useTable({
    features,
    data,
    columns,

    rowCount,

    state: {
      pagination,
    },

    onPaginationChange: setPagination,

    manualFiltering: true,
    manualSorting: true,
    manualPagination: true,
  });

  const pageCount = table.getPageCount();
  if(data){

  
  return (
    <div className="overflow-hidden rounded-xl border border-[#DEE1E5] bg-white shadow-[0_2px_10px_rgba(23,36,58,0.045)] m-2">
      {/* ================= TABLE ================= */}

      <div className="m-2">
        <Table className="">
          <TableHeader className="bg-[#F7F8FA]">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="border-b border-[#DEE1E5] hover:bg-[#F7F8FA]"
              >
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className="h-11 px-5 text-[11px] font-bold uppercase tracking-[0.07em] text-[#737D8A]"
                  >
                    {header.isPlaceholder ? null : (
                      <table.FlexRender header={header} />
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="
                    border-b border-[#EEF0F2]
                    transition-colors
                    hover:bg-[#FAFAF7]
                  "
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className="px-5 py-4 text-sm text-[#1B2430]"
                    >
                      <table.FlexRender
                        cell={cell}
                      />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-32 text-center text-sm text-[#737D8A]"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* ================= FOOTER ================= */}

      <div className="flex items-center justify-between border-t border-[#E7E9EC] px-5 py-3">
        {/* Result Count */}

        <div className="text-xs font-medium text-[#737D8A]">
          Showing{" "}
          <span className="font-bold text-[#1B2430]">
            {pagination.pageIndex * pagination.pageSize + 1}
          </span>{" "}
          –{" "}
          <span className="font-bold text-[#1B2430]">
            {Math.min(
              (pagination.pageIndex + 1) * pagination.pageSize,
              rowCount
            )}
          </span>{" "}
          of{" "}
          <span className="font-bold text-[#1B2430]">
            {rowCount}
          </span>
        </div>

        {/* Pagination */}

        <div className="flex items-center gap-1">
          {/* First */}

          <button
            type="button"
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.setPageIndex(0)}
            className="
              flex h-8 w-8 items-center justify-center
              rounded-md
              border border-[#DEE1E5]
              text-[#737D8A]
              transition
              hover:bg-[#F7F8FA]
              hover:text-[#17243A]
              disabled:pointer-events-none
              disabled:opacity-40
            "
          >
            <ChevronsLeft size={15} />
          </button>

          {/* Previous */}

          <button
            type="button"
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}
            className="
              flex h-8 w-8 items-center justify-center
              rounded-md
              border border-[#DEE1E5]
              text-[#737D8A]
              transition
              hover:bg-[#F7F8FA]
              hover:text-[#17243A]
              disabled:pointer-events-none
              disabled:opacity-40
            "
          >
            <ChevronLeft size={15} />
          </button>

          {/* Page Numbers */}

          {Array.from(
            { length: pageCount },
            (_, index) => index
          ).map((pageIndex) => (
            <button
              type="button"
              key={pageIndex}
              onClick={() => table.setPageIndex(pageIndex)}
              className={`
                flex h-8 min-w-8 items-center justify-center
                rounded-md
                px-2
                text-xs
                font-semibold
                transition
                ${
                  pagination.pageIndex === pageIndex
                    ? "border border-[#D5A72A] bg-[#D5A72A] text-[#17243A]"
                    : "text-[#596575] hover:bg-[#EEF0F4] hover:text-[#17243A]"
                }
              `}
            >
              {pageIndex + 1}
            </button>
          ))}

          {/* Next */}

          <button
            type="button"
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
            className="
              flex h-8 w-8 items-center justify-center
              rounded-md
              border border-[#DEE1E5]
              text-[#737D8A]
              transition
              hover:bg-[#F7F8FA]
              hover:text-[#17243A]
              disabled:pointer-events-none
              disabled:opacity-40
            "
          >
            <ChevronRight size={15} />
          </button>

          {/* Last */}

          <button
            type="button"
            disabled={!table.getCanNextPage()}
            onClick={() => table.setPageIndex(pageCount - 1)}
            className="
              flex h-8 w-8 items-center justify-center
              rounded-md
              border border-[#DEE1E5]
              text-[#737D8A]
              transition
              hover:bg-[#F7F8FA]
              hover:text-[#17243A]
              disabled:pointer-events-none
              disabled:opacity-40
            "
          >
            <ChevronsRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}
else{
  return (<div>No Pages</div>)
}
}