import React, { useState } from "react";
import { Link } from "react-router-dom";
import HamburgerIcon from "../assets/hamburger.svg";
import CloseIcon from "../assets/close.svg";
import { ReactComponent as SunIcon } from "../assets/sun.svg"; // Import Sun SVG
import { ReactComponent as MoonIcon } from "../assets/moon.svg"; // Import Moon SVG

const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false); // State to manage dark mode

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className={`flex h-screen ${darkMode ? "bg-gray-900" : "bg-gray-100"}`}>
      {/* Hamburger Menu Button for Small Screens */}
      <div className="md:hidden p-4">
        <button
          onClick={toggleMenu}
          className="text-gray-600 focus:outline-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded p-1"
        >
          {isMenuOpen ? (
            <img src={CloseIcon} alt="Close menu" className="h-6 w-6" />
          ) : (
            <img src={HamburgerIcon} alt="Open menu" className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:block fixed md:relative w-64 ${darkMode ? "bg-gray-800" : "bg-white"} shadow-lg p-4 transition-transform duration-300 ease-in-out h-full z-20`}
      >
        <nav className="space-y-4">
          <Link
            to="/dashboard"
            className={`block text-lg font-semibold ${
              darkMode ? "text-gray-300" : "text-gray-700"
            } hover:text-blue-500 p-2 rounded transition-colors duration-200`}
            onClick={handleLinkClick}
          >
            Dashboard
          </Link>
          <Link
            to="/profile"
            className={`block text-lg font-semibold ${
              darkMode ? "text-gray-300" : "text-gray-700"
            } hover:text-blue-500 p-2 rounded transition-colors duration-200`}
            onClick={handleLinkClick}
          >
            Profile
          </Link>
          <Link
            to="/settings"
            className={`block text-lg font-semibold ${
              darkMode ? "text-gray-300" : "text-gray-700"
            } hover:text-blue-500 p-2 rounded transition-colors duration-200`}
            onClick={handleLinkClick}
          >
            Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main
        className={`flex-1 p-6 transition-all duration-300 ease-in-out ${
          isMenuOpen ? "ml-64" : ""
        }`}
      >
        {/* Top Bar */}
        <header className={`flex justify-between items-center mb-4 ${darkMode ? "bg-gray-800" : "bg-white"} shadow-md p-4`}>
          <h1 className={`text-2xl md:text-3xl font-bold ${darkMode ? "text-gray-100" : "text-gray-900"}`}>
            Dashboard
          </h1>
          <div className="flex items-center space-x-4">
            <button onClick={toggleDarkMode} className="p-2">
              {darkMode ? (
                <SunIcon className="h-6 w-6 text-yellow-500" />
              ) : (
                <MoonIcon className="h-6 w-6 text-gray-800 dark:text-gray-200" />
              )}
            </button>
            <button className="px-2 py-1 text-sm md:text-base text-white bg-blue-500 rounded-lg">
              Logout
            </button>
          </div>
        </header>

        {/* Main Content */}
        <section className="mt-4">
          <p
            className={`text-sm md:text-base ${darkMode ? "text-white" : "text-black"}`}
          >
            Welcome to your dashboard!
          </p>
        </section>
      </main>

      {/* Overlay for Hamburger Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 cursor-pointer"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
};

export default Dashboard;
