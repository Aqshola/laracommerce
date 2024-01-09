import { forwardRef } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";

interface Props {
    children: React.ReactNode;
    className?: string;
}

interface PropsTh extends Props {
    order?: boolean;
}

interface PropsTr extends Props {
    border?: boolean;
}

function Table({ children, className }: Props) {
    return (
        <table
            className={clsx(
                "w-full rounded overflow-hidden font-roboto",
                className
            )}
        >
            {children}
        </table>
    );
}
function TableTHead({ children, className }: Props) {
    return (
        <thead
            className={clsx("bg-base-100  text-base-content border", className)}
        >
            {children}
        </thead>
    );
}

function TableTH({ children, order, className }: PropsTh) {
    return (
        <th
            className={clsx(
                "font-normal text-sm px-3 py-2 text-left",
                className
            )}
        >
            <div>{children}</div>
            {order && (
                <div className="flex flex-col">
                    <ChevronUpIcon className="w-2 h-2" />
                    <ChevronDownIcon className="w-2 h-2" />
                </div>
            )}
        </th>
    );
}
function TableTR({ children, border, className }: PropsTr) {
    return <tr className={clsx(border && "border", className)}>{children}</tr>;
}
function TableTD({ children, className }: Props) {
    return (
        <td
            className={clsx(
                "font-normal text-xs px-3 py-2 text-left",
                className
            )}
        >
            {children}
        </td>
    );
}
function TableBody({ children, className }: Props) {
    return <tbody className={clsx("border", className)}>{children}</tbody>;
}

Table.Thead = TableTHead;
Table.Tbody = TableBody;
Table.Th = TableTH;
Table.Tr = TableTR;
Table.Td = TableTD;

export default Table;
