import React from "react";
import FeatureArticles from "./FeatureArticles";

const Features = () => {
    return (
        // features section
        <section id="Features">
            {/* flex container */}
            <div className="container mx-auto mt-10 flex flex-col space-y-12 px-4 md:flex-row md:space-y-0">
                {/* What's different */}
                <div className="flex flex-col space-y-12 md:w-1/2">
                    <h2 className="max-w-md text-center text-4xl font-bold md:text-left">
                        What's different about Manage?
                    </h2>
                    <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
                        Manage provides all the functionality your team needs,
                        without the complexity. Our software is tailor-made for
                        modern digital product teams.
                    </p>
                </div>
                {/* Numbered List */}
                <div className="flex flex-col space-y-8 md:w-1/2">
                    <FeatureArticles
                        number="01"
                        heading="Track company-wide progress"
                        text="See how your day-to-day tasks fit into the wider vision. Go
                        from tracking progress at the milestone level all the way
                        done to the smallest of details. Never lose sight of the
                        bigger picture again."
                    />
                    <FeatureArticles
                        number="02"
                        heading="Advanced built-in reports"
                        text="Set internal delivery estimates and track progress toward
                        company goals. Our customisable dashboard helps you build out
                        the reports you need to keep key stakeholders informed."
                    />
                    <FeatureArticles
                        number="03"
                        heading="Everything you need in one place"
                        text="Stop jumping from one service to another to communicate, store
                        files, track tasks and share documents. Manage offers an
                        all-in-one team productivity solution."
                    />
                </div>
            </div>
        </section>
    );
};

export default Features;
