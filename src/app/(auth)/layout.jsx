import Navber from "@/components/shared/Navber";
import React from "react";
import { montserrat } from "../layout";

const AuthLayout = ({ children }) => {
    return (
        <div className={`${montserrat.className} h-screen overflow-hidden`}>
            <div className="bg-base-200">
                <div className="pt-5">
                    <Navber />
                </div>
            </div>

            {children}
        </div>
    );
};

export default AuthLayout;
