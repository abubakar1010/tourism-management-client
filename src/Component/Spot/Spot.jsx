
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
                Explore Our Top Destinations
                </h1>
                <p className=" text-lg font-medium  tracking-wider leading-relaxed text-black xl:px-64 px-4">
                Discover the jewels of our travel collection with our curated selection of tourist spot cards. From iconic landmarks to hidden gems, dive into detailed descriptions, stunning visuals, and essential information about each destination.
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
