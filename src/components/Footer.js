import React from "react";
import Logo from "../assets/img/logo-white.svg";
import IconYt from "../assets/img/IconYt";
import IconFb from "../assets/img/IconFb";
import IconTwitter from "../assets/img/IconTwitter";
import IconPinterest from "../assets/img/IconPinterest";
import IconInsta from "../assets/img/IconInsta";

const Footer = () => {
    return (
        <footer className="bg-darkBlue">
            <div className="container mx-auto flex flex-col-reverse px-12 pt-16 pb-8 md:flex-row md:pb-16">
                {/* Copyright for mobiles*/}
                <h3 className="mt-10 text-center text-sm text-darkGrayishBlue md:hidden">
                    Copyright 2022. All rights reserved
                </h3>
                {/* logo and socials */}
                <div className="flex flex-col-reverse gap-10 md:w-1/3 md:grow md:flex-col md:justify-between">
                    <img
                        className="w-44 self-center md:self-start"
                        src={Logo}
                        alt=""
                    />
                    <div className="flex justify-between md:justify-start md:space-x-4">
                        <IconFb />
                        <IconYt />
                        <IconTwitter />
                        <IconPinterest />
                        <IconInsta />
                    </div>
                </div>

                {/* Links */}
                <div className="grid grid-cols-2 gap-y-2 py-10 px-6 text-white md:w-1/3 md:grow md:p-0">
                    {[
                        "Home",
                        "Careers",
                        "Pricing",
                        "Community",
                        "Products",
                        "Privacy Policy",
                        "About Us",
                    ].map((item, i) => {
                        return (
                            <a
                                className="hover:text-brightRed"
                                href="/"
                                key={i}
                            >
                                {item}
                            </a>
                        );
                    })}
                </div>

                {/* Input */}
                <div className="md:flex md:grow md:flex-col md:justify-between">
                    <div className="flex  max-w-full gap-2">
                        <input
                            className="w-3/4 rounded-full py-2 px-4 text-sm outline-none "
                            type="text"
                            placeholder="Updates in your inbox"
                        />
                        <button className="w-1/4 rounded-full bg-brightRed py-2 text-white hover:bg-brightRedLight">
                            Go
                        </button>
                    </div>
                    <h3 className="hidden text-right text-sm text-darkGrayishBlue md:block">
                        Copyright 2022. All rights reserved <br />
                        made with 💖 and 🔥 by{" "}
                        <a
                            href="https://linkedin.com/in/yousafsabir"
                            target={"_blank"}
                            className={"text-brightRed"}
                        >
                            M. Yousaf
                        </a>
                    </h3>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
