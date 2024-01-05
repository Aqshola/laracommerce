import React from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { LockClosedIcon, UserCircleIcon } from "@heroicons/react/20/solid";
export default function AdminLogin() {
    return (
        <div className="max-w-screen-2xl mx-auto h-screen p-5 flex justify-center bg-gray-50">
            <div className="mt-24 bg-white h-fit p-8 rounded flex flex-col">
                <h1 className="text-center text-3xl">Admin Login</h1>
                <div className="flex flex-col mt-5 gap-4">
                    <Input
                        Icon={
                            <UserCircleIcon className="w-6 h-6 fill-gray-500 mt-0.5" />
                        }
                        size="sm"
                        placeholder="Username"
                        id="username"
                        inputClass="w-64"
                    />
                    <Input
                        Icon={
                            <LockClosedIcon className="w-5 h-5 fill-gray-500 mt-0.5" />
                        }
                        type="password"
                        size="sm"
                        placeholder="Password"
                        id="password"
                        inputClass="w-64"
                        divClass="w-full"
                    />
                    <Button size="sm" variance="filled-primary">
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    );
}
