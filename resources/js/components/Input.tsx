import { EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import React, {
    ForwardedRef,
    InputHTMLAttributes,
    forwardRef,
    useState,
} from "react";

const INPUT_SIZE = {
    xs: "text-sm h-10 rounded",
    sm: "text-base h-11 rounded-md",
    base: "text-lg h-12 rounded-lg",
    lg: "text-xl h-13 rounded-xl",
    xl: "text-2xl h-14 rounded-2xl",
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
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "className"> {
    size?: keyof typeof INPUT_SIZE;
    variance?: keyof typeof INPUT_VARIANCE;
    state?: keyof typeof INPUT_STATE;
    divClass?: string;
    inputClass?: string;
    labelClass?: string;

    Icon?: React.ReactNode;
}

function Input(
    {
        size = "base",
        state = "default",
        variance = "default",

        divClass,
        inputClass,
        labelClass,

        Icon,

        type = "text",

        ...props
    }: Props,
    ref: ForwardedRef<HTMLInputElement>
) {
    const [initialType, setinitialType] = useState<typeof type>(type);
    function handlePasswordVisible() {
        if (type != "password") return;
        if (initialType == "password") {
            setinitialType("text");
            return;
        }

        setinitialType("password");
        return;
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
                    <div className="pl-2">{Icon}</div>
                )}
                <input
                    ref={ref}
                    type={initialType}
                    placeholder="Input"
                    className={clsx(
                        Icon !== null && Icon !== undefined && "py-3 px-2",
                        (Icon === null || Icon === undefined) && "p-3",

                        "h-full w-full outline-none border-none ",
                        INPUT_STATE[state],
                        inputClass
                    )}
                    {...props}
                />

                {type === "password" && (
                    <button className="pr-2" onClick={handlePasswordVisible}>
                        {initialType == "text" && (
                            <EyeSlashIcon className="w-5 h-5" />
                        )}
                        {initialType == "password" && (
                            <EyeIcon className="w-5 h-5" />
                        )}
                    </button>
                )}
            </div>
            {/* <p
                className={clsx(
                    "px-2 py-2 text-xs",
                    INPUT_SUPPORT_STATE[state],
                    labelClass
                )}
            >
                Supporting Text
            </p> */}
        </>
    );
}

export default forwardRef(Input);
