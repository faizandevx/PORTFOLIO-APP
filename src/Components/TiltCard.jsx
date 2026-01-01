import React from "react";
import Tilt from "react-parallax-tilt";

function TiltCard({ index, title, description, caption, time }) {
    return (
        <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            className="rounded-2xl">
            <div className="bg-gray-100 dark:bg-zinc-900 border border-gray-300 dark:border-gray-700 
                hover:bg-pink-600/20 dark:hover:bg-pink-500/20 hover:border-pink-500 dark:hover:border-pink-400 
                hover:shadow-[0_0_15px_rgba(236,72,153,0.4)] transition-all duration-500 rounded-2xl p-6 shadow-md backdrop-blur-md">
                {caption && (
                    <p className="text-pink-600 uppercase font-semibold text-sm mb-1">
                        {caption}
                    </p>)}
                <h3 className="font-bold text-lg mb-2">
                    <span className="text-pink-600 mr-2">
                        {String(index + 1)}.
                    </span>
                    {title}
                </h3>
                {time && (
                    <p className="text-gray-600 dark:text-gray-300 text-sm font-semibold mb-2">
                        {time}
                    </p>
                )}
                <p className="text-gray-700 dark:text-gray-400 text-sm leading-relaxed">
                    {description}
                </p>
            </div>
        </Tilt>
    );
}

export default TiltCard;
