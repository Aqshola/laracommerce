import clsx from "clsx";
import React from "react";

export default function Input({
    size = "base",
    state = "default",
    variance = "default",
}) {
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
        default:
            "placeholder:text-base placeholder:text-gray-500  bg-transparent ",
    };

    const INPUT_SUPPORT_STATE = {
        default: "text-gray-400 ",
    };
    return (
        <>
            <div
                className={clsx(
                    "w-fit border outline-0 outline focus-within:outline-[3px] focus-within:outline transition-all duration-75",
                    INPUT_SIZE[size],
                    INPUT_VARIANCE[variance]
                )}
            >
                <input
                    type="text"
                    placeholder="Input"
                    className={clsx(
                        "p-3 h-full w-full outline-none border-none ",
                        INPUT_STATE[state]
                    )}
                />
            </div>
            <p
                className={clsx(
                    "px-2 py-2 text-xs",
                    INPUT_SUPPORT_STATE[state]
                )}
            >
                Supporting Text
            </p>
        </>
    );
}
