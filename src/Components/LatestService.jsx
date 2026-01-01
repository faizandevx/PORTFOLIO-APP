import React from "react";
import Tilt from "react-parallax-tilt";
import { useSiteData } from "../context/SiteDataContext";
import GenericCards from "./GenericCards";

function LatestService() {
    const siteData = useSiteData();

    return (
        <section className="relative bg-white dark:bg-black text-black dark:text-white pt-20 pb-20 overflow-hidden transition-colors duration-500">
            <div className="container mx-auto px-6">
                <div
                    data-aos="fade-right"
                    data-aos-delay="100"
                    className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-pink-600 uppercase font-semibold tracking-widest text-sm mb-3">{siteData.service.caption}
                    </p>
                    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                        {siteData.service.title.first}
                        <br />
                        {siteData.service.title.second}
                    </h2>
                    <p className="text-gray-700 dark:text-gray-400">
                        {siteData.service.description}
                    </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div data-aos="fade-up" data-aos-delay="100" className="space-y-6">
                        <GenericCards data={siteData.service.left} />
                    </div>
                    <Tilt
                        scale={1.05}
                        transitionSpeed={2500}
                        tiltMaxAngleX={10}
                        tiltMaxAngleY={10}
                        className="relative flex justify-center items-center">
                        <div data-aos="fade-up" data-aos-delay="100" className="relative">
                            <div className="absolute -inset-10 bg-pink-600/30 blur-[100px] rounded-full opacity-60"></div>
                            <img
                                src="/upscalar.jpg"
                                alt="Front-End Developer"
                                className="relative z-10 w-64 md:w-80 lg:w-96 object-contain hover:scale-105 transition-transform duration-700 ease-out rounded-full"/>
                        </div>
                    </Tilt>
                </div>
            </div>
        </section>
    );
}

export default LatestService;
