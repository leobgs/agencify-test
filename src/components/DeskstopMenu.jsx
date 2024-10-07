import React from 'react';
import images from "../assets/images/index.js";

const DeskstopMenu = ({isExpertiseOpen, isServicesOpen, toggleExpertiseDropdown, toggleServicesDropdown, dummy}) => {
    return (
        <div
            className="hidden md:flex md:flex-row  md:space-x-2 lg:space-x-4 font-poppins font-medium md:text-sm lg:text-xl">
            <div className="md:px-2 cursor-pointer whitespace-nowrap">Accueil</div>

            <div className="md:px-2 cursor-pointer flex justify-between whitespace-nowrap"
                 onClick={toggleExpertiseDropdown}>
                <button>
                    <span>Notre expertise</span>
                </button>
                <img
                    className={`cursor-pointer w-2 ml-2 transition-transform duration-300 ${isExpertiseOpen ? "rotate-0" : "rotate-90"}`}
                    src={images.ic_down_arrow} alt="Dropdown Icon"/>
                <div
                    className={`absolute transition-opacity duration-500 ease-out transform ${isExpertiseOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}`}>
                    {isExpertiseOpen && (
                        <div className={`absolute bg-white shadow-lg mt-10 py-2 pr-12 rounded-lg `}>
                            {dummy.expertise.map((item, index) => (
                                <div key={index} className="py-2 cursor-pointer flex items-center px-6 py-4">
                                    <img src={item.img} alt={item.name} className="w-10 h-10 mr-2 object-contain"/>
                                    <div className="flex flex-col font-poppins font-medium">
                                        <span className="text-md">{item.name}</span>
                                        <span className="text-sm text-[#868686]">{item.desc}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="md:px-2 cursor-pointer flex justify-between whitespace-nowrap"
                 onClick={toggleServicesDropdown}>
                <button>
                    <span>Nos services</span>
                </button>
                <img
                    className={`cursor-pointer w-2 ml-2 transition-transform duration-300 ${isServicesOpen ? "rotate-0" : "rotate-90"}`}
                    src={images.ic_down_arrow} alt="Dropdown Icon"/>
                <div
                    className={`absolute transition-opacity duration-500 ease-out transform ${isServicesOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}`}>
                    {isServicesOpen && (
                        <div className="absolute bg-white shadow-lg mt-10 pl-5 pr-8 py-2 rounded-lg ">
                            {dummy.services.map((item, index) => (
                                <div key={index} className="py-2 cursor-pointer flex items-center px-2 py-4">
                                    <img src={item.img} alt={item.name} className="w-8 h-8 mr-2 object-contain"/>
                                    <div className="flex flex-col">
                                        <span className="text-md">{item.name}</span>
                                        <span className="text-sm text-[#868686]">{item.desc}</span>
                                    </div>
                                    <div
                                        className={`${item.name == "Optimisation" ? "flex bg-[#0AC45F26] self-start rounded-full text-[#0AC45F] text-xs px-2 mx-2 py-1 border-[#0AC45F26]" : "md:hidden"} `}>
                                        <img className="w-4 mr-1" src={images.ic_checklist}/>
                                        <span className='mx-1'>
                                        La plus populaire
                                    </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="md:px-2 cursor-pointer whitespace-nowrap">À propos</div>
            <div className="md:px-2 cursor-pointer whitespace-nowrap">Contact</div>
        </div>
    );
};

export default DeskstopMenu;