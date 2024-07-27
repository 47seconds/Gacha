import React from "react";
import {Contact, AboutMe} from "../components";

const About = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6">
            <AboutMe/>
            <Contact/>
        </div>
    );
};

export default About;
