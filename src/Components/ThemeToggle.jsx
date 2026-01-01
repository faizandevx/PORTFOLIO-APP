import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full transition-all duration-300 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-yellow-400 hover:scale-110"
        >
            {darkMode ? <FaSun /> : <FaMoon />}
        </button>
    );
}

export default ThemeToggle;
