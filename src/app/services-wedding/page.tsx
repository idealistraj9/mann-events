import {OurServicesImages} from "../../../components/OurServicesImages"
import Footer from "../../../components/Footer";
import Testimonial from "../../../components/Testimonial";
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
          <h1 style={someStyle} className="text-white text-5xl mt-20">Crafting Your Dream Wedding, One Detail at a Time</h1>
      </div>
      <div className="relative min-h-screen">
            <div>
            <Image
                src="/services_page.jpg"
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
          <h1 className="text-pink-600 text-4xl font-bold" style={someOtherStyle}>Wedding</h1>
          <h1 className="text-3xl font-extrabold mb-5 mt-5" style={someStyle}>Where Love Blooms and Dreams Take Flight – Let Mann Events Craft Your Perfect Wedding Story</h1>
          <h1 style={someOtherStyle}>At Mann Events, weddings are our passion and specialty. With meticulous attention to detail and boundless creativity, we transform your vision into an unforgettable reality. From enchanting décor to exquisite cuisine, we handle every aspect of your special day with precision and care, ensuring a seamless and magical experience for you and your loved ones. Trust Mann Events to craft the wedding of your dreams, where love blooms and memories are made to last a lifetime.</h1>
          <button style={someStyle} className="text-pink-600 text-2xl rounded-lg px-8 py-4 border border-pink-600 hover:bg-pink-600 hover:text-white">Get Started Today</button>
        </div>
      </div>
      <div className="flex flex-col relative z-10 mt-10 mb-20">
        <div className="flex flex-col gap-y-3">
            <h1 style={someStyle} className="text-4xl font-bold">Our Services</h1>
            <h1 style={someOtherStyle}>From pandit ji to catering, décor to post-wedding services, we&apos;ve got every aspect of your special day covered seamlessly</h1>
        </div>
        <div className="grid grid-cols-4 px-6 gap-x-6 justify-center text-center items-center">
            {OurServicesImages.map((item,index)=>(
                <div key={index} className="border border-pink-600 gap-y-6 rounded-lg px-4 py-4 flex flex-col h-5/6">
                    <Image
                        src={item.imagelink}
                        alt="Background Image"
                        className="w-full"
                        width={800}
                        height={800}
                        style={{ width: '100%', height: '75%' }}
                    />
                    <h1 style={someOtherStyle} className="text-lg font-bold">{item.text}</h1>
                </div>
            ))}
        </div>
      </div>
      <div className="px-10">
        <Testimonial />
      </div>
      <div>
        <Footer />
      </div>
      </div>
    </div>
    );
}