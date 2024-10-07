import React, {useState} from "react";
import images from "./assets/images/index.js";
import dummy from "./utils/dummy.js";
import LandingSection from "./components/LandingSection.jsx";
import MobileLandingPage from "./components/MobileLandingPage.jsx";
import MobileMenu from "./components/MobileMenu.jsx";
import DeskstopMenu from "./components/DeskstopMenu.jsx";

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isExpertiseOpen, setIsExpertiseOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleExpertiseDropdown = () => {
        setIsExpertiseOpen(!isExpertiseOpen);
        setIsServicesOpen(false)
    };

    const toggleServicesDropdown = () => {
        setIsServicesOpen(!isServicesOpen);
        setIsExpertiseOpen(false)
    };

    return (
        <>
            <div className="relative">
                <div
                    className={`flex justify-between items-center self-center px-4 py-6 md:py-8 bg-white shadow-lg ${isMenuOpen ? "sticky top-0" : ""} md:px-8 lg:px-20`}>
                    <img className="md:hidden" src={images.logo_agencify} width={108} alt="Logo"/>
                    <img className="hidden md:flex md:w-36 lg:w-40" src={images.logo_agencify} alt="Logo"/>
                    <button className="md:hidden" onClick={toggleMenu}>
                        <img
                            src={isMenuOpen ? images.ic_close : images.ic_hamburger_menu}
                            width={30}
                            height={30}
                            style={{width: "30px", height: "30px"}}
                            alt="Menu"
                        />
                    </button>

                    <DeskstopMenu
                        isExpertiseOpen={isExpertiseOpen}
                        isServicesOpen={isServicesOpen}
                        toggleExpertiseDropdown={toggleExpertiseDropdown}
                        toggleServicesDropdown={toggleServicesDropdown}
                        dummy={dummy}
                    />

                    <button
                        className="hidden md:flex bg-[#E75A7C] px-3 lg:px-5 py-4 rounded-full text-white font-sans mr-3">
                        <img src={images.ic_back_btn} className="self-center mr-2 w-4"/>
                        <span className="text-sm">Demander un devis</span>
                    </button>
                </div>

                <LandingSection/>

                {!isMenuOpen && (<MobileLandingPage/>)}
            </div>

            <div
                className={`transition-opacity duration-500 ease-linear transform ${isMenuOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}`}>
                {isMenuOpen && (
                    <MobileMenu
                        isExpertiseOpen={isExpertiseOpen}
                        toggleServicesDropdown={toggleServicesDropdown}
                        toggleExpertiseDropdown={toggleExpertiseDropdown}
                        isServicesOpen={isServicesOpen}/>)}
            </div>
        </>
    )
        ;
}

export default App;
