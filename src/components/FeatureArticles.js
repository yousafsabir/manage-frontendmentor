import React from "react";

const FeatureArticles = (props) => {
    return (
        <article className="flex flex-col space-y-3 md:flex-row md:space-x-6 md:space-y-0">
            {/* Heading */}
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2">
                    <div className="rounded-full bg-brightRed px-4 py-2 text-white md:py-1">
                        {props.number}
                    </div>
                    <h3 className="text-lg font-bold md:hidden">
                        {props.heading}
                    </h3>
                </div>
            </div>
            <div>
                <h3 className="mb-4 hidden text-lg font-bold md:block">
                    {props.heading}
                </h3>
                <p className="max-w-md text-darkGrayishBlue">{props.text}</p>
            </div>
        </article>
    );
};

export default FeatureArticles;
