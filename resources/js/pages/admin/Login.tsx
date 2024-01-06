import React from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { LockClosedIcon, UserIcon } from "@heroicons/react/20/solid";
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
        <div className="max-w-screen-2xl mx-auto h-screen p-5 flex justify-center bg-base-100">
            <form
                className="mt-24 bg-white h-fit p-8 rounded flex flex-col"
                onSubmit={handleSubmit(onSubmit)}
            >
                {errors.user != null && (
                    <div className="text-sm bg-error px-3 py-2 rounded text-white font-medium mb-2 capitalize">
                        {errors.user}
                    </div>
                )}
                <h1 className="text-center text-3xl font-roboto text-neutral font-medium">
                    Admin Login
                </h1>
                <div className="flex flex-col mt-5 gap-4">
                    <Input
                        {...register("username")}
                        Icon={<UserIcon className="w-4 h-4 fill-gray-500" />}
                        size="sm"
                        placeholder="Username"
                        id="username"
                        inputClass="w-72"
                        required
                    />
                    <Input
                        {...register("password")}
                        Icon={
                            <LockClosedIcon className="w-4 h-4 fill-gray-500" />
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
