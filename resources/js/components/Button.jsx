import clsx from "clsx";
import React from "react";

export default function Button({
    children,

    size = "md",
    weight = "normal",
    variance = "outline-primary",
}) {
    const BUTTON_SIZE = {
        xs: "py-2 px-4 text-xs rounded-sm",
        sm: "py-custom-sm px-custom-sm-2 text-sm rounded-sm",
        md: "py-3 px-6 text-base rounded-md",
        lg: "py-custom-md px-custom-md-2 text-lg rounded-lg",
        xl: "py-4 px-8 text-xl rounded-xl",
    };

    const BUTTON_WEIGHT = {
        normal: "font-normal",
        medium: "font-medium",
        bold: "font-bold",
    };

    const BUTTON_VARIANCE = {
        "filled-primary":
            "bg-primary text-white hover:bg-primary/70 hover:backdrop-brightness-0",
        "filled-secondary":
            "bg-secondary text-white hover:bg-secondary/70 hover:backdrop-brightness-0",
        "filled-warning":
            "bg-warning text-white hover:bg-warning/70 hover:backdrop-brightness-0",
        "filled-danger":
            "bg-danger text-white hover:bg-warning/70 hover:backdrop-brightness-0",

        "outline-primary":
            "border border-primary text-primary hover:backdrop-brightness-95",
        "outline-secondary":
            "border border-secondary text-secondary hover:backdrop-brightness-95",
        "outline-warning":
            "border border-warning text-warning hover:backdrop-brightness-95",
        "outline-danger":
            "border border-danger text-danger hover:backdrop-brightness-95",

        "text-primary": " text-primary hover:backdrop-brightness-0",
        "text-secondary": "text-secondary hover:backdrop-brightness-0",
        "text-warning": "text-warning hover:backdrop-brightness-0",
        "text-danger": "text-danger hover:backdrop-brightness-0",
    };

    return (
        <>
            <button
                className={clsx(
                    BUTTON_SIZE[size],
                    BUTTON_VARIANCE[variance],
                    BUTTON_WEIGHT[weight],
                    " transition-all duration-400 "
                )}
            >
                {children}
            </button>
        </>
    );
}
