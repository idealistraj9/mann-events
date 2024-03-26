import {AboutUsData,ServicesData} from "../../components/HomePageData";
import Image from "next/image";
export default function Home() {
  const someStyle = {
    fontFamily: 'Playfair Display, serif',
  };
  const someOtherStyle = {
    fontFamily : 'Open Sans, sans-serif',
  }
  return (
    <div className="flex flex-col gap-y-20 justify-center items-center text-center">
      <div className="relative">
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
      <div className="flex flex-col justify-center items-center text-center">
        <div className="flex flex-col justify-center items-center text-center w-3/5 mx-auto py-10">
          <h1 className="text-pink-600 text-3xl font-bold" style={someOtherStyle}>About Us</h1>
          <h1 className="text-4xl font-extrabold mb-5 mt-5" style={someStyle}>We tailor our event services to your needs, ensuring meticulous management from start to finish.</h1>
          <h1 style={someStyle}>At Mann Events, we blend artistry and precision to deliver fulfilling experiences tailored to our clients' needs. Since 2018, we've catered to corporate, individual, and charitable sectors, specializaing in a range of events from weddings to corporate functions. With expertise in pre-wedding shoots and destination weddings, we ensure every detail is meticulously executed for a memorable and engaging experience.</h1>
        </div>
        <div className="flex w-3/4 gap-10">
          {AboutUsData.map((item,index)=>(
              <div className="flex flex-col w-1/3 border border-pink-600 border-4 rounded-lg px-5 py-5 hover:bg-pink-600 hover:text-white">
                <div className="w-1/5 mx-auto bg-gray-300 py-7 justify-center items-center text-center rounded-lg">
                </div>
                <h1 className="text-4xl font-extrabold mb-5 mt-5" style={someStyle}>
                  {item.headline}
                </h1>
                <h1 style={someStyle}>{item.content}</h1>
              </div>
          ))}
          </div>
      </div>
      <div className="flex flex-col mt-10">
        <h1 className="text-pink-600 text-2xl font-bold" style={someOtherStyle}>Services</h1>
        {ServicesData.map((item,index)=>(
          <div className="flex flex-col w-full py-6 justify-center text-center items-center mx-auto">
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
                  <h1 style={someOtherStyle}>{item.content}</h1>
                  <button className="text-pink-600 px-4 py-4 border border-pink-600 mt-6 rounded-lg w-1/4 font-bold">Know More</button>
                </div>
              </div>
              ) : (
                <div className="flex w-full">
                <div className="w-1/2 flex flex-col gap-y-6 px-14 justify-start text-left items-left">
                  <h1 style={someStyle} className="text-4xl font-extrabold mb-4">{item.headline}</h1>
                  <h1 style={someOtherStyle}>{item.content}</h1>
                  <button className="text-pink-600 px-4 py-4 border border-pink-600 mt-6 rounded-lg w-1/4 font-bold">Know More</button>
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
    </div>
  );
}
