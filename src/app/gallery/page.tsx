import {CSImages} from "../../../components/CorporateServiceImages"
import Footer from "../../../components/Footer";
import Testimonial from "../../../components/Testimonial";
import Image from "next/image";
export default function AboutUs() {
    const someStyle = {
        fontFamily: 'Playfair Display, serif',
      };
      const someOtherStyle = {
        fontFamily : 'Open Sans, sans-serif',
      }
    return (
        <div className="flex flex-col justify-center items-center text-center">
      <div className="relative min-h-screen -mb-8">
            <div>
            <Image
                src="/gallerypagebg.png"
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
          <h1 className="text-pink-600 text-4xl font-bold" style={someOtherStyle}>Gallery</h1>
          <h1 className="text-3xl font-extrabold mb-5 mt-5" style={someStyle}>Crafting Timeless Memories, One Event at a Time</h1>
        </div>
        <div>
            <Image 
              src="/galleryshowcase.png"
              alt="Example Image"
              width={1000}
              height={1000}
              className="w-full"
              style={{ width: '100%', height: '100%' }}
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