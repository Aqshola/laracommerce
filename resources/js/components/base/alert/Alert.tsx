import { XMarkIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { Children, ForwardedRef, forwardRef, useState } from "react";

const ALERT_SIZE = {
    base: "text-sm px-3 py-2 rounded-lg",
};

const ALERT_VARIANCE = {
    error: "bg-error text-white",
};

interface Props {
    children: React.ReactNode;
    size?: keyof typeof ALERT_SIZE;
    variance?: keyof typeof ALERT_VARIANCE;
    className?: string;

    //CALLBACK
    onClose?: ({ ...props }?: any) => void;
}

function Alert(
    {
        children,
        size = "base",
        variance = "error",
        className,
        onClose = () => {},
    }: Props,
    ref: ForwardedRef<HTMLDivElement>
) {
    const [show, setshow] = useState(true);

    function closeAlert() {
        setshow(false);
        onClose();
    }

    if (!show) return <></>;
    return (
        <div
            ref={ref}
            className={clsx(
                "font-medium capitalize flex items-center",
                ALERT_SIZE[size],
                ALERT_VARIANCE[variance],
                className
            )}
        >
            <span className="flex-2 flex-grow">{children}</span>
            <button type="button" onClick={closeAlert}>
                <XMarkIcon className=" w-5 h-5  fill-white" />
            </button>
        </div>
    );
}

export default forwardRef(Alert);
