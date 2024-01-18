import React, { useEffect, useState } from "react";
import Button from "@/components/base/button/Button";
import Input from "@/components/base/input/Input";
import { LockClosedIcon, UserIcon } from "@heroicons/react/20/solid";
import { useForm } from "react-hook-form";
import { router, usePage } from "@inertiajs/react";
import Alert from "@/components/base/alert/Alert";

type LoginRequest = {
    username: string;
    password: string;
};
export default function AdminLogin() {
    const { errors } = usePage().props;
    const { register, handleSubmit } = useForm<LoginRequest>();
    const [viewError, setviewError] = useState(false);

    useEffect(() => {
        if (errors.user) {
            setviewError(true);
        } else {
            setviewError(false);
        }
    }, [errors]);

    async function _handleLogin(data: LoginRequest) {
        router.post("/admin/login", data);
        setviewError(false);
    }

    return (
        <div className="max-w-screen-2xl mx-auto h-screen p-5 flex justify-center bg-base-100">
            <form
                className="mt-24 bg-white h-fit p-8 rounded flex flex-col"
                onSubmit={handleSubmit(_handleLogin)}
            >
                <h1 className="text-center text-3xl font-roboto text-neutral font-medium">
                    Admin Login
                </h1>

                {viewError && <Alert className="mt-5">{errors.user}</Alert>}

                <div className="flex flex-col mt-5 gap-4">
                    <Input
                        {...register("username")}
                        Icon={<UserIcon className="w-4 h-4 fill-gray-500" />}
                        size="sm"
                        placeholder="Username"
                        id="username"
                        inputClass=" md:w-72"
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
                        inputClass="md:w-72"
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
