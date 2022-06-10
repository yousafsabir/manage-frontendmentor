import React from "react";

const CTA = () => {
    return (
        <section className="bg-brightRed">
            <div className="container mx-auto flex flex-col items-center justify-between space-y-12 px-6 py-24   md:flex-row md:space-y-0 md:py-12 md:text-left">
                <h2 className=" max-w-xl text-center text-5xl font-bold leading-tight text-white md:text-left md:text-4xl">
                    Simplify how your team works today.
                </h2>
                <a
                    href="/"
                    className=" rounded-full bg-white p-3 px-6 pt-2 text-brightRed shadow-2xl hover:bg-brightRedSupLight hover:shadow-md hover:shadow-brightRed"
                >
                    Get Started
                </a>
            </div>
        </section>
    );
};

export default CTA;
