"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import avaterimg from "@/app/assets/user.png";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";

const Navber = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    console.log(user);
    return (
        <div className="flex justify-between container mx-auto items-center">
            <div></div>
            <ul className="flex gap-5 text-gray-500 items-center">
                <li>
                    <NavLink href={"/"}>Home</NavLink>
                </li>
                <li>
                    <NavLink href={"/about"}>About</NavLink>
                </li>
                <li>
                    <NavLink href={"/carrer"} className={"text-blue-500"}>
                        Career
                    </NavLink>
                </li>
            </ul>
            {isPending ? (
                <div>
                    <span className="loading loading-spinner text-primary"></span>
                    <span className="loading loading-spinner text-secondary"></span>
                    <span className="loading loading-spinner text-accent"></span>
                    <span className="loading loading-spinner text-neutral"></span>
                    <span className="loading loading-spinner text-info"></span>
                    <span className="loading loading-spinner text-success"></span>
                    <span className="loading loading-spinner text-warning"></span>
                    <span className="loading loading-spinner text-error"></span>
                </div>
            ) : user ? (
                <div className="flex gap-3 items-center">
                    {user ? <p>{user.name}</p> : ""}
                    <Image
                        src={user.image || avaterimg}
                        className="rounded-full w-10 h-10 object-cover"
                        alt="user-image"
                        width={40}
                        height={40}
                    ></Image>
                    <button onClick={async() => await authClient.signOut()} className="btn bg-blue-700 rounded-none text-white px-7">
                        Logout
                    </button>
                </div>
            ) : (
                <button className="btn bg-gray-700 rounded-none text-white px-7">
                    <Link href={"/signin"}>Login</Link>
                </button>
            )}
        </div>
    );
};

export default Navber;
