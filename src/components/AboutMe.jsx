import React from "react";

function AboutMe() {
    return (
        <div className="max-w-3xl w-full bg-gray-800 shadow-lg p-8 dark:text-white rounded-xl">
            <h1 className="text-3xl font-bold text-center mb-6">About Me</h1>
            <p className="text-lg text-gray-700 dark:text-white mb-4">
                I'm a Full Stack MERN Developer who loves working with both
                frontend and backend technologies. I take pride in writing
                clean, maintainable code that scales well. I'm enthusiastic
                about developing applications that bring my ideas to life and
                exploring new tech. Always eager to learn and grow, I'm
                constantly on the lookout for opportunities to pick up new
                skills and experiences.
            </p>
            <p className="text-lg text-gray-700 dark:text-white mb-4">
                Project Gacha is a pilot project solely build by me to test out
                my current understanding of HLS implementation and adaptive
                streaming as well as this is my first full stack application
                that i was able to deploy.
            </p>
            <p className="text-lg text-gray-700 dark:text-white mb-4">
                I know that some features may lack compared to other streaming
                social media services, but then again this is just some
                student's first full stack application (I directly went for full
                stack lol, i don't want to build some frontend project for some
                api).
                <br />
                <i>[ps: for now]</i>
            </p>
            <p className="text-lg text-gray-700 dark:text-white mb-4">
                Well I just wanted to let you know. Truth be told, this project
                is open source{" "}
                <a
                    href="https://github.com/47seconds/Gacha"
                    target="_blank"
                    className="text-blue-500 hover:text-blue-700 hover:underline"
                >
                    Gacha
                </a>{" "}
                and{" "}
                <a
                    href="https://github.com/47seconds/Gacha-api"
                    target="_blank"
                    className="text-blue-500 hover:text-blue-700 hover:underline"
                >
                    Gacha-api
                </a>{" "}
                but i don't know if I were to maintain it or develop it further.
                But for now I will try, and will update if project is not
                maintained whether due to completion or other reasons.
            </p>
        </div>
    );
}

export default AboutMe;
