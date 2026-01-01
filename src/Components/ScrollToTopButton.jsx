import React, { useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTopButton() {
    const { scrollYProgress } = useScroll();

    // Smooth progress animation
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    // Create the "wave fill" effect for the button background
    const clipPath = useTransform(
        smoothProgress,
        [0, 1],
        ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]
    );

    // Handle click to scroll to top
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Show button only when scrolled down
    const [isVisible, setIsVisible] = React.useState(false);
    useEffect(() => {
        const onScroll = () => {
            setIsVisible(window.scrollY > 300);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <motion.button
            onClick={handleClick}
            className={`fixed bottom-8 right-8 w-14 h-14 rounded-full bg-gray-800 text-white flex items-center justify-center shadow-lg border-2 border-pink-500 overflow-hidden transition-all duration-300 z-50 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
                }`}absolute inset-0 rounded-full bg-pink-600 scale-0 transition-transform 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            {/* Liquid fill wave */}
            <motion.div
                className="absolute inset-0 bg-pink-600"
                style={{ clipPath }}
            />
            <FaArrowUp className="relative z-10 text-lg" />
        </motion.button>
    );
}

export default ScrollToTopButton;
