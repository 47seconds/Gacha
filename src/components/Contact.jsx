import React from "react";
import {
    FaGithub,
    FaLinkedin,
    FaXTwitter,
    FaDiscord,
    FaEnvelope,
    FaPhone,
} from "react-icons/fa6";
import {FaTelegramPlane} from 'react-icons/fa';

function Contact() {
    return (
        <div className="max-w-3xl w-full bg-gray-800 shadow-lg rounded-lg p-8 text-black dark:text-white mt-24">
            <h2 className="text-2xl font-bold text-center">Contact Me</h2>
            <div className="flex flex-wrap flex-grow mt-6 justify-center items-center">
                <a
                    href="https://github.com/47seconds"
                    target="_blank"
                    className="flex items-center space-x-2 text-lg mx-6 my-2"
                >
                    <FaGithub />
                    <span>47seconds</span>
                </a>
                <a
                    href="https://www.linkedin.com/in/vaibhav-lakshkar-389228275/"
                    target="_blank"
                    className="flex items-center space-x-2 text-lg mx-6 my-2"
                >
                    <FaLinkedin />
                    <span>Vaibhav Lakshkar</span>
                </a>
                <a
                    href="https://x.com/Vaibhav_Lak"
                    className="flex items-center space-x-2 text-lg mx-6 my-2"
                >
                    <FaXTwitter />
                    <span>Vaibhav Lakshkar</span>
                </a>
                <a
                    href="https://discordapp.com/users/47seconds"
                    target="_blank"
                    className="flex items-center space-x-2 text-lg mx-6 my-2"
                >
                    <FaDiscord />
                    <span>47seconds</span>
                </a>
                <div className="flex items-center space-x-2 text-lg mx-6 my-2">
                    <FaTelegramPlane />
                    <span>@Official_47seconds</span>
                </div>
                <a
                    href="vaibhavlakshkar.12345@gmail.com"
                    className="flex items-center space-x-2 text-lg mx-6 my-2"
                >
                    <FaEnvelope />
                    <span>vaibhavlakshkar.12345@gmail.com</span>
                </a>
                <div className="flex items-center space-x-2 text-lg mx-6 my-2">
                    <FaPhone />
                    <span>+91-62653-38665</span>
                </div>
            </div>
        </div>
    );
}

export default Contact;
