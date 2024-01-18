import Button from "@/components/base/button/Button";
import Input from "@/components/base/input/Input";
import NumberInput from "@/components/base/input/NumberInput";
import TextArea from "@/components/base/input/TextArea";
import { allowedTypePhotoUpload } from "@/utils/constant";
import {
    fileImageUploadUrlExtractor,
    fileUploadExtractor,
} from "@/utils/helper";
import { TrashIcon } from "@heroicons/react/24/outline";
import { ChangeEvent, useRef, useState } from "react";
import {
    FieldValues,
    UseFormRegister,
    UseFormResetField,
} from "react-hook-form";

interface Props {
    //HOOKS REF
    register: UseFormRegister<FieldValues>;
    resetField: UseFormResetField<FieldValues>;

    //INITIAL FIELD
    isHaveVariant: boolean;
    productPhotoList: File[];

    //CALLBACK
    callbackIsHaveVariant: (value: boolean) => void;
    callbackProductPhotoList: (value: File[]) => void;
}

export default function ProductInformation(props: Props) {
    const [localIsHaveVariant, setlocalIsHaveVariant] = useState(
        props.isHaveVariant
    );
    const [productPhotoList, setproductPhotoList] = useState<File[]>(
        props.productPhotoList
    );

    function handleVariant(el: ChangeEvent<HTMLInputElement>) {
        const checked = el.target.checked;
        setlocalIsHaveVariant(checked);
        props.callbackIsHaveVariant(checked);
        props.resetField("productstock");
        props.resetField("productprice");
    }

    const refProductFile = useRef<HTMLInputElement | null>(null);

    function handleOpenUploadProductFile() {
        if (!refProductFile) return;

        refProductFile.current?.click();
    }

    function handleUploadProductFile(el: React.ChangeEvent<HTMLInputElement>) {
        const listFile = el.target.files;
        const extractedFile = fileUploadExtractor(listFile);
        setproductPhotoList([...productPhotoList, ...extractedFile]);
        props.callbackProductPhotoList([...productPhotoList, ...extractedFile]);
        // el.target.value = ""; //reset
    }

    function handleDeleteProductPhoto(selectedIdx: number) {
        const deletedPhotoList = productPhotoList.filter(
            (_, idx) => idx != selectedIdx
        );

        setproductPhotoList(deletedPhotoList);
    }

    return (
        <div className="grid grid-cols-12 gap-10 px-6">
            <div className="grid grid-cols-12 col-span-6 gap-4 h-fit">
                <div className="flex flex-col col-span-12 gap-2 h-fit">
                    <h2 className="text-lg font-medium text-neutral">
                        Product Information
                    </h2>
                </div>
                <div className="flex flex-col col-span-6 gap-2 h-fit ">
                    <label htmlFor="name">Name</label>
                    <Input
                        placeholder="Name"
                        size="sm"
                        {...props.register("productname")}
                    />
                </div>
                <br />
                <div className="flex items-center col-span-6 gap-2 h-fit">
                    <input
                        {...props.register("productvariant")}
                        type="checkbox"
                        onChange={handleVariant}
                        id="haveVariant"
                    />
                    <label htmlFor="haveVariant">Have Variant </label>
                </div>
                <br />

                {!localIsHaveVariant && (
                    <>
                        <div className="flex flex-col col-span-6 gap-2">
                            <label htmlFor="price">Price</label>
                            <NumberInput
                                placeholder="Price"
                                size="sm"
                                {...props.register("productprice")}
                            />
                        </div>
                        <br />
                        <div className="flex flex-col col-span-6 gap-2">
                            <label htmlFor="stock">Stock</label>
                            <NumberInput
                                placeholder="Stock"
                                size="sm"
                                {...props.register("productstock")}
                            />
                        </div>
                    </>
                )}
                <div className="flex flex-col col-span-12 gap-2">
                    <label htmlFor="name">Description</label>
                    <TextArea
                        rows={5}
                        size="sm"
                        {...props.register("productdesc")}
                    />
                </div>
            </div>
            <div className="grid grid-cols-12 col-span-6 gap-5 h-max">
                <div className="flex flex-col col-span-12 gap-2 h-fit">
                    <h2 className="text-lg font-medium text-neutral">
                        Product Display
                    </h2>
                </div>
                <div className="flex flex-col col-span-6 gap-2">
                    <input
                        {...props.register("productdisplay")}
                        ref={refProductFile}
                        type="file"
                        className="hidden"
                        onInput={handleUploadProductFile}
                        multiple
                        accept={allowedTypePhotoUpload.join(", ")} //accept type in constant
                    />
                    <Button
                        onClick={handleOpenUploadProductFile}
                        size="sm"
                        className="w-fit"
                        type="button"
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
                                        handleDeleteProductPhoto(idx)
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
    );
}
