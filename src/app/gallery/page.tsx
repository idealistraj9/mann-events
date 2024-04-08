import Footer from "../../../components/Footer";
import { GWhyChooseUs } from "../../../components/WhyChooseUs";
import Image from "next/image";
import Navbar from "../../../components/Navbar";
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
          <h1 style={someStyle} className="text-white text-5xl mt-20">Capturing Moments, Crafting Memories</h1>
      </div>
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
      <div className="flex flex-col justify-center text-center items-center relative z-10 mt-20">
        <h1 style={someStyle} className="text-4xl font-bold">Why Choose Us</h1>
        <div className="grid grid-cols-2 w-3/4 justify-center text-center items-center mx-auto h-full py-10 gap-x-10 gap-y-6">
            {GWhyChooseUs.map((item,index)=>(
                <div className="flex flex-col border-2 border-pink-600 rounded-lg justify-center text-center items-center py-4 px-4 h-full gap-y-4 hover:bg-pink-600 hover:text-white">
                    <div className="border border-pink-600 px-1 py-1 rounded-lg bg-white">
                        <Image
                            src={item.image}
                            alt="Background Image"
                            width={100}
                            height={100}
                        />
                    </div>
                    <div style={someOtherStyle} className="font-bold"><h1>{item.headline}</h1></div>
                    <div style={someOtherStyle}><h1>{item.content}</h1></div>
                </div>
            ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
      </div>
    </div>
    );
}