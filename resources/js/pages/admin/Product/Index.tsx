import Button from "@/components/base/button/Button";
import Input from "@/components/base/input/Input";
import AdminContainer from "@/components/modules/admin/AdminContainer";
import BuildedTable from "@/components/base/table/BuildedTable";
import { formatNumberPrice } from "@/utils/formatter";
import {
    ChevronDownIcon,
    ChevronUpIcon,
    MagnifyingGlassIcon,
    PencilSquareIcon,
    PlusIcon,
} from "@heroicons/react/24/solid";
import { Link } from "@inertiajs/react";
import React from "react";

export default function Product() {
    const COLUMN_LIST = [
        {
            increment: true,
            label: "No",
            value: "no",
            sort: false,
            key: "no",
        },
        {
            label: "Name",
            value: "name",
            key: "name",
        },
        {
            label: "Price",
            value: "price",
            key: "price",
            formatting: formatNumberPrice,
        },
        {
            label: "Variant",
            value: "variant",
            key: "variant",
        },
        {
            label: "Discount",
            value: "discount",
            key: "discount",
        },
        {
            label: "Action",
            value: "action",
            key: "action",
        },
    ];

    const ROW_LIST = [
        {
            name: "Tanaman Hias",
            price: 120000,
            variant: "",
            discount: "",
            action: "",
        },
    ];
    return (
        <AdminContainer>
            <div className="flex w-full ">
                <h1 className="text-2xl font-medium text-neutral font-roboto flex-grow">
                    Product
                </h1>
                <Link href="/admin/product/add">
                    <Button
                        size="sm"
                        icon={<PlusIcon className="w-4 h-4" />}
                        variance="filled-primary"
                    >
                        Add Product
                    </Button>
                </Link>
            </div>

            <div className="mt-5 w-full border p-3 rounded-lg flex flex-col">
                <h2 className="font-roboto font-semi">Summary</h2>
                <div className="grid grid-cols-12 w-full gap-5">
                    <div className="col-span-2 flex flex-col border px-3 py-2 font-roboto text-neutral mt-2 rounded-lg">
                        <h3 className="text-lg font-bold">500</h3>
                        <p className="text-xs font-light uppercase">
                            Total Product
                        </p>
                    </div>
                    <div className="col-span-2 flex flex-col border px-3 py-2 font-roboto text-neutral mt-2 rounded-lg">
                        <h3 className="text-lg font-bold">1500</h3>
                        <p className="text-xs font-light uppercase">
                            Stok Product
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-5 grid grid-cols-12">
                <div className="col-span-4">
                    <Input
                        Icon={
                            <MagnifyingGlassIcon className="w-4 h-4 stroke-neutral" />
                        }
                        placeholder="Search product"
                        size="sm"
                        divClass="w-full"
                    />
                </div>
            </div>

            {/* SECTION TABLE */}

            <div className="w-full mt-4">
                <BuildedTable columnList={COLUMN_LIST} rowList={ROW_LIST} />
            </div>
        </AdminContainer>
    );
}
