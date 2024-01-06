import React from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { LockClosedIcon, UserCircleIcon } from "@heroicons/react/20/solid";
import { useForm } from "react-hook-form";
import { router, usePage } from "@inertiajs/react";

type LoginRequest = {
    username: string;
    password: string;
};
export default function AdminLogin() {
    const { errors } = usePage().props;
    const { register, handleSubmit } = useForm<LoginRequest>();

    async function onSubmit(data: LoginRequest) {
        router.post("/admin/login", data);
    }

    console.log(errors);

    return (
        <div className="max-w-screen-2xl mx-auto h-screen p-5 flex justify-center bg-gray-50">
            <form
                className="mt-24 bg-white h-fit p-8 rounded flex flex-col"
                onSubmit={handleSubmit(onSubmit)}
            >
                {errors.user != null && (
                    <div className="text-sm bg-custom-red px-2 py-1 rounded text-white font-medium">
                        {errors.user}
                    </div>
                )}
                <h1 className="text-center text-3xl">Admin Login</h1>
                <div className="flex flex-col mt-5 gap-4">
                    <Input
                        {...register("username")}
                        Icon={
                            <UserCircleIcon className="w-6 h-6 fill-gray-500 mt-0.5" />
                        }
                        size="sm"
                        placeholder="Username"
                        id="username"
                        inputClass="w-64"
                        required
                    />
                    <Input
                        {...register("password")}
                        Icon={
                            <LockClosedIcon className="w-5 h-5 fill-gray-500 mt-0.5" />
                        }
                        autoComplete=""
                        type="password"
                        size="sm"
                        placeholder="Password"
                        id="password"
                        inputClass="w-64"
                        divClass="w-full"
                        required
                    />
                    <Button size="sm" variance="filled-primary">
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    );
}
