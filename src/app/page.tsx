import {AboutUsData,ServicesData} from "../../components/HomePageData";
import Footer from "../../components/Footer";
import Testimonial from "../../components/Testimonial";
import Image from "next/image";
import Navbar from "../../components/Navbar"
export default function Home() {
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
          <h1 style={someStyle} className="text-white text-5xl mt-20">Discover the Magic of Unforgettable Event</h1>
      </div>
      <div className="relative min-h-screen">
            <div>
            <Image
                src="/home.png"
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
        <div className="flex flex-col justify-center items-center text-center w-3/5 mx-auto py-10">
          <h1 className="text-pink-600 text-4xl font-bold" style={someOtherStyle}>About Us</h1>
          <h1 className="text-4xl font-extrabold mb-5 mt-5" style={someStyle}>We tailor our event services to your needs, ensuring meticulous management from start to finish.</h1>
          <h1 style={someStyle}>At Mann Events, we blend artistry and precision to deliver fulfilling experiences tailored to our clients needs. Since 2018, we&apos;ve catered to corporate, individual, and charitable sectors, specializaing in a range of events from weddings to corporate functions. With expertise in pre-wedding shoots and destination weddings, we ensure every detail is meticulously executed for a memorable and engaging experience.</h1>
        </div>
        <div className="flex w-4/5 gap-10">
          {AboutUsData.map((item,index)=>(
              <div key={index} className="flex flex-col w-1/3 border-pink-600 border-4 rounded-lg px-5 py-5 hover:bg-pink-600 hover:text-white">
                <div className="border border-pink-600 px-1 py-1 rounded-lg bg-white w-1/3 justify-center text-center items-center mx-auto">
                    <Image
                        src={item.image}
                        alt="Background Image"
                        width={100}
                        height={100}
                        className="justify-center text-center items-center mx-auto"
                    />
                </div>
                <h1 className="text-4xl font-extrabold mb-5 mt-5" style={someStyle}>
                  {item.headline}
                </h1>
                <h1 style={someStyle}>{item.content}</h1>
              </div>
          ))}
          </div>
      </div>
      <div className="flex flex-col mt-10 relative z-10">
        <h1 className="text-pink-600 text-4xl font-bold" style={someOtherStyle}>Services</h1>
        {ServicesData.map((item,index)=>(
          <div key={index} className="flex flex-col w-full py-6 justify-center text-center items-center mx-auto">
              {item.side ? (
                <div className="flex w-full px-8">
                <div className="w-1/2 flex items-center justify-center">
                  <Image 
                    src={item.image}
                    alt="Example Image"
                    width={650}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
                <div className="w-1/2 flex flex-col gap-y-6 justify-left items-left text-left px-14">
                  <h1 style={someStyle} className="text-4xl font-extrabold mb-4">{item.headline}</h1>
                  <h1>{item.content}</h1>
                  <button className="text-pink-600 px-2 py-4 border border-pink-600 mt-6 rounded-lg w-1/4 font-bold hover:bg-pink-600 hover:text-white">Know More</button>
                </div>
              </div>
              ) : (
                <div className="flex w-full">
                <div className="w-1/2 flex flex-col gap-y-6 px-14 justify-start text-left items-left">
                  <h1 style={someStyle} className="text-4xl font-extrabold mb-4">{item.headline}</h1>
                  <h1>{item.content}</h1>
                  <button className="text-pink-600 px-4 py-4 border border-pink-600 mt-6 rounded-lg w-1/4 font-bold hover:bg-pink-600 hover:text-white">Know More</button>
                </div>
                <div className="w-1/2 flex items-center justify-center">
                  <Image 
                    src={item.image}
                    alt="Example Image"
                    width={650}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </div>
              )}
          </div>
        ))}
      </div>
      <div className="flex flex-col relative z-10 px-10">
          <div className="flex flex-col justify-center items-center text-center w-3/5 mx-auto py-10">
              <h1 className="text-pink-600 text-4xl font-bold" style={someOtherStyle}>Gallery</h1>
              <h1 className="text-4xl font-extrabold mb-5 mt-5" style={someStyle}>Magical Memories</h1>
          </div>
          <div>
            <Image 
              src="/gallery.png"
              alt="Example Image"
              layout="responsive"
              width={1000}
              height={1000}
              className="w-full"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
      </div>
      <div className="px-10">
        <Testimonial />
      </div>
      <div className="flex flex-col relative z-10 px-10 mb-20">
          <div className="flex flex-col justify-center items-center text-center w-3/5 mx-auto py-10">
              <h1 className="text-pink-600 text-4xl font-bold" style={someOtherStyle}>Highlights</h1>
              <h1 className="text-4xl font-extrabold mb-5 mt-5" style={someStyle}>Media Coverage</h1>
          </div>
          <div>
            <Image 
              src="/media.png"
              alt="Example Image"
              layout="responsive"
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
