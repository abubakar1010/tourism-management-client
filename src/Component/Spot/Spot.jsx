
import Countries from "../Countries/Countries";
import DisplaySpots from "../DisplaySpots/DisplaySpots";

import { useLoaderData } from "react-router-dom";

import WhyUs from "../WhyUs/WhyUs";
import Team from "../Team/Team";

const Spot = () => {
    const data = useLoaderData()

    return (
        <div className=" my-24">
            <div className=" text-center mb-16">
                <h1 className=" py-6 text-xl xl:text-4xl font-bold  px-3">
                    Skyline Serenity Where Luxury Living Reaches New Heights
                </h1>
                <p className=" text-lg font-medium  tracking-wider leading-relaxed text-black xl:px-64 px-4">
                    Explore our carefully curated collection of residential properties,
                    each offering a blend of luxury, comfort, and natural beauty. Immerse
                    yourself in panoramic views and peaceful landscapes.
                </p>
            </div>
            <div className="space-y-16">
                {data.slice(0, 6).map((element) => (
                    <DisplaySpots key={element.id} element={element} />
                ))}
            </div>
            <div>
                <Countries />
            </div>
            
            <div className=" my-28">
                <WhyUs />
            </div>

            <div>
                <Team />
            </div>
        </div>
    );
};
export default Spot;
