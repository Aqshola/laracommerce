import React from "react";
import Table from "@/components/base/table/Table";

type ColumnTable = {
    increment?: boolean;
    label: string;
    value: string;
    sort?: boolean;
    key: string;

    formatting?: (...args: any) => any;
};

type RowTable = {
    [key: string]: any;
};

interface Props {
    columnList: Array<ColumnTable>;
    rowList: Array<RowTable>;
}

export default function BuildedTable({ columnList, rowList }: Props) {
    return (
        <Table>
            <Table.Thead>
                <Table.Tr>
                    {columnList.map((column) => (
                        <Table.Th key={column.value}>{column.label}</Table.Th>
                    ))}
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
                {rowList.map((row, idx) => (
                    <Table.Tr>
                        {columnList.map((column) => (
                            <Table.Td>
                                {column.increment && <>{idx + 1}</>}

                                {!column.increment && column.formatting && (
                                    <>{column.formatting(row[column.key])}</>
                                )}

                                {!column.increment && !column.formatting && (
                                    <>{row[column.key]}</>
                                )}
                            </Table.Td>
                        ))}
                    </Table.Tr>
                ))}
            </Table.Tbody>
        </Table>
    );
}
