import React from "react";
import divider from "../assets/images/divider.png";

const AuthFooter = () => {
    return (
        <div className="flex flex-col items-center w-full">
            <img 
                src={divider} 
                alt="Divider" 
                className="h-auto w-full max-w-full" 
            />

            <div className="flex flex-col sm:flex-row items-center mt-11 auth-footer-links">
                <a href="#" className="text-sm hover:underline sm:mr-6">
                    Conditions of Use
                </a>
                <a href="#" className="text-sm hover:underline sm:mr-6">
                    Privacy Notice
                </a>
                <a href="#" className="text-sm hover:underline">
                    Help
                </a>
            </div>

            <p className="text-sm mt-4 auth-copyright">
                © 1996-2024, Amazon.com, Inc. or its affiliates.
            </p>
        </div>
    );
}

export default AuthFooter;