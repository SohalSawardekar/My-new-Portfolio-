"use client";
import React, { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleDropdownToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleCloseDropdown = () => {
        setIsOpen(false);
    };

    return (
        <div className="relative">
            {/* Main Navbar */}
            <div className="h-32 flex flex-col relative justify-center text-center bg-gradient-to-b from-rain to-rain-100 bg-opacity-80 backdrop-blur-2xl rounded-lg z-10">
                {/* Dropdown button for small screens */}
                <div className="lg:hidden flex justify-between items-center px-6">
                    <button
                        className="rounded-3xl px-4 py-3 font-poppins text-lg hover:text-slate-600 hover:bg-white"
                        onClick={handleDropdownToggle}
                    >
                        MENU
                    </button>
                    <div className="flex flex-row space-x-8 pr-6">
                        {/* Social Icons */}
                        <a href="https://www.instagram.com/sohal_sawardekar" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/icons8-insta.svg" alt="Instagram" className="h-8 opacity-80 hover:opacity-100" />
                        </a>
                        <a href="https://x.com/SohalSawardekar" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/icons8-twitter.svg" alt="Twitter" className="h-8 opacity-80 hover:opacity-100" />
                        </a>
                        <a href="https://linkedin.com/in/sohal-sawardekar-10a484265" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/icons8-linkedin.svg" alt="LinkedIn" className="h-8 opacity-80 hover:opacity-100" />
                        </a>
                        <a href="https://github.com/SohalSawardekar" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/icons8-github.svg" alt="GitHub" className="h-8 opacity-80 hover:opacity-100" />
                        </a>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex lg:justify-around lg:items-center lg:px-6 lg:relative lg:top-0 lg:left-0">
                    <div className="flex flex-col lg:flex-row lg:space-x-10 align-middle">
                        <button
                            className="rounded-3xl px-4 py-3 font-poppins text-lg hover:text-slate-600 hover:bg-white"
                            onClick={() => {
                                alert("Home button clicked");
                                console.log("Home button clicked");
                            }}
                        >
                            HOME
                        </button>
                        <button
                            className="rounded-3xl px-4 py-3 font-poppins text-lg hover:text-slate-600 hover:bg-white"
                            onClick={() => alert("About Me clicked")}
                        >
                            ABOUT ME
                        </button>
                        <button
                            className="rounded-3xl px-4 py-3 font-poppins text-lg hover:text-slate-600 hover:bg-white"
                            onClick={() => alert("Contact clicked")}
                        >
                            CONTACT
                        </button>
                    </div>

                    <div className="flex flex-row space-x-8">
                        {/* Social Icons */}
                        <a href="https://www.instagram.com/sohal_sawardekar" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/icons8-insta.svg" alt="Instagram" className="h-8 opacity-80 hover:opacity-100" />
                        </a>
                        <a href="https://x.com/SohalSawardekar" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/icons8-twitter.svg" alt="Twitter" className="h-8 opacity-80 hover:opacity-100" />
                        </a>
                        <a href="https://linkedin.com/in/sohal-sawardekar-10a484265" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/icons8-linkedin.svg" alt="LinkedIn" className="h-8 opacity-80 hover:opacity-100" />
                        </a>
                        <a href="https://github.com/SohalSawardekar" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/icons8-github.svg" alt="GitHub" className="h-8 opacity-80 hover:opacity-100" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="fixed inset-0 z-40 flex items-start justify-center backdrop-blur-lg">
                    <div className="absolute inset-0 bg-black opacity-30"></div>
                    <div className="relative w-full max-w-md bg-gradient-to-b from-rain to-rain-100 bg-opacity-80 backdrop-blur-xl rounded-lg p-4">
                        <button
                            className="absolute top-4 left-4 p-2 bg-white text-black rounded-full shadow-md hover:bg-gray-200"
                            onClick={handleCloseDropdown}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                            </svg>
                        </button>
                        <div className="flex flex-col items-center space-y-4 py-8">
                            <button
                                className="rounded-3xl px-4 py-3 font-poppins text-lg hover:text-slate-600 hover:bg-white w-full text-center"
                                onClick={() => {
                                    alert("Home button clicked");
                                    console.log("Home button clicked");
                                    handleCloseDropdown();
                                }}
                            >
                                HOME
                            </button>
                            <button
                                className="rounded-3xl px-4 py-3 font-poppins text-lg hover:text-slate-600 hover:bg-white w-full text-center"
                                onClick={() => {
                                    alert("About Me clicked");
                                    handleCloseDropdown();
                                }}
                            >
                                ABOUT ME
                            </button>
                            <button
                                className="rounded-3xl px-4 py-3 font-poppins text-lg hover:text-slate-600 hover:bg-white w-full text-center"
                                onClick={() => {
                                    alert("Contact clicked");
                                    handleCloseDropdown();
                                }}
                            >
                                CONTACT
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
