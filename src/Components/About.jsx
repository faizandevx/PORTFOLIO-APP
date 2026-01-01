import React from "react";
import Tilt from "react-parallax-tilt";
import { FaLock, FaPenNib, FaBullhorn } from "react-icons/fa";
import { useSiteData } from "../context/SiteDataContext";

function About() {
    const { about } = useSiteData();
    const rightCards = [
        about.right.card1,
        about.right.card2,
    ];
    const iconMap = {
        pen: <FaPenNib />,
        bullhorn: <FaBullhorn />,
    };

    return (
        <section className="relative bg-white dark:bg-black text-black dark:text-white pt-20 overflow-hidden transition-colors duration-500 pb-5">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <div data-aos="fade-up" data-aos-delay="100" className="relative flex flex-col space-y-6">
                    <div className="absolute -top-10 -left-20 w-72 h-72 bg-pink-700 rounded-full blur-[150px] opacity-70"></div>
                    <Tilt  tiltMaxAngleX={10} tiltMaxAngleY={10}>
                        <div className="relative bg-gradient-to-b from-pink-700/40 to-gray-100 dark:to-black/60 border border-gray-300 dark:border-gray-700 hover:bg-pink-600/20 dark:hover:bg-pink-500/20 hover:border-pink-500 dark:hover:border-pink-400 hover:shadow-[0_0_15px_rgba(236,72,153,0.4)] transition-colors duration-300 rounded-2xl p-10 text-center shadow-lg backdrop-blur-md">
                            <h1 className="text-6xl font-extrabold mb-3">{about.left.card1.title}</h1>
                            <p className="text-2xl font-bold leading-snug">
                                {about.left.card1.description.first}<br />{about.left.card1.description.second}
                            </p>
                        </div>
                    </Tilt>
                    <Tilt  tiltMaxAngleX={10} tiltMaxAngleY={10}>
                        <div className="relative bg-gradient-to-b from-pink-700/10 to-gray-100 dark:to-black/60 border border-gray-300 dark:border-gray-700 hover:bg-pink-600/20 dark:hover:bg-pink-500/20 hover:border-pink-500 dark:hover:border-pink-400 hover:shadow-[0_0_15px_rgba(236,72,153,0.4)] transition-colors duration-300 rounded-2xl p-6 flex items-center space-x-5 shadow-lg backdrop-blur-md">
                            <div className="w-14 h-14 rounded-full border border-pink-600 flex items-center justify-center">
                                <FaLock className="text-pink-600 text-2xl" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">{about.left.card2.title}</h3>
                                <p className="text-gray-700 dark:text-gray-400 text-sm">{about.left.card2.description}</p>
                            </div>
                        </div>
                    </Tilt>
                </div>
                <div data-aos="fade-up" data-aos-delay="100" className="relative space-y-6 text-center md:text-left">
                    <div>
                        <p className="text-pink-600 font-semibold uppercase tracking-widest">
                            {about.right.caption}
                        </p>
                        <h2 className="text-4xl md:text-5xl font-extrabold leading-snug">
                            {about.right.title.first}<br />{about.right.title.second}
                        </h2>
                        <p className="text-gray-700 dark:text-gray-400 max-w-lg">
                            {about.right.description}
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-6 pt-4">
                        {rightCards.map((card, index) => (
                            <Tilt
                                key={index}
                                tiltMaxAngleX={10}
                                tiltMaxAngleY={10}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                className="flex-1">
                                <div className="bg-gray-100 dark:bg-zinc-900 border border-gray-300 dark:border-gray-700 hover:bg-pink-600/20 dark:hover:bg-pink-500/20 hover:border-pink-500 dark:hover:border-pink-400 hover:shadow-[0_0_15px_rgba(236,72,153,0.4)] transition-colors duration-300 rounded-2xl p-6">
                                    <div className="bg-pink-600 w-10 h-10 flex items-center justify-center rounded-full mb-3">
                                        {iconMap[card.icon] || null}
                                    </div>
                                    <h4 className="font-bold text-lg">{card.title}</h4>
                                    <p className="text-gray-700 dark:text-gray-400 text-sm mt-2 pb-0">
                                        {card.description}
                                    </p>
                                </div>
                            </Tilt>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
