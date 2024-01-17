import Button from "@/components/base/button/Button";
import Input from "@/components/base/input/Input";
import TextArea from "@/components/base/input/TextArea";
import AdminContainer from "@/components/admin/AdminContainer";
import {
    ChevronLeftIcon,
    DocumentPlusIcon,
    PencilIcon,
    TrashIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import NumberInput from "@/components/base/input/NumberInput";
import { ChangeEvent, useRef, useState } from "react";
import { allowedTypePhotoUpload } from "@/utils/constant";
import {
    fileImageUploadUrlExtractor,
    fileUploadExtractor,
} from "@/utils/helper";

export default function AddProduct() {
    const [isHaveVariant, setisHaveVariant] = useState(false);
    const [productPhotoList, setproductPhotoList] = useState<File[]>([]);
    const [variantCount, setvariantCount] = useState(0);

    const dummyArrayForRender = Array.from({ length: variantCount });

    const refProductFile = useRef<HTMLInputElement | null>(null);

    function _handleVariant(el: ChangeEvent<HTMLInputElement>) {
        setisHaveVariant(el.target.checked);
    }

    function _handleOpenUploadProductFile() {
        if (!refProductFile) return;

        refProductFile.current?.click();
    }

    function _handleUploadProductFile(el: React.ChangeEvent<HTMLInputElement>) {
        const listFile = el.target.files;
        const extractedFile = fileUploadExtractor(listFile);
        setproductPhotoList([...productPhotoList, ...extractedFile]);
        el.target.value = ""; //reset
    }

    function _handleDeleteProductPhoto(selectedIdx: number) {
        const deletedPhotoList = productPhotoList.filter(
            (_, idx) => idx != selectedIdx
        );

        setproductPhotoList(deletedPhotoList);
    }

    function _addVariant() {
        setvariantCount(variantCount + 1);
    }
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
                    <div className="grid grid-cols-12 col-span-6 gap-4 h-fit">
                        <div className="flex flex-col col-span-12 gap-2 h-fit">
                            <h2 className="text-lg font-medium text-neutral">
                                Product Information
                            </h2>
                        </div>
                        <div className="flex flex-col col-span-6 gap-2 h-fit ">
                            <label htmlFor="name">Name</label>
                            <Input placeholder="Name" size="sm" />
                        </div>
                        <br />
                        <div className="flex items-center col-span-6 gap-2 h-fit">
                            <input type="checkbox" onChange={_handleVariant} />{" "}
                            Have Variant
                        </div>
                        <br />

                        {!isHaveVariant && (
                            <>
                                <div className="flex flex-col col-span-6 gap-2">
                                    <label htmlFor="price">Price</label>
                                    <NumberInput
                                        placeholder="Price"
                                        size="sm"
                                    />
                                </div>
                                <br />
                                <div className="flex flex-col col-span-6 gap-2">
                                    <label htmlFor="stock">Stock</label>
                                    <NumberInput
                                        placeholder="Stock"
                                        size="sm"
                                    />
                                </div>
                                <div className="flex flex-col col-span-12 gap-2">
                                    <label htmlFor="name">Description</label>
                                    <TextArea rows={5} size="sm" />
                                </div>
                            </>
                        )}
                    </div>
                    <div className="grid grid-cols-12 col-span-6 gap-5 h-max">
                        <div className="flex flex-col col-span-12 gap-2 h-fit">
                            <h2 className="text-lg font-medium text-neutral">
                                Product Display
                            </h2>
                        </div>
                        <div className="flex flex-col col-span-6 gap-2">
                            <input
                                type="file"
                                ref={refProductFile}
                                className="hidden"
                                onInput={_handleUploadProductFile}
                                multiple
                                accept={allowedTypePhotoUpload.join(", ")} //accept type in constant
                            />
                            <Button
                                onClick={_handleOpenUploadProductFile}
                                size="sm"
                                className="w-fit"
                            >
                                Add Photo
                            </Button>
                        </div>
                        <div className="flex col-span-12 gap-2 flex-wrap">
                            {productPhotoList.map((file, idx) => (
                                <div
                                    className="bg-red-400 w-44 h-44 rounded flex overflow-hidden relative"
                                    key={file.name + idx}
                                >
                                    <div className="flex absolute right-0 p-0.5 gap-1">
                                        <button
                                            className="w-fit  border rounded-full bg-white p-0.5 right-1 mt-1"
                                            onClick={() =>
                                                _handleDeleteProductPhoto(idx)
                                            }
                                        >
                                            <TrashIcon className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <img
                                        className="w-full h-full object-cover flex"
                                        src={fileImageUploadUrlExtractor(file)}
                                        alt={file.name}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {isHaveVariant && (
                    <div className="mt-20 px-6">
                        <h2 className="text-lg font-medium text-neutral">
                            Product Variant
                        </h2>
                        <Button
                            size="xs"
                            className="mt-2"
                            onClick={_addVariant}
                        >
                            Add Variant
                        </Button>
                        <div className="grid grid-cols-12 mt-5 gap-5">
                            {dummyArrayForRender.map((_, idx) => (
                                <div
                                    className="col-span-4  border p-5 rounded-lg"
                                    key={idx}
                                >
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
                                                <label htmlFor="name">
                                                    Name
                                                </label>
                                                <Input
                                                    size="sm"
                                                    placeholder="Name"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="stock">
                                                    Stock
                                                </label>
                                                <Input
                                                    size="sm"
                                                    placeholder="Stock"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="price">
                                                    Price
                                                </label>
                                                <Input
                                                    size="sm"
                                                    placeholder="Price"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                <div className="mt-10 flex gap-5 px-6">
                    <Button>Draft</Button>
                    <Button variance="filled-primary">Submit</Button>
                </div>
            </AdminContainer>
        </>
    );
}
