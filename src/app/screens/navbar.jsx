"use client";  
import React from "react";

export default function Navbar() {
    return (
        <div className="h-32 flex relative flex-row align-middle justify-center text-center bg-gradient-to-b from-rain to-rain-100 bg-opacity-80 backdrop-blur-xl rounded-lg">
            <div className="space-x-6 py-9 flex relative flex-row align-middle">
                <button
                    className="rounded-3xl px-4 font-poppins text-lg hover:text-slate-600 hover:bg-white"
                    onClick={() => {
                        alert("Home button clicked");
                        console.log("Home button clicked");
                    }} 
                >
                    HOME
                </button>
                <button
                    className="rounded-3xl px-4 font-poppins text-lg hover:text-slate-600 hover:bg-white"
                    onClick={() => alert("About Me clicked")}
                >
                    ABOUT ME
                </button>
                <button
                    className="rounded-3xl px-4 font-poppins text-lg hover:text-slate-600 hover:bg-white"
                    onClick={() => alert("Contact clicked")}
                >
                    CONTACT
                </button>
            </div>
        </div>
    );
}
