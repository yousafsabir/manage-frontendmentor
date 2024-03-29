import React, { useState } from "react";
import Logo from "../assets/img/logo.svg";
import GetStartedButton from "./GetStartedButton";
import IconMenu from "../assets/img/IconMenu";
import IconClose from "../assets/img/IconClose";
import NavMenu from "./NavMenu";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="container relative mx-auto p-6">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="logo pt-2">
                    <img src={Logo} alt="" />
                </div>
                {/* Menu */}
                <div className="hidden space-x-6 md:flex">
                    {[
                        "Pricing",
                        "Product",
                        "About Us",
                        "Careers",
                        "Community",
                    ].map((item, i) => {
                        return (
                            <a
                                href="/"
                                className="cursor-pointer hover:text-darkGrayishBlue"
                                key={i}
                            >
                                {item}
                            </a>
                        );
                    })}
                </div>
                {/* CTA */}
                <div className="hidden md:block">
                    <GetStartedButton />
                </div>
                {/* Menu Button */}
                <div
                    className="cursor-pointer md:hidden"
                    onClick={() => setOpen((prev) => !prev)}
                >
                    {!open ? <IconMenu /> : <IconClose />}
                </div>

                <NavMenu isOpen={open} />
            </div>
        </nav>
    );
};

export default Navbar;
