import {createColumnHelper, flexRender, getCoreRowModel, useReactTable} from "@tanstack/react-table";
import {useState} from "react";
import ShoesIcon from "../../../assets/svg/shoesIcon.svg?react";
import TrashIcon from "../../../assets/svg/tableTrashIcon.svg?react";
import EditIcon from "../../../assets/svg/tableEditIcon.svg?react";

const defaultData = [
    {
        Product: 'Nike Air Force 1 \'07 LV8',
        Category: 'linsley',
        Stock: 220,
        Price: "$122.27",
    },
    {
        Product: 'Nike Sportswear Heritage86 Futura Washed',
        Category: 'miller',
        Stock: 220,
        Price: "$122.27",
    },
    {
        Product: 'Nike Air Max Penny',
        Category: 'dirte',
        Stock: 220,
        Price: "$122.27",
    },
];

const columnHelper = createColumnHelper();

const columns = [
    columnHelper.display({
        id: 'select',
        header: ({table}) => (
            <input
                type="checkbox"
                onChange={(e) =>
                    table.toggleAllRowsSelected(e.target.checked)
                }
            />
        ),
        cell: ({row}) => (
            <input
                type="checkbox"
                checked={row.getIsSelected()}
                onChange={(e) => row.toggleSelected(e.target.checked)}
            />
        ),
    }),
    columnHelper.accessor('Product', {
        cell: (info) => {
            const product = info.row.original;
            return (
                <div className="flex items-center gap-4">
                    <ShoesIcon/>
                    <span className="text-xs font-inter-medium text-mine-shaft">{product.Product}</span>
                </div>
            );
        },
        footer: (info) => info.column.id,
    }),
    columnHelper.accessor("Category", {
        cell: (info) => <span
            className="bg-alabaster px-3 py-[2px] rounded-md text-[#4F4F4F] text-xs font-inter-medium">{info.getValue()}</span>,
        header: () => <span>Category</span>,
    }),
    columnHelper.accessor('Stock', {
        header: () => 'Stock',
        cell: (info) => <span className="text-mine-shaft text-xs font-inter-medium">{info.renderValue()}</span>,
    }),
    columnHelper.accessor('Price', {
        header: () => <span>Price</span>,
        cell: (info) => <span className="text-mine-shaft text-xs font-inter-medium">{info.renderValue()}</span>,
    }),
    columnHelper.display({
        id: 'action',
        header: 'Action',
        cell: ({row}) => (
            <div className="flex gap-2">
                <button
                    // onClick={() => handleEdit(row.original)}
                    className="bg-malibu  p-[10px] rounded-[10px]"
                >
                    <EditIcon/>
                </button>
                <button
                    // onClick={() => handleDelete(row.original)}
                    className="bg-jaffa  p-[10px] rounded-[10px]"
                >
                    <TrashIcon/>
                </button>
            </div>
        ),
    }),
];

const ProductTable = () => {
    const [rowSelection, setRowSelection] = useState({});

    const table = useReactTable({
        data: defaultData,
        columns,
        state: {
            rowSelection,
        },
        onRowSelectionChange: setRowSelection,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div className="mt-6 w-full">
            <table className="w-full">
                <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                            <th key={header.id}>
                                {header.isPlaceholder
                                    ? null
                                    : flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                            </th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody>
                {table.getRowModel().rows.map((row) => (
                    <tr key={row.id}>
                        {row.getVisibleCells().map((cell) => (
                            <td key={cell.id}>
                                {flexRender(
                                    cell.column.columnDef.cell,
                                    cell.getContext()
                                )}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;
