"use client";  
import React from "react";

export default function Navbar() {
    return (
        <div className="h-32 flex flex-col relative justify-center text-center bg-gradient-to-b from-rain to-rain-100 bg-opacity-80 backdrop-blur-2xl rounded-lg">
            <div className="flex relative justify-around items-center px-6">
                <div className="space-x-10  flex flex-row align-middle">
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

                <div className="flex space-x-8 pr-6">
                    {/* Instagram Icon */}
                    <a href="https://www.instagram.com/sohal_sawardekar" target="_blank" rel="noopener noreferrer">
                        <img src="/image/icons8-insta.svg" alt="Instagram" className="h-8 opacity-80 hover:opacity-100" />
                    </a>

                    {/* Twitter Icon */}
                    <a href="https://x.com/SohalSawardekar" target="_blank" rel="noopener noreferrer">
                        <img src="/image/icons8-twitter.svg" alt="Twitter" className="h-8 opacity-80 hover:opacity-100" />
                    </a>
                    
                    {/* LinkdIn */}
                    <a href="https://linkedin.com/in/sohal-sawardekar-10a484265" target="_blank" rel="noopener noreferrer">
                        <img src="/image/icons8-linkedin.svg" alt="Twitter" className="h-8 opacity-80 hover:opacity-100" />
                    </a>
                    
                    {/* github */}
                    <a href="https://github.com/SohalSawardekar" target="_blank" rel="noopener noreferrer">
                        <img src="/image/icons8-github.svg" alt="Twitter" className="h-8 opacity-80 hover:opacity-100" />
                    </a>
                </div>
            </div>
        </div>
    );
}
