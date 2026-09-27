"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { FaEye, FaRegEyeSlash } from "react-icons/fa6";

const SignUPpage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [isShowPassword, setPassword] = useState(false);

    const handleLoginFunc = async (data) => {
        const { email, name, photo, password } = data;

        const { data: result, error } = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
            image: photo,
            callbackURL: "/",
        });
        console.log(result, error);

        if (error) {
            alert(error.message);
        }
        if (result) {
            alert("Signup Sucessfull");
        }
    };
    return (
        <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center">
            <div className="w-[480px] bg-white border border-gray-300 p-18">
                {/* Heading */}
                <h1 className="text-center text-[20px] font-bold text-gray-700 mb-12">
                    Login your account
                </h1>

                {/* Form */}
                <form
                    className="space-y-4"
                    onSubmit={handleSubmit(handleLoginFunc)}
                >
                    {/* Email */}
                    <div>
                        <label className="  block text-[12px] font-semibold text-gray-700 mb-2">
                            Your Name
                        </label>

                        <input
                            name="name"
                            type="text"
                            placeholder="Enter your name"
                            className="w-full h-10 px-3 bg-[#f3f3f3] border-none outline-none text-[11px] placeholder:text-gray-400"
                            {...register("name", {
                                required: "Name field is required",
                            })}
                        />
                        {errors.name && (
                            <p className="text-[10px] text-blue-500 pt-1">
                                {errors.name.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <label className="  block text-[12px] font-semibold text-gray-700 mb-2">
                            Photo URL
                        </label>

                        <input
                            name="photo url"
                            type="text"
                            placeholder="Enter your Photo URL"
                            className="w-full h-10 px-3 bg-[#f3f3f3] border-none outline-none text-[11px] placeholder:text-gray-400"
                            {...register("photo", {
                                required: "Photo Url is required",
                            })}
                        />
                        {errors.photo && (
                            <p className="text-[10px] text-blue-500 pt-1">
                                {errors.photo.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <label className="  block text-[12px] font-semibold text-gray-700 mb-2">
                            Email address
                        </label>

                        <input
                            name="email"
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full h-10 px-3 bg-[#f3f3f3] border-none outline-none text-[11px] placeholder:text-gray-400"
                            {...register("email", {
                                required: "Email field is required",
                            })}
                        />
                        {errors.email && (
                            <p className="text-[10px] text-blue-500 pt-1">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Password */}
                    <div className="relative">
                        <label className="block text-[12px] font-semibold text-gray-700 mb-2">
                            Password
                        </label>

                        <input
                            name="password"
                            type={isShowPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            className="w-full h-10 px-3 bg-[#f3f3f3] border-none outline-none text-[11px] placeholder:text-gray-400"
                            {...register("password", {
                                required: "Password field is required",
                            })}
                        />
                        {errors.password && (
                            <p className="text-[10px] text-blue-500 pt-1 ">
                                {errors.password.message}
                            </p>
                        )}
                        <p
                            className="absolute right-3 top-10"
                            onClick={() => setPassword(!isShowPassword)}
                        >
                            {isShowPassword ? <FaEye /> : <FaRegEyeSlash />}
                        </p>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full h-9 mt-2 bg-[#414141] hover:bg-[#333333] text-white text-[11px] font-semibold rounded-sm"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUPpage;
