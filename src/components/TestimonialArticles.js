import React from "react";

const TestimonialArticles = (props) => {
    return (
        <div className="flex flex-col items-center space-y-6 rounded-lg bg-veryLightGray p-6 pt-8 md:w-1/3">
            <img src={props.img} className="-mt-14 h-16 w-16" alt="" />
            <h5 className="text-lg font-bold">{props.name}</h5>
            <p className="text-sm text-darkGrayishBlue">{props.quote}</p>
        </div>
    );
};

export default TestimonialArticles;
