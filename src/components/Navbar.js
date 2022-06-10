import React from "react";
import Logo from "../assets/img/logo.svg";
import GetStartedButton from "./GetStartedButton";

const Navbar = () => {
    return (
        <nav className="container relative mx-auto p-6">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="logo pt-2">
                    <img src={Logo} alt="" />
                </div>
                {/* Menu */}
                <div className="hidden space-x-6 md:flex">
                    <a href="/" className="hover:text-darkGrayishBlue">
                        Pricing
                    </a>
                    <a href="/" className="hover:text-darkGrayishBlue">
                        Product
                    </a>
                    <a href="/" className="hover:text-darkGrayishBlue">
                        About Us
                    </a>
                    <a href="/" className="hover:text-darkGrayishBlue">
                        Careers
                    </a>
                    <a href="/" className="hover:text-darkGrayishBlue">
                        Community
                    </a>
                </div>
                {/* Button */}
                <div className="hidden md:block">
                    <GetStartedButton />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
