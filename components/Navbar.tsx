"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
export default function Navbar() {
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
        <nav className="flex justify-between px-4 bg-white bg-opacity-80">
            <div className="py-2">
                <Image
                    src="/logo.png"
                    alt="Background Image"
                    width={70}
                    height={70}
                />
            </div>
            <div className="flex justify-center text-center items-center gap-x-10 py-2">
                <div className="hover:text-pink-600 hover:border-b hover:border-pink-600">
                    <h1 style={someStyle} className="text-xl"><Link href="/">Home</Link></h1>
                </div>
                <div className="hover:text-pink-600 hover:border-b hover:border-pink-600">
                    <h1 style={someStyle} className="text-xl"><Link href="/about-us">About</Link></h1>
                </div>
                <div className="hover:text-pink-600 hover:border-b hover:border-pink-600 relative">
                    <div onClick={toggleDropdown} className="flex gap-x-2 justify-center text-center items-center mx-auto cursor-pointer">
                    <h1
                        style={someStyle}
                        className="text-xl"
                    >
                        Services
                        
                    </h1>
                    <span><IoIosArrowDown /></span>
                    </div>
                    {isDropdownOpen && (
                        <div className="absolute bg-white shadow-md mt-1 w-36 rounded-lg border border-pink-600">
                            <Link href="/services-wedding" className="block py-2 px-4 hover:bg-gray-100">
                                <h1 style={someOtherStyle}>Wedding</h1>
                            </Link>
                            <hr className="border border-black"></hr>
                            <Link href="/services-corporate" className="block py-2 px-4 hover:bg-gray-100">
                                <h1 style={someOtherStyle}>Corporate</h1>
                            </Link>
                        </div>
                    )}
                </div>
                <div className="hover:text-pink-600 hover:border-b hover:border-pink-600">
                    <h1 style={someStyle} className="text-xl"><Link href="/gallery">Gallery</Link></h1>
                </div>
                <div className="text-white bg-pink-600 rounded-lg py-2 px-4">
                    <Link href="/contact-us"><h1 style={someStyle} className="text-xl">Contact Us</h1></Link>
                </div>
            </div>
        </nav>
    )
}