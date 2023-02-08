import React from "react";
import TestimonialArticles from "./TestimonialArticles";
import GetStartedButton from "./GetStartedButton";
import Anisha from "../assets/img/avatar-anisha.png";
import Ali from "../assets/img/avatar-ali.png";
import Richard from "../assets/img/avatar-richard.png";

const Testimonials = () => {
    return (
        <section id="testimonials">
            <div className="mx-auto mt-32 max-w-6xl px-5 text-center">
                <h2 className="text-4xl font-bold">What they've said</h2>
                {/* testimonials */}
                <div className="mt-24 flex flex-col space-y-12 px-4 md:flex-row md:space-x-6 md:space-y-0">
                    {[
                        {
                            img: Anisha,
                            name: "Anisha Li",
                            quote: "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
                        },
                        {
                            img: Ali,
                            name: "Ali Bravo",
                            quote: "“We have been able to cancel so many other using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
                        },
                        {
                            img: Richard,
                            name: "Richard Watts",
                            quote: "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
                        },
                    ].map((item, i) => {
                        return <TestimonialArticles {...item} key={i} />;
                    })}
                </div>
                <div className="py-16">
                    <GetStartedButton />
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
