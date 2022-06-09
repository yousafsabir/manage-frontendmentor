import React from "react";
import HeroImg from "../assets/img/illustration-intro.svg";

const Hero = () => {
    return (
        <section id="hero">
            <div className="container mx-auto mt-10 flex flex-col-reverse items-center space-y-0 px-6 md:flex-row md:space-y-0">
                {/* left */}
                <div className="mb-32 flex flex-col space-y-12 md:w-1/2">
                    <h1 className="max-w-md text-center text-4xl font-bold md:text-left md:text-4xl">
                        Bring everyone together to build better products
                    </h1>
                    <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
                        Manage makes it simple for software teams to plan
                        day-to-day tasks while keeping the larger team goals in
                        view.
                    </p>
                    <div className="flex justify-center md:justify-start">
                        <a
                            href="/"
                            className="self-baseline rounded-full bg-brightRed p-3 px-6 pt-2 text-white hover:bg-brightRedLight"
                        >
                            Get Started
                        </a>
                    </div>
                </div>
                {/* right */}
                <div className="md:w-1/2">
                    <img src={HeroImg} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
