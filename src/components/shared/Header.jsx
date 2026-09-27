import Image from "next/image";
import React from "react";
import logo from "@/app/assets/logo.png";
import { format } from "date-fns";
import BreakingNews from "./BreakingNews";

const Header = () => {
    return (
        <div className="flex justify-center flex-col items-center my-9 space-y-1">
            <Image
                src={logo}
                alt="Dragon News Logo"
                width={400}
                height={400}
            ></Image>
            <h1 className="">Journalism Without Fear or Favour</h1>

            {/* <p className="font-light">
                <span className="font-medium">{format(new Date(), "EEEE")}</span>
                {format(new Date(), ", MMMM d, yyyy")}
            </p> */}
            <p>
                <span className="font-medium">{format(new Date(), "EEEE")}</span>
                {format(new Date(), ", MMMM d, yyyy")}
            </p>
            <BreakingNews></BreakingNews>
        </div>
    );
};

export default Header;
