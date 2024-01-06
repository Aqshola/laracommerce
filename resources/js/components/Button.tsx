import clsx from "clsx";
import React, { ButtonHTMLAttributes, ForwardedRef, forwardRef } from "react";

const BUTTON_SIZE = {
    xs: "py-2 px-3 text-xs rounded-sm text-xs rounded-lg",
    sm: "py-2 px-3 text-sm rounded-sm text-xs rounded-lg",
    md: "py-[10px] px-5 text-sm rounded-lg",
    lg: "py-3 px-5 text-base rounded-lg",
    xl: "py-[14px] px-6 text-base rounded-lg",
};

const BUTTON_WEIGHT = {
    normal: "font-normal",
    medium: "font-medium",
    bold: "font-bold",
};

const BUTTON_VARIANCE = {
    "filled-neutral": "bg-neutral hover:bg-neutral-focus text-neutral-content",
    "filled-primary": "bg-primary hover:bg-primary-focus text-primary-content",
    "filled-secondary":
        "bg-secondary hover:bg-secondary-focus text-secondary-content",
    "filled-warning":
        "bg-warning text-white hover:bg-warning/70 hover:backdrop-brightness-0",
    "filled-error":
        "bg-error text-white hover:bg-error/70 hover:backdrop-brightness-0",

    "outline-neutral":
        "border border-neutral text-neutral hover:backdrop-brightness-95",
    "outline-primary":
        "border border-primary text-primary hover:backdrop-brightness-95",
    "outline-secondary":
        "border border-secondary text-secondary hover:backdrop-brightness-95",
    "outline-warning":
        "border border-warning text-warning hover:backdrop-brightness-95",
    "outline-error":
        "border border-error text-error hover:backdrop-brightness-95",

    "text-neutral": "text-neutral hover:backdrop-brightness-0",
    "text-primary":
        "text-primary border  border-transparent hover:border-primary hover:shadow",
    "text-secondary": "text-secondary hover:backdrop-brightness-0",
    "text-warning": "text-warning hover:backdrop-brightness-0",
    "text-danger": "text-danger hover:backdrop-brightness-0",
};

interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "size"> {
    size?: keyof typeof BUTTON_SIZE;
    variance?: keyof typeof BUTTON_VARIANCE;
    weight?: keyof typeof BUTTON_WEIGHT;
    icon?: React.ReactNode;
}

function Button(
    {
        children,
        className,
        size = "md",
        weight = "normal",
        variance = "outline-primary",
        icon,
        ...props
    }: Props,
    ref: ForwardedRef<HTMLButtonElement>
) {
    return (
        <>
            <button
                className={clsx(
                    BUTTON_SIZE[size],
                    BUTTON_VARIANCE[variance],
                    BUTTON_WEIGHT[weight],
                    "transition-all duration-400 font-roboto font-bold flex items-center",
                    className
                )}
                {...props}
            >
                {!!icon && <div className="pr-2">{icon}</div>}
                {children}
            </button>
        </>
    );
}

export default forwardRef(Button);
