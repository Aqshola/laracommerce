import Button from "@/components/Button";
import Input from "@/components/Input";
import AdminContainer from "@/components/admin/AdminContainer";
import {
    ChevronDownIcon,
    ChevronUpIcon,
    MagnifyingGlassIcon,
    PencilSquareIcon,
    PlusIcon,
} from "@heroicons/react/24/solid";
import React from "react";

export default function Product() {
    return (
        <AdminContainer>
            <div className="flex w-full ">
                <h1 className="text-2xl font-medium text-neutral font-roboto flex-grow">
                    Product
                </h1>
                <Button
                    size="sm"
                    icon={<PlusIcon className="w-4 h-4" />}
                    variance="filled-primary"
                >
                    Add Product
                </Button>
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
                <table className="w-full rounded overflow-hidden">
                    <thead className="bg-base-100  text-base-content font-roboto border">
                        <tr>
                            <th className="font-normal   text-sm px-3 py-2 text-left">
                                No
                            </th>
                            <th className="font-normal   text-sm px-3 py-2 text-left flex gap-2 items-center">
                                <span>Name</span>
                                <div className="flex flex-col">
                                    <ChevronUpIcon className="w-2 h-2" />
                                    <ChevronDownIcon className="w-2 h-2" />
                                </div>
                            </th>
                            <th className="font-normal   text-sm px-3 py-2 text-left">
                                Price
                            </th>
                            <th className="font-normal   text-sm px-3 py-2 text-left">
                                Variant
                            </th>
                            <th className="font-normal   text-sm px-3 py-2 text-left">
                                Discount
                            </th>
                            <th className="font-normal   text-sm px-3 py-2 text-left">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="border font-roboto">
                        <tr className="border">
                            <th className="font-normal  text-xs px-3 py-2 text-left">
                                1
                            </th>
                            <th className="font-normal  text-xs px-3 py-2 text-left">
                                Tanaman Hias
                            </th>
                            <th className="font-normal  text-xs px-3 py-2 text-left">
                                Rp. 85,000.00
                            </th>
                            <th className="font-normal  text-xs px-3 py-2 text-left flex gap-2">
                                <div className="w-fit p-1 text-xs rounded border border-neutral text-neutral">
                                    Merah
                                </div>
                                <div className="w-fit p-1 text-xs rounded border border-neutral text-neutral">
                                    Hitam
                                </div>
                            </th>
                            <th className="font-normal  text-xs px-3 py-2 text-left ">
                                -
                            </th>
                            <th className="font-normal  text-xs px-3 py-2 text-left">
                                <Button
                                    size="xs"
                                    icon={
                                        <PencilSquareIcon className="w-4 h-4" />
                                    }
                                >
                                    Open
                                </Button>
                            </th>
                        </tr>
                        <tr className="border">
                            <th className="font-normal  text-xs px-3 py-2 text-left">
                                1
                            </th>
                            <th className="font-normal  text-xs px-3 py-2 text-left">
                                Tanaman Hias
                            </th>
                            <th className="font-normal  text-xs px-3 py-2 text-left">
                                Rp. 85,000.00
                            </th>
                            <th className="font-normal  text-xs px-3 py-2 text-left flex gap-2">
                                <div className="w-fit p-1 text-xs rounded border border-neutral text-neutral">
                                    Merah
                                </div>
                                <div className="w-fit p-1 text-xs rounded border border-neutral text-neutral">
                                    Hitam
                                </div>
                            </th>
                            <th className="font-normal  text-xs px-3 py-2 text-left ">
                                -
                            </th>
                            <th className="font-normal  text-xs px-3 py-2 text-left">
                                <Button
                                    size="xs"
                                    icon={
                                        <PencilSquareIcon className="w-4 h-4" />
                                    }
                                >
                                    Open
                                </Button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </AdminContainer>
    );
}
