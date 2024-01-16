import Button from "@/components/base/button/Button";
import Input from "@/components/base/input/Input";
import TextArea from "@/components/base/input/TextArea";
import AdminContainer from "@/components/admin/AdminContainer";
import {
    ChevronLeftIcon,
    DocumentPlusIcon,
    TrashIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import NumberInput from "@/components/base/input/NumberInput";

export default function AddProduct() {
    return (
        <>
            <AdminContainer>
                <div className="mb-5">
                    <Button
                        variance="text-neutral"
                        icon={<ChevronLeftIcon className="w-4 h-4" />}
                    >
                        {" "}
                        Back
                    </Button>
                </div>

                <div className="px-6 mb-10">
                    <h1 className="text-3xl text-primary font-semibold">
                        Add Product
                    </h1>
                </div>

                <div className="grid grid-cols-12 gap-10 px-6">
                    <div className="grid grid-cols-12 col-span-6 gap-4">
                        <div className="flex flex-col col-span-12 gap-2">
                            <h2 className="text-lg font-medium text-neutral">
                                Product Information
                            </h2>
                        </div>
                        <div className="flex flex-col col-span-6 gap-2">
                            <label htmlFor="name">Name</label>
                            <Input placeholder="Name" size="sm" />
                        </div>
                        <br />
                        <div className="flex items-center col-span-6 gap-2 ">
                            <input type="checkbox" /> Have Variant
                        </div>
                        <br />
                        <div className="flex flex-col col-span-6 gap-2">
                            <label htmlFor="price">Price</label>
                            <NumberInput placeholder="Price" size="sm" />
                        </div>
                        <br />
                        <div className="flex flex-col col-span-6 gap-2">
                            <label htmlFor="stock">Stock</label>
                            <NumberInput placeholder="Stock" size="sm" />
                        </div>
                        <div className="flex flex-col col-span-12 gap-2">
                            <label htmlFor="name">Description</label>
                            <TextArea rows={5} size="sm" />
                        </div>
                    </div>
                    <div className="grid grid-cols-12 col-span-6 gap-5 h-fit">
                        <div className="flex flex-col col-span-12 gap-2 h-fit">
                            <h2 className="text-lg font-medium text-neutral">
                                Product Display
                            </h2>
                        </div>
                        <div className="flex flex-col col-span-6 gap-2">
                            <Button
                                size="sm"
                                variance="filled-neutral"
                                className="w-fit"
                            >
                                Add Display
                            </Button>
                        </div>
                        <div className="col-span-12">
                            <h3>Asset</h3>
                        </div>

                        <div className="flex col-span-12 gap-2">
                            <div className="bg-red-400 w-56 h-56"></div>
                            <div className="bg-red-400 w-56 h-56"></div>
                        </div>
                    </div>
                </div>
                <div className="mt-20 px-6">
                    <h2 className="text-lg font-medium text-neutral">
                        Product Variant
                    </h2>
                    <div className="grid grid-cols-12 mt-5">
                        <div className="col-span-4  border p-5 rounded-lg">
                            <div className="flex justify-end items-center gap-5">
                                <div className="text-xs border rounded-full px-2  text-neutral border-neutral">
                                    Default
                                </div>
                                <div>
                                    <TrashIcon className="h-5 w-5 text-neutral" />
                                </div>
                            </div>
                            <div className="flex gap-5  items-center h-full border-red-500">
                                <div className="h-full w-44 flex mb-5 bg-red-100 rounded-lg box-border"></div>
                                <div className="flex flex-col gap-3">
                                    <div>
                                        <label htmlFor="name">Name</label>
                                        <Input size="sm" placeholder="Name" />
                                    </div>
                                    <div>
                                        <label htmlFor="stock">Stock</label>
                                        <Input size="sm" placeholder="Stock" />
                                    </div>
                                    <div>
                                        <label htmlFor="price">Price</label>
                                        <Input size="sm" placeholder="Price" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-10 flex gap-5 px-6">
                    <Button>Draft</Button>
                    <Button variance="filled-primary">Submit</Button>
                </div>
            </AdminContainer>
        </>
    );
}
