import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <motion.div
            className="fixed left-0 top-0 w-2 h-full origin-top z-50 rounded-full"
            style={{
                scaleY,
                background:
                    "linear-gradient(180deg, #ff0040, #ff9900, #ffee00, #33ff00, #00ffee, #0066ff, #cc00ff)",
                backgroundSize: "100% 300%",
                animation: "rainbowScroll 6s linear infinite",
                boxShadow: "0 0 12px rgba(255,255,255,0.8)",
            }}
        />
    );
}

export default ScrollProgress;
