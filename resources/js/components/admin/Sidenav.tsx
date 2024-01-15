import React from "react";
import Button from "@/components/Button";
import {
    ArrowLeftStartOnRectangleIcon,
    Cog6ToothIcon,
    CreditCardIcon,
    FolderIcon,
    HomeIcon,
    RectangleGroupIcon,
    TagIcon,
    UserGroupIcon,
} from "@heroicons/react/24/outline";
import {
    HomeIcon as HomeIconActive,
    FolderIcon as FolderIconActive,
    RectangleGroupIcon as RectangleGroupIconActive,
    TagIcon as TagIconActive,
    CreditCardIcon as CreditCardIconActive,
} from "@heroicons/react/24/solid";
import { router, usePage, Link } from "@inertiajs/react";
import clsx from "clsx";

export default function SideNav() {
    const { url } = usePage();
    const activeUrl = url.trim().split("/")[2] || "";

    const MAIN_MENU = [
        {
            label: "Dashboard",
            iconInitial: HomeIcon,
            IconActive: HomeIconActive,
            callback: () => {},
            url: "dashboard",
            type: "link",
        },

        {
            label: "Product",
            iconInitial: FolderIcon,
            IconActive: FolderIconActive,
            callback: () => {},
            url: "product",
            type: "link",
        },
        {
            label: "Tag Product",
            iconInitial: RectangleGroupIcon,
            IconActive: RectangleGroupIconActive,
            callback: () => {},
            url: "tag",
            type: "link",
        },

        {
            label: "Discount",
            iconInitial: TagIcon,
            IconActive: TagIconActive,
            callback: () => {},
            url: "discount",
            type: "link",
        },

        {
            label: "Payment",
            iconInitial: CreditCardIcon,
            IconActive: CreditCardIconActive,
            callback: () => {},
            url: "payment",
            type: "link",
        },
    ];

    function _handleLogout() {
        router.post("/admin/logout");
    }

    function _conditionalWrappingLink(
        wrap: boolean,
        element: React.ReactNode,
        href: string
    ) {
        if (wrap) {
            return <Link href={`/admin/${href}`}>{element}</Link>;
        }

        return element;
    }
    return (
        <>
            <div className="flex flex-col min-h-screen h-full bg-[#FDFDFD] px-5 min-w-56 py-4 border-r-1 border">
                <div className="px-3 flex items-center ">
                    <div className="pr-2 ">
                        <div className=" bg-primary text-white font-medium rounded w-4 h-4 text-xs flex items-center justify-center">
                            <div>A</div>
                        </div>
                    </div>
                    <span className="text-xs font-roboto font-medium">
                        Admin
                    </span>
                </div>
                <div className="flex flex-col mt-6 gap-2">
                    {MAIN_MENU.map((menu) =>
                        _conditionalWrappingLink(
                            menu.type === "link",
                            <Button
                                size="xs"
                                variance="text-primary"
                                className={clsx(
                                    menu.url == activeUrl && "font-semibold"
                                )}
                                icon={
                                    menu.url == activeUrl ? (
                                        <menu.IconActive className="h-4 w-4" />
                                    ) : (
                                        <menu.iconInitial className="h-4 w-4" />
                                    )
                                }
                            >
                                {menu.label}
                            </Button>,
                            menu.url
                        )
                    )}
                </div>
                <div className="mt-auto flex flex-col gap-2">
                    <Button
                        size="xs"
                        variance="text-primary"
                        className="font-bold "
                        icon={<UserGroupIcon className="h-4 w-4" />}
                    >
                        Manage User
                    </Button>
                    <Button
                        size="xs"
                        variance="text-primary"
                        className="font-bold "
                        icon={<Cog6ToothIcon className="h-4 w-4" />}
                    >
                        Settings
                    </Button>
                    <Button
                        onClick={_handleLogout}
                        size="xs"
                        variance="text-primary"
                        className="font-bold "
                        icon={
                            <ArrowLeftStartOnRectangleIcon className="h-4 w-4" />
                        }
                    >
                        Log out
                    </Button>
                </div>
            </div>
        </>
    );
}
