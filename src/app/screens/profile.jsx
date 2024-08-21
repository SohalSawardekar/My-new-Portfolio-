"use client";
import React from "react";
import Image from 'next/image';
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import profile_photo from "../../../public/image/profile_photo.jpg";

export default function Profile() {
    return (
        <div className="font-poppins text-white">
            <div className="flex flex-col lg:flex-row items-center justify-center lg:h-[40rem] h-auto px-4">
                <div className="bg-transparent w-full lg:w-1/2 h-full text-center flex items-center justify-center lg:justify-end mb-8 lg:mb-0">
                    <div className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl lg:leading-normal font-bold">
                        <h1 className="xl:pb-8 sm:p-2">Hello, I'm</h1> 
                        <h1 className="p-5 xl:pb-10">SOHAL SAWARDEKAR</h1> 
                        <TypeAnimation
                            sequence={[
                                "Backend Developer",
                                1000,
                                "Web Developer",
                                1000,
                                "Android Developer",
                                1000,
                                "UI/UX Designer",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="text-transparent bg-clip-text bg-gradient-to-br from-rain via-[#4098c8] to-[#8ab7ce] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl"
                        />
                    </div>
                </div>
                {/* Image Section */}
                <div className="bg-transparent w-full lg:w-1/2 h-full text-center flex items-center justify-center">
                    <Image 
                        src={profile_photo} 
                        alt="profile_photo" 
                        className="rounded-full shadow-lg border-8 border-sky-200 border-double w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]"
                    />
                </div>
            </div>
            <br />
            {/* Download CV Button */}
            <div className="flex items-center justify-center">
                <Link
                    href="https://drive.google.com/file/d/1y9f2zSXRBNXiawrCNLI9IwgBuQEVWKop/view?usp=drive_link"
                    className="px-1 py-1 w-auto text-center rounded-full bg-gradient-to-br from-[#346882] via-[#4098c8] to-[#8ab7ce] hover:bg-slate-800 text-white mt-3"
                    target="_blank"
                >
                    <span className="block bg-[#11222d] hover:bg-white hover:text-[#11222d] rounded-full px-5 py-2 font-poppins ">
                        Download CV
                    </span>
                </Link>
            </div>
        </div>
    );
}
