import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaWhatsapp,
  FaLinkedinIn,
  FaLinkedin,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useSiteData } from "../context/SiteDataContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { navbar } = useSiteData();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-screen z-50 transition-all duration-500 ${isScrolled
        ? "backdrop-blur-lg bg-white/80 dark:bg-black/60 shadow-lg"
        : "backdrop-blur-md bg-white/70 dark:bg-transparent"}`}>
      <div className="max-w-7xl mx-auto w-full overflow-hidden flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-3 shrink-0">
          <Link to="/" className="flex group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 250 60"
              className="w-40 sm:w-48 md:w-56 h-auto transition-all duration-500 group-hover:scale-110">
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%">
                    <animate
                      attributeName="stop-color"
                      values="#ff00e6; #b300ff; #ff00e6"
                      dur="4s"
                      repeatCount="indefinite" />
                  </stop>
                  <stop offset="100%">
                    <animate
                      attributeName="stop-color"
                      values="#b300ff; #ff008c; #b300ff"
                      dur="4s"
                      repeatCount="indefinite" />
                  </stop>
                </linearGradient>
              </defs>
              <text
                x="10"
                y="40"
                fontFamily="monospace"
                fontSize="28"
                fill="url(#grad)"
                fontWeight="bold"
                className="transition-all duration-500 group-hover:drop-shadow-[0_0_8px_#ff00e6">
                {"</>"}
              </text>
              <text
                x="70"
                y="40"
                fontFamily="Verdana, sans-serif"
                fontSize="32"
                fill="url(#grad)"
                fontWeight="bold"
                className="transition-all duration-500 group-hover:drop-shadow-[0_0_12px_#ff00e6]">
                {navbar.left}
              </text>
            </svg>
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-6 shrink">
          <Link
            to="/"
            className={`text-md font-bold px-4 py-1 rounded-lg border border-pink-700 transition-all duration-300 whitespace-nowrap ${location.pathname === "/"
              ? "bg-pink-600/40 text-black dark:text-white shadow-[0_0_10px_#ff008c]"
              : "text-black dark:text-white hover:bg-pink-600/40 hover:shadow-[0_0_10px_#ff008c]"}`}>
            {navbar.middle.first}
          </Link>
          <Link
            to="/project"
            className={`text-md font-bold px-4 py-1 rounded-lg border border-pink-700 transition-all duration-300 whitespace-nowrap ${location.pathname === "/project"
              ? "bg-pink-600/40 text-black dark:text-white shadow-[0_0_10px_#ff008c]"
              : "text-black dark:text-white hover:bg-pink-600/40 hover:shadow-[0_0_10px_#ff008c]"}`}>
            {navbar.middle.second}
          </Link>
          <Link
            to="/contact"
            className={`text-md font-bold px-4 py-1 rounded-lg border border-pink-700 transition-all duration-300 whitespace-nowrap ${location.pathname === "/contact"
              ? "bg-pink-600/40 text-black dark:text-white shadow-[0_0_10px_#ff008c]"
              : "text-black dark:text-white hover:bg-pink-600/40 hover:shadow-[0_0_10px_#ff008c]"}`}>
            {navbar.middle.third}
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-3 shrink-0">
          <ThemeToggle />
          <a
            href="https://github.com/Ubaidullah-Web-Dev?tab=repositories"
            className="relative p-2 flex items-center justify-center overflow-hidden bg-gray-200 dark:bg-gray-800 rounded-full group">
            <span className="absolute inset-0 rounded-full bg-pink-600 scale-0 transition-transform duration-500 ease-out origin-center group-hover:scale-100"></span>
            <FaGithub className="relative text-gray-700 dark:text-gray-400 text-lg transition-all duration-300 group-hover:text-white group-hover:scale-125" />
          </a>
          <a
            href="https://www.linkedin.com/in/ubaidullah-sajid-21792a383/"
            className="relative p-2 flex items-center justify-center overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800 group">
            <span className="absolute inset-0 rounded-full bg-pink-600 scale-0 transition-transform duration-500 ease-out origin-center group-hover:scale-100"></span>
            <FaLinkedinIn className="relative text-gray-700 dark:text-gray-400 text-lg transition-all duration-300 group-hover:text-white group-hover:scale-125" />
          </a>

          <a
            href="https://wa.me/923287231804"
            className="relative p-2 flex items-center justify-center rounded-full overflow-rounded-full bg-gray-200 dark:bg-gray-800 group">
            <span className="absolute inset-0 bg-pink-600 scale-0 transition-transform duration-500 ease-out origin-center group-hover:scale-100 rounded-full"></span>
            <FaWhatsapp className="relative text-gray-700 dark:text-gray-400 text-lg transition-all duration-300 group-hover:text-white group-hover:scale-125" />
          </a>
        </div>
        <div className="md:hidden flex items-center space-x-3">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)} className="text-2xl focus:outline-none text-black dark:text-white">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      <div
        className={`md:hidden absolute inset-x-0 top-full bg-white/90 dark:bg-zinc-900/80 backdrop-blur-lg flex flex-col items-center space-y-4 py-6 transition-all duration-500 ${isOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-5 pointer-events-none"}`}>
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="text-black dark:text-white text-lg font-medium hover:text-pink-500 transition-all duration-300">
          {navbar.middle.first}
        </Link>
        {/* <Link
          to="/pricing"
          onClick={() => setIsOpen(false)}
          className="text-black dark:text-white text-lg font-medium hover:text-pink-500 transition-all duration-300">
          {navbar.middle.second}
        </Link> */}
        <Link
          to="/contact"
          onClick={() => setIsOpen(false)}
          className="text-black dark:text-white text-lg font-medium hover:text-pink-500 transition-all duration-300">
          {navbar.middle.third}
        </Link>
        <div className="flex flex-wrap justify-center space-x-4 pt-3">
          <a
            href="https://github.com/Ubaidullah-Web-Dev?tab=repositories"
            className="bg-gray-200 dark:bg-gray-800 hover:bg-pink-600 p-2 rounded-full">
            <FaGithub className="text-black dark:text-white transition-all duration-300 hover:scale-125" />
          </a>
          <a
            href="https://www.linkedin.com/in/ubaidullah-sajid-21792a383/"
            className="bg-gray-200 dark:bg-gray-800 hover:bg-pink-600 p-2 rounded-full">
            <FaLinkedin className="text-black dark:text-white transition-all duration-300 hover:scale-125" />
          </a>
          <a
            href="https://wa.me/923287231804"
            className="bg-gray-200 dark:bg-gray-800 hover:bg-pink-600 p-2 rounded-full">
            <FaWhatsapp className="text-black dark:text-white transition-all duration-300 hover:scale-125" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
