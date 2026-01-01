/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			keyframes: {
				lineMove: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				glowPulse: {
					'0%, 100%': { opacity: 0.6, filter: 'blur(4px)' },
					'50%': { opacity: 1, filter: 'blur(12px)' },
				},
			},
			animation: {
				lineMove: 'lineMove 0.8s ease-in-out infinite',
				glowPulse: 'glowPulse 1.2s ease-in-out infinite',
			},
			colors: {
				neonPurple: '#b27bff',
				neonPink: '#ff36aa',
				darkBg: '#05060e',
			},
		},
	},
	plugins: [],
};
