import React from "react";
import Tilt from "react-parallax-tilt";
import { useSiteData } from "../context/SiteDataContext";

function LatestPortfolio() {
    const { portfolio } = useSiteData();

    return (
        <section className="bg-white dark:bg-black text-black dark:text-white pb-20 md:py-28 transition-colors duration-500">
            <div className="container mx-auto px-6 text-center">
                <p
                    data-aos="fade-left"
                    data-aos-delay="100"
                    className="text-pink-600 uppercase font-semibold tracking-widest text-sm mb-2">{portfolio.caption}</p>
                <h2
                    data-aos="fade-left"
                    data-aos-delay="200"
                    className="text-3xl md:text-5xl font-extrabold mb-4">{portfolio.title}</h2>
                <p
                    data-aos="fade-left"
                    data-aos-delay="300"
                    className="text-gray-700 dark:text-gray-400 max-w-2xl mx-auto mb-10 text-sm md:text-base">{portfolio.description}</p>
                <div
                    data-aos="fade-up"
                    data-aos-delay="500"
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {portfolio.projects?.map((item, i) => (
                        <Tilt
                            key={i}
                            glareEnable={true}
                            glareMaxOpacity={0.4}
                            glareColor="#ec4899"
                            tiltMaxAngleX={10}
                            tiltMaxAngleY={10}
                            className="rounded-2xl bg-gradient-to-b from-gray-100 dark:from-zinc-900 to-white dark:to-black border border-pink-700 p-4 hover:shadow-[0_0_30px_rgba(236,72,153,0.4)] transition-all duration-500">
                            <div className="relative group overflow-hidden rounded-2xl bg-white dark:bg-zinc-900">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-max object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-pink-600/90 via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                                    <p className="text-gray-200 text-sm">{item.category}</p>
                                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                </div>
                            </div>
                        </Tilt>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default LatestPortfolio;