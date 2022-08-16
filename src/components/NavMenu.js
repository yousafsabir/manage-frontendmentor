import React from "react";

const NavMenu = (props) => {
    return (
        <div
            className="w-[88%] mx-[6%] bg-gray-100 fixed top-24 h-[310px] shadow-2xl transition-all duration-300 md:hidden"
            style={props.isOpen ? { left: "0" } : { left: "100%" }}
        >
            <ul className="text-center text-darkBlue font-bold text-xl flex flex-col justify-evenly h-full">
                <li className="cursor-pointer hover:text-darkGrayishBlue">
                    Pricing
                </li>
                <li className="cursor-pointer hover:text-darkGrayishBlue">
                    Product
                </li>
                <li className="cursor-pointer hover:text-darkGrayishBlue">
                    About Us
                </li>
                <li className="cursor-pointer hover:text-darkGrayishBlue">
                    Careers
                </li>
                <li className="cursor-pointer hover:text-darkGrayishBlue">
                    Community
                </li>
            </ul>
        </div>
    );
};

export default NavMenu;
