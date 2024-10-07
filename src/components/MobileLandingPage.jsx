import React from "react";
import images from "../assets/images/index.js";
import dummy from "../utils/dummy.js";

const MobileLandingPage = () => {

    return (
        <div className="md:hidden p-4 sm:px-2">
            {dummy.text.map((item, index) => (
                <div key={index}>
                    <div className="text-[#E75A7C] text-center font-medium py-2">
                        {item.text1}
                    </div>
                    <div
                        className="text-[#000000] text-[25px] sm:text-[20px] text-center font-semibold py-1"
                    >
                        {item.text2}
                    </div>
                </div>
            ))}

            <div
                className="bg-contain bg-no-repeat bg-center w-full h-96"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0) 25%, rgba(255, 255, 255, 1) 85%), url(${images.man_landing_page})`,
                }}
            ></div>

            <div className="flex flex-col w-full justify-center items-center">
                <button className="bg-[#E75A7C] p-4 rounded-full mb-4 w-full max-w-xs sm:w-full sm:px-6 text-white font-sans">
                    Recevoir nos offres
                </button>
                <button
                    className="bg-[#FFFFFF] p-4 rounded-full border-2 border-[#E75A7C] w-full max-w-xs sm:w-full sm:px-6 text-[#E75A7C] font-sans">
                    Prendre un rendez-vous
                </button>
            </div>
        </div>
    );
};

export default MobileLandingPage;
