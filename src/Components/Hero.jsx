import React from "react";
import { ReactTyped } from "react-typed";
import { useSiteData } from "../context/SiteDataContext";
import Dither from "./Dither";


function Hero() {
  const { hero } = useSiteData();

  return (
    <section
      className="relative z-30 bg-white dark:bg-black text-black dark:text-white overflow-hidden">
      <div className="-z-10" style={{ width: '100%', height: '600px', position: 'absolute' }}>

        <Dither
          waveColor={[0.5, 0.5, 0.5]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}/>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="relative container mx-auto px-6 py-28 md:py-40 flex flex-col items-start justify-center">
        <p className="text-gray-300 dark:text-gray-200 font-extrabold uppercase text-md">
          {hero.greetings}
        </p>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          <span className="text-gray-400 dark:text-white">{hero.name}</span>
        </h1>
        <h2 className="text-4xl md:text-5xl font-extrabold text-pink-600 dark:text-pink-600">
          <ReactTyped
            strings={hero.typed}
            typeSpeed={70}
            backSpeed={40}
            backDelay={1500}
            loop/>
        </h2>
        <p className="text-white dark:text-white text-md md:text-lg max-w-xl leading-relaxed mt-4">
          {hero.description}
        </p>
        <a href="https://github.com/Ubaidullah-Web-Dev" target="_blank" rel="noopener noreferrer">
        <button className="relative mt-8 bg-pink-600 dark:bg-pink-500 text-white font-semibold px-6 py-3 rounded-full overflow-hidden group transition-all duration-300 hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] dark:hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]">
          <span className="absolute inset-0 bg-pink-700/80 scale-0 rounded-full opacity-0 group-hover:opacity-100 transition-transform duration-700 ease-out origin-center group-hover:scale-150"></span>
          <span className="absolute inset-0 rounded-full border border-pink-400/40 opacity-0 group-hover:animate-ping"></span>
          <span className="relative z-10 font-semibold tracking-wide group-hover:scale-105 transition-transform duration-300">
            {hero.button}
          </span>
        </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
