import Tilt from "react-parallax-tilt";
import { useSiteData } from "../context/SiteDataContext";
import GenericCards from "./GenericCards";

function EducationExperience() {
    const siteData = useSiteData();

    return (
        <section className="bg-white dark:bg-black text-black dark:text-white py-20 md:py-28 overflow-hidden transition-colors duration-500">
            <div className="container mx-auto px-6">
                <div data-aos="fade-left" data-aos-delay="100" className="text-center mb-16">
                    <p className="text-pink-600 uppercase font-semibold tracking-widest text-sm mb-2">
                        {siteData.eduandexp.caption}
                    </p>
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
                        {siteData.eduandexp.title}
                    </h2>
                    <p className="text-gray-700 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
                        {siteData.eduandexp.description}
                    </p>
                </div>
                <div data-aos="fade-right" data-aos-delay="150" className="mb-6 flex items-center gap-2">
                    <h3 className="text-xl font-bold">Education</h3>
                    <div className="h-px w-12 bg-gray-400 dark:bg-gray-600"></div>
                </div>
                <div className="grid md:grid-cols-1 gap-6 mb-20">
                    <GenericCards data={siteData.eduandexp.education} />
                </div>
                <div data-aos="fade-up" data-aos-delay="150" className="mb-6 mt-16 flex items-center gap-2">
                    <h3 className="text-xl font-bold">Experience</h3>
                    <div className="h-px w-12 bg-gray-400 dark:bg-gray-600"></div>
                </div>
                <div className="grid md:grid-cols-2 gap-10 items-start mb-20">
                    <div>
                        <GenericCards data={siteData.eduandexp.experience} />
                    </div>
                    <div
                        data-aos="fade-up"
                        data-aos-delay="300"
                        className="relative h-full min-h-[400px] flex justify-center items-center">
                        <Tilt
                            tiltMaxAngleX={10}
                            tiltMaxAngleY={10}
                            glareEnable={true}
                            glareMaxOpacity={0.25}
                            glareColor="#ec4899"
                            transitionSpeed={1500}
                            className="rounded-3xl overflow-hidden shadow-2xl border border-gray-300 dark:border-gray-700 hover:border-pink-600 duration-500">
                            <div className="relative">
                                <img
                                    src="expert-img.jpg"
                                    alt="Frontend Developer at work"
                                    className="relative w-full h-full object-cover rounded-3xl scale-100 hover:scale-[1.02] transition-transform duration-700 ease-out" />
                                <div className="absolute inset-0 bg-black/30"></div>
                            </div>
                        </Tilt>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EducationExperience;
