import React from "react";
import dummy from "../utils/dummy";
import images from "../assets/images/index.js";

const LandingSection = () => {
    return (
        <div className="hidden md:grid md:grid-cols-2 my-6 w-full h-screen">
            <div className="ml-16 h-5/6 flex flex-col justify-center pt-28">
                {dummy.text.map((item, index) => (
                    <div key={index} className="flex flex-col">
                        <div
                            className="font-poppins font-medium text-[#E75A7C] md:text-xl lg:text-2xl mt-20">
                            {item.text1}
                        </div>
                        <div
                            className="font-poppins font-semibold md:text-5xl lg:text-7xl md:pt-8 md:pb-14 lg:pb-1">
                            {item.text2}
                        </div>
                        <div className=" font-poppins font-medium text-2xl mr-14 mt-32 w-5/6">
                            {item.text3}
                        </div>
                    </div>
                ))}
                <div className="flex flex-row w-5/6 justify-between items-center mt-32">
                    <button
                        className="bg-[#E75A7C] py-6 rounded-full w-full max-w-xs text-white font-sans"
                    >
                        Recevoir nos offres
                    </button>
                    <button
                        className="bg-[#FFFFFF] py-6 rounded-full border-2 border-[#E75A7C] w-full max-w-xs text-[#E75A7C]font-sans"
                    >
                        Prendre un rendez-vous
                    </button>
                </div>
            </div>

            <div className="w-full md:h-screen bg-cover bg-top bg-no-repeat my-6 flex justify-end pr-10"
                 style={{
                     backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0) 80%, rgba(255, 255, 255, 1) 100%), url(${images.man_landing_page})`,
                 }}>
                <div className="flex justify-end items-center my-10 mx-10">
                    {dummy.testi.map((testiItem, index) => (
                        <div key={index}
                             className="relative max-w-xs bg-white text-gray-800 p-4 rounded-lg shadow-lg mb-4 mt-28">
                            <p className="">{testiItem.message}</p>
                            <p className="text-[#E75A7C] text-2xl py-2">
                                {Array.from({length: Math.floor(dummy.testi[0].stars)}, (_, index) => (
                                    <span key={index}>&#9733;</span>
                                ))}
                                {dummy.testi[0].stars % 1 === 0.5 && <span>&#9734;</span>}
                            </p>
                            <div className="flex">
                                <img src={testiItem.img}/>
                                <div className="flex flex-col">
                                    <p className="font-bold">{testiItem.name}</p>
                                    <p className="text-sm text-gray-500">{testiItem.date}</p>
                                </div>
                            </div>
                            <div
                                className="absolute -bottom-2 -left-0 h-full border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-white"></div>
                        </div>
                    ))}
                    <div
                        className="absolute -bottom-2 -left-0 h-full border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-white"></div>
                </div>
            </div>
        </div>
    );
};

export default LandingSection;
