import React from "react";
import Button from "@/components/Button";
import {
    ArrowLeftStartOnRectangleIcon,
    Cog6ToothIcon,
    FolderIcon,
    HomeIcon,
    RectangleGroupIcon,
    TagIcon,
    UserGroupIcon,
} from "@heroicons/react/24/outline";

export default function SideNav() {
    return (
        <>
            <div className="flex flex-col min-h-screen h-full bg-[#FDFDFD] px-5 min-w-56 py-4 border-r-2 border">
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
                    <Button
                        size="xs"
                        variance="text-primary"
                        className="font-bold "
                        icon={<HomeIcon className="h-4 w-4" />}
                    >
                        Dashboard
                    </Button>
                    <Button
                        size="xs"
                        variance="text-primary"
                        className="font-bold "
                        icon={<FolderIcon className="h-4 w-4" />}
                    >
                        Product
                    </Button>
                    <Button
                        size="xs"
                        variance="text-primary"
                        className="font-bold "
                        icon={<RectangleGroupIcon className="h-4 w-4" />}
                    >
                        Tag Product
                    </Button>
                    <Button
                        size="xs"
                        variance="text-primary"
                        className="font-bold "
                        icon={<TagIcon className="h-4 w-4" />}
                    >
                        Discount
                    </Button>
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
