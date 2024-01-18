import Button from "@/components/base/button/Button";

import AdminContainer from "@/components/modules/admin/AdminContainer";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

import { useFieldArray, useForm } from "react-hook-form";
import ProductInformation from "./Form/ProductInformation";
import ProductVariant from "./Form/ProductVariant";

export default function AddProduct() {
    const { register, handleSubmit, control, resetField } = useForm();
    const [isHaveVariant, setisHaveVariant] = useState(false);
    const [productPhotoList, setproductPhotoList] = useState<File[]>([]);

    function _handleProductList(file: File[]) {
        setproductPhotoList([...file]);
    }

    function _handleIsHaveVariant(isHave: boolean) {
        setisHaveVariant(isHave);
    }

    function _handleAddProduct(data: any) {
        console.log(data);
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
                        New Product
                    </h1>
                </div>
                <form onSubmit={handleSubmit(_handleAddProduct)}>
                    <ProductInformation
                        isHaveVariant={isHaveVariant}
                        productPhotoList={productPhotoList}
                        register={register}
                        resetField={resetField}
                        callbackIsHaveVariant={_handleIsHaveVariant}
                        callbackProductPhotoList={_handleProductList}
                    />
                    {isHaveVariant && (
                        <ProductVariant
                            register={register}
                            variantCount={0}
                            control={control}
                        />
                    )}
                    <div className="mt-10 flex gap-5 px-6">
                        <Button>Draft</Button>
                        <Button variance="filled-primary">Submit</Button>
                    </div>
                </form>
            </AdminContainer>
        </>
    );
}
