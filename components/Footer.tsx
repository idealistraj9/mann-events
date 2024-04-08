"use client"
import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { SlSocialFacebook } from "react-icons/sl";
import { ImPinterest2 } from "react-icons/im";
import { useState } from "react";
import Link from "next/link";
export default function Footer() {
    const someStyle = {
    fontFamily: 'Playfair Display, serif',
    };
    const someOtherStyle = {
    fontFamily : 'Open Sans, sans-serif',
    }
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return (
        <div className="flex flex-col gap-y-20 justify-center items-center text-center py-10 relative z-10">
            <div className="flex flex-col gap-y-6">
                <div className="flex">
                    <div className="mr-36">
                        <h1 style={someStyle} className="text-4xl text-pink-600">Your vision.</h1>
                    </div>
                </div>
                <div className="ml-36">
                    <div>
                        <h1 style={someStyle} className="text-4xl text-pink-600">Our execution.</h1>
                    </div>
                </div>
            </div>
            <div className="flex w-11/12 bg-pink-600 px-12 py-16 rounded-lg">
                <div className="flex flex-col w-3/5 gap-y-12 justify-start items-left text-left">
                    <h1 style={someStyle} className="text-white text-4xl text-bold">Let us bring your event to life</h1>
                    <h1 style={someStyle} className="text-white text-2xl">Our skilled event planners are dedicated to creating unforgettable experiences for you</h1>
                </div>
                <div className="w-2/5 flex justify-center items-center text-center">
                    <button style={someStyle} className="bg-white px-12 py-4 text-pink-600 text-bold text-2xl rounded-lg">Get Started Today</button>
                </div>
            </div>
            <div className="flex justify-center text-center items-center gap-10">
                <div className="w-2/5 flex flex-col justify-center items-center text-center gap-y-6">
                    <Image
                        src="/navbar_img.png"
                        alt="Example Image"
                        width={130}
                        height={130}
                    />
                    <h1 className="px-14">We're expert event planners, fusing art, vision, and perfection to craft satisfying experiences tailored to your needs.</h1>
                </div>
                <div className="flex h-full w-1/5">
                    <div className="flex flex-col gap-y-6 w-11/12 py-2">
                        <Link href="/about-us"><h1 style={someStyle} className="text-2xl">About</h1></Link>
                        <div className="relative">
                            <div onClick={toggleDropdown} className="flex gap-x-2 justify-center text-center items-center mx-auto cursor-pointer">
                            <h1
                                style={someStyle}
                                className="text-2xl"
                            >
                                Services
                                
                            </h1>
                            </div>
                            {isDropdownOpen && (
                                <div className="absolute bg-white shadow-md mt-1 w-36 rounded-lg border border-pink-600 hover:text-black">
                                    <Link href="/services-wedding" className="block py-2 px-4 hover:bg-gray-100">
                                        <h1 style={someOtherStyle}>Wedding</h1>
                                    </Link>
                                    <hr className="border border-pink-600"></hr>
                                    <Link href="/services-corporate" className="block py-2 px-4 hover:bg-gray-100">
                                        <h1 style={someOtherStyle}>Corporate</h1>
                                    </Link>
                                </div>
                            )}
                        </div>
                        <Link href="/contact-us"><h1 style={someStyle} className="text-2xl">Contact</h1></Link>
                        <Link href="/"><h1 style={someStyle} className="text-2xl">Career</h1></Link>
                    </div>
                    <div className="flex items-center w-1/11" style={{backgroundColor : "#fb7185"}}>
                        <h1 style={{color : "#fb7185"}}>.</h1>
                    </div>
                </div>
                <div className="w-2/5 flex flex-col gap-y-6">
                    <div className="flex flex-col gap-y-6 justify-center text-center items-center">
                        <h1 style={someStyle} className="text-2xl">Email Us</h1>
                        <h1 style={someOtherStyle} className="text-xlw-3/5">mannevents@gmail.com</h1>
                    </div>
                    <div className="flex flex-col gap-y-6 justify-center text-center items-center">
                        <h1 style={someStyle} className="text-2xl">Office Address</h1>
                        <h1 style={someOtherStyle} className="text-md w-3/5 justify-center text-center items-center">202, Status Complex, Opp. Amrapali Complex, Jay Santhoshi Nagar, Karelibagh, Vadodara, Gujarat 390018</h1>
                    </div>
                </div>
            </div>
            <div className="flex gap-10">
                <div>
                <Link href="/">
                    <span className="text-4xl"><FaInstagram /></span>
                </Link>
                </div>
                <div>
                <Link href="/">
                    <span className="text-4xl"><RiTwitterXLine /></span>
                </Link>
                </div>
                <div>
                <Link href="/">
                    <span className="text-4xl"><SlSocialFacebook /></span>
                </Link>
                </div>
                <div>
                <Link href="/">
                    <span className="text-4xl"><ImPinterest2 /></span>
                </Link>
                </div>
            </div>
            <div>
                <h1 style={someOtherStyle} className="text-xl">Copyright 2024 <span>&copy;</span> Mann Events Pvt. Ltd.</h1>
            </div>
        </div>
    )
}