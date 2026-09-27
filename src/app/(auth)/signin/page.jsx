"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaRegEyeSlash } from "react-icons/fa6";

const SignInPage = () => {

    const [isShowPassword, setPassword] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleLoginFunc = async (data) => {
        const { data: res, error } = await authClient.signIn.email({
            email: data.email, 
            password: data.password, 
            rememberMe: true,
            callbackURL: "/",
        });
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
                            name= "password"
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
                        <p className="absolute right-3 top-10" onClick={()=> setPassword(!isShowPassword)} >{isShowPassword ? <FaEye /> : <FaRegEyeSlash />}</p>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full h-9 mt-2 bg-[#414141] hover:bg-[#333333] text-white text-[11px] font-semibold rounded-sm"
                    >
                        Login
                    </button>

                    {/* Register */}
                    <p className="text-center text-[11px] font-bold text-gray-600 mt-2">
                        Don't Have An Account?{" "}
                        <Link
                            href="/signup"
                            className="text-red-500 hover:underline"
                        >
                            Register
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignInPage;
