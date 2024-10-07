import React from 'react';
import images from "../assets/images/index.js";
import dummy from "../utils/dummy.js";

const MobileMenu = ({toggleExpertiseDropdown, isExpertiseOpen, toggleServicesDropdown, isServicesOpen}) => {
    return (
        <div className="md:hidden p-1 sm:px-2">
            <div className="flex flex-col h-full bg-white m-4 font-poppins font-medium text-lg">
                <div className="py-4 cursor-pointer border-b">Accueil</div>

                <div className="py-4 cursor-pointer border-b flex justify-between items-center">
                    <button onClick={toggleExpertiseDropdown}>
                        <span>Notre expertise</span>
                    </button>
                    <img
                        className={`cursor-pointer transition-transform duration-500 ${isExpertiseOpen ? "rotate-0" : "rotate-90"}`}
                        src={images.ic_down_arrow}
                    />
                </div>
                <div
                    className={`transition-opacity duration-500 ease-linear transform ${isExpertiseOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}`}>
                    {isExpertiseOpen && (<div className="pl-4">
                        {dummy.expertise.map((item, index) => (
                            <div key={index} className="py-2 cursor-pointer flex items-center">
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="w-10 h-10 mr-2 object-contain"
                                />
                                <div className="flex flex-col font-poppins font-medium">
                                    <span className="text-sm">{item.name}</span>
                                    <span className="text-xs text-[#868686]">{item.desc}</span>
                                </div>
                            </div>))}
                    </div>)}
                </div>

                <div className="py-4 cursor-pointer border-b flex justify-between items-center">
                    <button onClick={toggleServicesDropdown}>
                        <span>Nos services</span>
                    </button>
                    <img
                        className={`cursor-pointer transition-transform duration-500 ${isServicesOpen ? "rotate-0" : "rotate-90"}`}
                        src={images.ic_down_arrow}/>
                </div>
                <div
                    className={`transition-opacity duration-500 ease-linear transform ${isServicesOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}`}>
                    {isServicesOpen && (<div className="pl-1">
                        {dummy.services.map((item, index) => (
                            <div key={index} className="py-2 cursor-pointer flex items-center">
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="w-8 h-8 mr-2 self-center"
                                />
                                <div className="flex flex-col">
                                    <span className="text-sm">{item.name}</span>
                                    <span className="text-xs text-[#868686]">{item.desc}</span>
                                </div>
                                <div
                                    className={`${item.name == "Optimisation" ? "flex bg-[#0AC45F26] self-start rounded-full text-[#0AC45F] text-xs px-2 mx-2 py-1 border-[#0AC45F26]" : "hidden"} `}>
                                    <img className="w-4 mr-1" src={images.ic_checklist}/>
                                    <span className='mx-1'>
                                        La plus populaire
                                    </span>
                                </div>
                            </div>))}
                    </div>)}
                </div>

                <div className="py-4 cursor-pointer border-b">À propos</div>
                <div className="py-4 cursor-pointer border-b">Contact</div>
            </div>
            <div className="mt-10 flex justify-center ">
                <button
                    className="bg-[#E75A7C] self-center py-4 px-8 rounded-full mb-4 max-w-xs sm:w-full sm:px-4 text-white font-sans">
                    Demander un devis
                </button>
            </div>
        </div>
    )
        ;
};

export default MobileMenu;