import Button from "@/components/base/button/Button";
import ProductVariantCard from "@/components/modules/admin/ProductVariantCard";
import {
    Control,
    FieldValues,
    UseFormRegister,
    useFieldArray,
} from "react-hook-form";

interface Props {
    //HOOKS REF
    register: UseFormRegister<FieldValues>;
    control: Control<FieldValues, any>;
    //INITIAL FIELD
    variantCount: number;
}

export default function ProductVariant(props: Props) {
    const { fields, append, remove } = useFieldArray({
        control: props.control,
        name: "variant",
    });

    function addVariant() {
        append({
            photo: null,
            name: "",
            stock: 0,
            price: 0,
        });
    }

    function removeVariant(idx: string | number) {
        let parsing = idx;
        if (typeof idx == "string") {
            parsing = Number(idx);
        }

        if (typeof parsing === "number") {
            remove(parsing);
        }
    }

    return (
        <div className="mt-20 px-6">
            <h2 className="text-lg font-medium text-neutral">
                Product Variant
            </h2>

            <Button
                size="xs"
                className="mt-2"
                onClick={addVariant}
                type="button"
            >
                Add Variant
            </Button>

            {/* LIST INPUT VARIANT */}
            <div className="grid grid-cols-12 mt-5 gap-5">
                {fields.map((_, idx) => (
                    <div className="col-span-5" key={idx}>
                        <ProductVariantCard
                            register={props.register}
                            id={idx.toString()}
                            callbackRemove={removeVariant}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
