import clsx from "clsx";
import { ForwardedRef, TextareaHTMLAttributes, forwardRef } from "react";

const INPUT_SIZE = {
    xs: "px-3 py-1 rounded text-xs  placeholder:text-xs",
    sm: "px-4 py-2 rounded-lg text-sm placeholder:text-sm ",
    base: "px-4 py-3 rounded-lg text-sm placeholder:text-sm",
    lg: "px-4 py-[14px] text-base rounded-lg text-sm placeholder:text-sm",
};

const INPUT_VARIANCE = {
    default: "border-custom-dark-grey",
};

const INPUT_STATE = {
    default: "placeholder:text-gray-500  bg-transparent ",
};

const INPUT_SUPPORT_STATE = {
    default: "text-gray-400 ",
};

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    size?: keyof typeof INPUT_SIZE;
    variance?: keyof typeof INPUT_VARIANCE;
    state?: keyof typeof INPUT_STATE;
    isResize?: boolean;
}
function TextArea(
    {
        size = "base",
        state = "default",
        variance = "default",

        rows = 3,
        isResize = false,

        ...props
    }: Props,
    ref: ForwardedRef<HTMLTextAreaElement>
) {
    return (
        <textarea
            ref={ref}
            placeholder="TextArea"
            className={clsx(
                INPUT_SIZE[size],
                INPUT_STATE[state],
                INPUT_VARIANCE[variance],
                !isResize && "resize-none",
                "border transition-all outline-0 outline focus-within:outline-[3px] focus-within:outline duration-75"
            )}
            rows={rows}
            {...props}
        ></textarea>
    );
}

export default forwardRef(TextArea);
