import React from "react";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Features />
            <Testimonials />
        </>
    );
}

export default App;
