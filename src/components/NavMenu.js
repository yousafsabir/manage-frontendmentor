import React from "react";

const NavMenu = (props) => {
    return (
        <div
            className="fixed top-24 mx-[6%] h-[310px] w-[88%] bg-gray-100 shadow-2xl transition-all duration-300 md:hidden"
            style={props.isOpen ? { left: "0" } : { left: "100%" }}
        >
            <ul className="flex h-full flex-col justify-evenly text-center text-xl font-bold text-darkBlue">
                {["Pricing", "Product", "About Us", "Careers", "Community"].map(
                    (item, i) => {
                        return (
                            <li
                                className="cursor-pointer hover:text-darkGrayishBlue"
                                key={i}
                            >
                                {item}
                            </li>
                        );
                    }
                )}
            </ul>
        </div>
    );
};

export default NavMenu;
