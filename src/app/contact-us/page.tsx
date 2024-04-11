import Footer from "../../../components/Footer";
import Image from "next/image";
import Navbar from "../../../components/Navbar";
import { Style_Script } from "next/font/google";
const stylescript=Style_Script({
  weight : "400",
  subsets : ["latin"]
})
export default function AboutUs() {
    const someStyle = {
        fontFamily: 'Playfair Display, serif',
      };
      const someOtherStyle = {
        fontFamily : 'Open Sans, sans-serif',
      }
    return (
        <div className="flex flex-col justify-center items-center text-center">
          <div className="flex flex-col absolute top-0 left-0 right-0 z-10">
          <Navbar />
          <h1 className={`${stylescript.className} text-white text-6xl mt-20`}>Excited to Make Your Event Dreams a Reality</h1>
      </div>
      <div className="relative min-h-screen">
            <div>
            <Image
                src="/contact.jpg"
                alt="Example Image"
                className="w-full"
                layout="responsive"
                width={1000}
                height={1000}
                style={{ width: '100%', height: '100%' }}
            />
            </div>
      </div>
      <div className="relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <div className="absolute inset-0 bg-white opacity-75"></div>
      </div>
      <div className="flex flex-col justify-center items-center text-center relative z-10">
        <div className="flex flex-col justify-center items-center text-center w-4/5 mx-auto gap-y-6 py-10">
          <h1 className="text-pink-600 text-4xl font-bold" style={someOtherStyle}>Get in Touch</h1>
          <h1 className="text-3xl font-extrabold mb-5 mt-5" style={someStyle}>Embark on Your Journey to an Unforgettable Event. Let Our Specialists Guide You Every Step of the Way</h1>
        </div>
      </div>
      <div className="flex flex-col mb-10 py-10 gap-y-6 text-center justify-center items-center mx-auto relative z-10">
        <div>   
            <h1 style={someStyle} className="text-2xl">Media Inquiries</h1>
        </div>
        <div className="flex gap-x-8">
            <div className="w-1/2">
            <input type="text" className="py-2 px-2 border-b border-pink-600 bg-transparent text-black placeholder-black" placeholder="First Name" />
            </div>
            <div className="w-1/2">
            <input type="text" className="py-2 px-2 border-b border-pink-600 bg-transparent text-black placeholder-black" placeholder="Last Name" />
            </div>
        </div>
        <div className="flex gap-x-8">
            <div className="w-1/2">
            <input type="text" className="py-2 px-2 border-b border-pink-600 bg-transparent text-black placeholder-black" placeholder="Email" />
            </div>
            <div className="w-1/2">
            <input type="text" className="py-2 px-2 border-b border-pink-600 bg-transparent text-black placeholder-black" placeholder="Phone" />
            </div>
        </div>
        <div className="w-full">
            <input type="text" className="py-2 px-2 border-b border-pink-600 bg-transparent text-black placeholder-black" placeholder="Message" />
            </div>
        <div>
            <button style={someStyle} className="border border-pink-600 py-2 px-16 rounded-lg font-bold  text-xl text-pink-600 hover:bg-pink-600 hover:text-white">Submit</button>
        </div>
      </div>
      <div className="px-6 flex relative z-10">
        <div className="w-1/2 flex flex-col gap-y-6 py-10">
            <div className="flex flex-col gap-y-2 justify-center text-center items-center">
                <h1 style={someStyle} className="text-2xl">Office Address</h1>
                <h1 style={someOtherStyle} className="text-md w-3/5 justify-center text-center items-center">202, Status Complex, Opp. Amrapali Complex, Jay Santhoshi Nagar, Karelibagh, Vadodara, Gujarat 390018</h1>
            </div>
            <div className="flex flex-col gap-y-2 justify-center text-center items-center">
                <h1 style={someStyle} className="text-2xl">Email Us</h1>
                <h1 style={someOtherStyle} className="text-xlw-3/5">mannevents@gmail.com</h1>
            </div>
            <div className="flex flex-col gap-y-2 justify-center text-center items-center">
                <h1 style={someStyle} className="text-2xl">Phone Number</h1>
                <h1 style={someOtherStyle} className="text-xlw-3/5">+91 96012 98299</h1>
            </div>
        </div>
        <div className="w-1/2">
         <Image
            src="/map.png"
            alt="Example Image"
            className="w-full"
            layout="responsive"
            width={1000}
            height={1000}
            style={{ width: '50%'}}
        />
        </div>
      </div>
      <div>
        <Footer />
      </div>
      </div>
    </div>
    );
}