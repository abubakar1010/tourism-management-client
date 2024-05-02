import { BsFillLuggageFill } from "react-icons/bs";
import { FaCalendarCheck, FaGlobeAsia } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { FcMoneyTransfer } from "react-icons/fc";
import { RiTeamLine } from "react-icons/ri";


const WhyUs = () => {
    return (
        <>
        <h1 className=" text-6xl font-bold mb-36 text-center">Why Choose Us</h1>
        <div className=" flex items-center justify-between gap-12">
            <div className=" space-y-20">
                <div>
                <FaGlobeAsia className=" text-[#6dc234] text-5xl" />
                    <h1 className=" font-bold text-3xl mt-6 text-[#222121d3]">Diverse Destinations</h1>
                    <p className=" text-[#393838e7] mt-2">Discover unique cultures, landscapes, and experiences in worldwide</p>
                </div>
                <div>
                <FcMoneyTransfer className=" text-5xl" />
                    <h1 className=" font-bold text-3xl mt-6 text-[#222121d3]">Value for Money</h1>
                    <p className=" text-[#393838e7] mt-2">Maximize experiences with budget-friendly options and exceptional value offerings</p>
                </div>
                <div>
                <FaMapLocationDot className=" text-[#6dc234] text-5xl" />
                    <h1 className=" font-bold text-3xl mt-6 text-[#222121d3]">Beautiful Places</h1>
                    <p className=" text-[#393838e7] mt-2">Discover stunning vistas and hidden gems around the globe effortlessly.</p>
                </div>
            </div>
            <div>
                <img src={"https://themeim.com/demo/treker/images/resource/why-image-1.svg"} alt="" />
            </div>
            <div className=" space-y-20">
                <div>
                <FaCalendarCheck className=" text-[#6dc234] text-5xl" />
                    <h1 className=" font-bold text-3xl mt-6 text-[#222121d3]">Fast Booking</h1>
                    <p className=" text-[#393838e7] mt-2">Book your dream getaway swiftly with our lightning-fast reservation system.</p>
                </div>
                <div>
                <RiTeamLine className=" text-[#6dc234] text-5xl" />
                    <h1 className=" font-bold text-3xl mt-6 text-[#222121d3]">Support Team</h1>
                    <p className=" text-[#393838e7] mt-2">Count on our dedicated team for expert assistance and seamless travel.</p>
                </div>
                <div>
                <BsFillLuggageFill className=" text-[#6dc234] text-5xl" />
                    <h1 className=" font-bold text-3xl mt-6 text-[#222121d3]">Passionate Travel</h1>
                    <p className=" text-[#393838e7] mt-2">Embark on journeys curated with love, enthusiasm, and expertise.</p>
                </div>
            </div>
        </div>
        </>
    );
};

export default WhyUs;