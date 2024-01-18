import Input from "@/components/base/input/Input";
import { allowedTypePhotoUpload } from "@/utils/constant";
import {
    fileImageUploadUrlExtractor,
    fileUploadExtractor,
} from "@/utils/helper";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface Props {
    register: UseFormRegister<FieldValues>;

    //INITIAL FIELD
    id: string;
    name?: string;
    stock?: number;
    price?: number;

    //CALLBACK
    callbackRemove: (id: string | number) => void;
}
export default function ProductVariantCard(props: Props) {
    const refUploadFile = useRef<HTMLInputElement | null>(null);
    const [currentPhoto, setcurrentPhoto] = useState<File | null>(null);

    const fieldId = `variant.${props.id}`;

    function handleOpenUploadPhoto() {
        if (!refUploadFile) return;

        refUploadFile.current?.click();
    }

    function handleUploadPhoto(el: React.ChangeEvent<HTMLInputElement>) {
        const listFile = el.target.files;
        if (listFile && listFile.length > 0) {
            setcurrentPhoto(listFile[0]);
        }
    }
    return (
        <div className="w-full border p-5 rounded-lg h-full">
            <div className="flex justify-end items-center gap-5">
                {/* <div className="text-xs border rounded-full px-2  text-neutral border-neutral">
                    Default
                </div> */}
                <button onClick={() => props.callbackRemove(props.id)}>
                    <TrashIcon className="h-5 w-5 text-neutral" />
                </button>
            </div>
            <div className="flex gap-5  items-center h-full">
                <input
                    {...props.register(`${fieldId}.photo`)}
                    type="file"
                    className="hidden"
                    ref={(e) => {
                        refUploadFile.current = e;
                        props.register(`${fieldId}.photo`).ref(e);
                    }}
                    onInput={handleUploadPhoto}
                    accept={allowedTypePhotoUpload.join(", ")} //accept type in constant
                />
                <div className="h-full w-44 mb-5 rounded-lg box-border bg-gray-100 flex items-center justify-center overflow-hidden relative">
                    {!currentPhoto && (
                        <button
                            type="button"
                            onClick={handleOpenUploadPhoto}
                            className="text-sm w-full h-full"
                        >
                            Upload Foto
                        </button>
                    )}

                    {currentPhoto && (
                        <button
                            className="bg-white absolute rounded-full p-0.5 right-1 top-1"
                            type="button"
                            onClick={handleOpenUploadPhoto}
                        >
                            <PencilIcon className="h-4 w-4 " />
                        </button>
                    )}

                    {currentPhoto && (
                        <img
                            className="w-full h-full flex object-cover"
                            src={fileImageUploadUrlExtractor(currentPhoto)}
                            alt={currentPhoto.name}
                        />
                    )}
                </div>
                <div className="flex flex-col gap-3">
                    <div>
                        <label htmlFor="name" className="text-xs">
                            Name
                        </label>
                        <Input
                            size="xs"
                            placeholder="Name"
                            {...props.register(`${fieldId}.name`)}
                        />
                    </div>
                    <div>
                        <label htmlFor="stock" className="text-xs">
                            Stock
                        </label>
                        <Input
                            size="xs"
                            placeholder="Stock"
                            {...props.register(`${fieldId}.stock`)}
                        />
                    </div>
                    <div>
                        <label htmlFor="price" className="text-xs">
                            Price
                        </label>
                        <Input
                            size="xs"
                            placeholder="Price"
                            {...props.register(`${fieldId}.price`)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
