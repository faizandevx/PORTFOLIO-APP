import React from "react";

export default function PageLoader() {
    return (
        <div className="h-screen flex items-center justify-center overflow-hidden relative bg-darkBg">
            <div className="absolute h-[60vw] bg-gradient-to-r from-neonPurple via-neonPink to-neonPurple opacity-30 blur-3xl animate-glowPulse"></div>
            <div className="flex gap-2 relative z-10">
                {[1, 2, 3, 4, 5].map((line) => (
                    <div
                        key={line}
                        className="w-2 h-16 bg-neonPurple rounded-md animate-lineMove shadow-[0_0_15px_#b27bff]"
                        style={{ animationDelay: `${line * 0.15}s` }}
                    ></div>
                ))}
            </div>
        </div>
    );
}
