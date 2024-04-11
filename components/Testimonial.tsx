"use client"
import {TestimonialData} from "./TestimonialData";
import Image from "next/image";
import {useState} from "react";
export default function Testimonial() {
    const size=TestimonialData.length;
    const [i,setI]=useState(0);
    const [il,setIl]=useState(size-1);
    const [ir,setIr]=useState(1);
    const shift=(index : any)=>{
        console.log("function called with : "+index)
        setI(index);
        let some=(index-1)%size;
        if(some<0){
            some+=size;
        }
        setIl(some);
        let some2=(index+1)%size;
        setIr(some2);
    }
    const someStyle = {
    fontFamily: 'Playfair Display, serif',
    };
    const someOtherStyle = {
    fontFamily : 'Open Sans, sans-serif',
    }
    return (
        <div className="flex flex-col relative z-10">
            <div className="flex flex-col justify-center items-center text-center w-3/5 mx-auto py-10">
                <h1 className="text-pink-600 text-4xl font-bold" style={someOtherStyle}>Testimonial</h1>
                <h1 className="text-4xl font-extrabold mb-5 mt-5" style={someStyle}>Client Love</h1>
            </div>
            <div className="flex gap-x-6">
                <div className="flex flex-col border border-pink-600 rounded-lg px-4 py-4 w-1/3 justify-center items-center text-center gap-y-6 mt-10">
                    <h1 className="justify-center text-center items-center">{TestimonialData[il].review}</h1>
                    <div className="flex justify-center text-center items-center">
                    {Array.from({ length: TestimonialData[il].stars }).map((_, index) => (
                        <Image
                            key={`star-${index}`} // Adding a unique key prop
                            src="/star.png"
                            alt="Example Image"
                            width={20}
                            height={20}
                        />
                        ))}
                    </div>
                    <div className="flex">
                        <div className="w-2/5 justify-center items-center text-center">
                            <Image
                                src={TestimonialData[il].userimage}
                                alt="Example Image"
                                width={100}
                                height={100}
                            />
                        </div>
                        <div className="flex flex-col w-3/5 justify-center items-center text-center">
                            <h1>{TestimonialData[il].username}</h1>
                            <h1>{TestimonialData[il].userlocation}</h1>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col border border-pink-600 rounded-lg px-4 py-4 w-1/3 justify-center items-center text-center gap-y-6">
                    <h1 className="justify-center text-center items-center">{TestimonialData[i].review}</h1>
                    <div className="flex justify-center text-center items-center">
                    {Array.from({ length: TestimonialData[i].stars }).map((_, index) => (
                        <Image
                            key={`star-${index}`} // Adding a unique key prop
                            src="/star.png"
                            alt="Example Image"
                            width={20}
                            height={20}
                        />
                        ))}
                    </div>
                    <div className="flex">
                        <div className="w-2/5 justify-center items-center text-center">
                            <Image
                                src={TestimonialData[i].userimage}
                                alt="Example Image"
                                width={100}
                                height={100}
                            />
                        </div>
                        <div className="flex flex-col w-3/5 justify-center items-center text-center">
                            <h1>{TestimonialData[i].username}</h1>
                            <h1>{TestimonialData[i].userlocation}</h1>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col border border-pink-600 rounded-lg px-4 py-4 w-1/3 justify-center items-center text-center gap-y-6 mt-10">
                    <h1 className="justify-center text-center items-center">{TestimonialData[ir].review}</h1>
                    <div className="flex justify-center text-center items-center">
                    {Array.from({ length: TestimonialData[ir].stars }).map((_, index) => (
                        <Image
                            key={`star-${ir}-${index}`} // Improved unique key by including `ir`
                            src="/star.png"
                            alt="Example Image"
                            width={20}
                            height={20}
                        />
                        ))}
                    </div>
                    <div className="flex">
                        <div className="w-2/5 justify-center items-center text-center">
                            <Image
                                src={TestimonialData[ir].userimage}
                                alt="Example Image"
                                width={100}
                                height={100}
                            />
                        </div>
                        <div className="flex flex-col w-3/5 justify-center items-center text-center">
                            <h1>{TestimonialData[ir].username}</h1>
                            <h1>{TestimonialData[ir].userlocation}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6">
            <div className="flex justify-center text-center items-center gap-x-6">
            {Array.from({ length: size }).map((_, index) => (
                <button key={index} onClick={() => shift(index)} className="cursor-pointer">
                    <Image
                    src={index !== i ? "/lightcircle.png" : "/darkcircle.png"}
                    alt="Example Image"
                    width={index === i ? 17 : 30} // Ensure these are numbers
                    height={index === i ? 17 : 30} // Ensure these are numbers
                    />
                </button>
                ))}
            </div>
            </div>
        </div>
    )
}