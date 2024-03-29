import Image from "next/image"
import Link from "next/link"
export default function Navbar() {
    const someStyle = {
    fontFamily: 'Playfair Display, serif',
    };
    const someOtherStyle = {
    fontFamily : 'Open Sans, sans-serif',
    }
    return (
        <div className="flex bg-white px-10 py-4 justify-between mx-auto">
            <div>
                <Image 
                src="/logo.png"
                alt="Example Image"
                width={90}
                height={90}
                />
            </div>
            <div className="flex justify-center text-center items-center gap-6">
                <div>
                    <Link href="/" className="justify-center items-center text-center">
                        Home
                    </Link>
                </div>
                <div>
                    <Link href="/" className="justify-center items-center text-center">
                        About
                    </Link>
                </div>
                <div>
                    <Link href="/" className="justify-center items-center text-center">
                        Services
                    </Link>
                </div>
                <div>
                    <Link href="/" className="justify-center items-center text-center">
                        Gallery
                    </Link>
                </div>
            </div>
        </div>
    )
}