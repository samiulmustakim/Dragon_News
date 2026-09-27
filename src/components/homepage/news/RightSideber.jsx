'use client'
import { authClient } from "@/lib/auth-client";
import React from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";

const RightSideber = () => {
    const handleGoggleSignin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    };
    const handleGithubSignin = async () => {
        const data = await authClient.signIn.social({
        provider: "github"
    })
    }
    return (
        <div>
            <h1 className="my-4 text-2xl">Login With</h1>
            <div className="flex flex-col gap-2 text-lg">
                <button
                    onClick={handleGoggleSignin}
                    className="flex cursor-pointer items-center justify-center border-3 rounded-lg p-3 gap-2 border-sky-400 "
                >
                    <FaGoogle />
                    Login with Goggle
                </button>
                <button onClick={handleGithubSignin} className="flex cursor-pointer items-center justify-center border-3 rounded-lg p-3 gap-2 border-gray-800">
                    <FaGithub />
                    Login with GitHub
                </button>
            </div>
        </div>
    );
};

export default RightSideber;
