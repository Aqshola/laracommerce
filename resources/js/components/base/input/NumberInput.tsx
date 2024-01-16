import { formatMoneyComma, formatNumberPrice } from "@/utils/formatter";
import { formatOnlyNumberWithOneDot, is_number_dot_comma } from "@/utils/regex";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import React, {
    ForwardedRef,
    InputHTMLAttributes,
    forwardRef,
    useState,
} from "react";

const INPUT_SIZE = {
    sm: "px-4 py-2 rounded-lg text-sm",
    base: "px-4 py-3 rounded-lg text-sm",
    lg: "px-4 py-[14px] text-base rounded-lg text-sm",
};

const INPUT_VARIANCE = {
    default: "border-custom-dark-grey",
};

const INPUT_STATE = {
    default: "placeholder:text-base placeholder:text-gray-500  bg-transparent ",
};

const INPUT_SUPPORT_STATE = {
    default: "text-gray-400 ",
};

interface Props
    extends Omit<
        InputHTMLAttributes<HTMLInputElement>,
        "size" | "className" | "value"
    > {
    size?: keyof typeof INPUT_SIZE;
    variance?: keyof typeof INPUT_VARIANCE;
    state?: keyof typeof INPUT_STATE;
    divClass?: string;
    inputClass?: string;
    labelClass?: string;

    Icon?: React.ReactNode;
    value?: string;
}

function NumberInput(
    {
        size = "base",
        state = "default",
        variance = "default",

        divClass,
        inputClass,
        labelClass,

        Icon,

        type = "text",
        value = "",

        ...props
    }: Props,
    ref: ForwardedRef<HTMLInputElement>
) {
    const [initialType, setinitialType] = useState<typeof type>(type);
    const [displayValue, setdisplayValue] = useState(
        formatMoneyComma(formatOnlyNumberWithOneDot(value))
    );

    function handlePressOnlyNumber(e: React.KeyboardEvent<HTMLInputElement>) {
        const is_numeric = is_number_dot_comma.test(e.key);
        const currentValue = e.currentTarget.value;
        const decimalGroup = currentValue.split(".")[1];

        if (!is_numeric) {
            e.preventDefault();
        }

        if (decimalGroup && decimalGroup.length == 2) {
            e.preventDefault();
        }
    }

    function handleInputNumber(e: React.FormEvent<HTMLInputElement>) {
        const value = e.currentTarget.value;
        let formattedValue = formatOnlyNumberWithOneDot(value);
        let decimalGroup = formattedValue.split(".")[1];
        let indexOfDot = formattedValue.indexOf(".");

        if (decimalGroup && decimalGroup.length > 2) {
            formattedValue = formattedValue.slice(0, indexOfDot + 3);
        }

        const formatCommaValue = formatMoneyComma(formattedValue);
        // setrealValue(formattedValue); //SET NON FORMATTED VALUE HERE
        setdisplayValue(formatCommaValue);
    }

    return (
        <>
            <div
                className={clsx(
                    "flex items-center border outline-0 outline focus-within:outline-[3px] focus-within:outline transition-all duration-75",
                    INPUT_SIZE[size],
                    INPUT_VARIANCE[variance],
                    divClass
                )}
            >
                {Icon !== null && Icon !== undefined && (
                    <div className="pr-2">{Icon}</div>
                )}
                <input
                    value={displayValue}
                    onKeyPress={handlePressOnlyNumber}
                    onInput={handleInputNumber}
                    ref={ref}
                    type={initialType}
                    placeholder="Input"
                    className={clsx(
                        "h-full w-full outline-none border-none ",
                        INPUT_STATE[state],
                        inputClass
                    )}
                    {...props}
                />
            </div>
        </>
    );
}

export default forwardRef(NumberInput);
