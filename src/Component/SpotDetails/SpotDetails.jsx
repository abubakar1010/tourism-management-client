import { useLoaderData } from "react-router-dom";
import PropTypes from "prop-types";
import {  IoLocation } from "react-icons/io5";
import { GiRapidshareArrow } from "react-icons/gi";
import { HiMiniCircleStack } from "react-icons/hi2";
import { Helmet } from "react-helmet-async";
import { FaStar } from "react-icons/fa";
import { BiDollar } from "react-icons/bi";
import moment from "moment";
import FAQ from "../FAQ/FAQ";


const SpotDetails = () => {
  const data = useLoaderData();



  const {
    image,
    spotName,
    // countryName,
    rating,
    location,
    cost,
    description,
    // season,
    reviews,
    time,
    // visitor
  } = data;
  //console.log(data);


  return (
    <>
      <Helmet>
        <title>Property Details | ExploreHub</title>
      </Helmet>
      <div className=" my-12">
        <div>
          <div className={`w-full h-[470px] `}>
            <img src={image} alt="" className="object-cover h-full w-full" />
          </div>
          <div>
            <p className=" text-2xl font-bold mb-4 mt-9">Discover the many sides of {spotName}</p>
            <p>{description}</p>
          </div>

          <div className=" mt-12 border-b border-[#64626265] pb-6">
            <div className=" flex gap-8 mb-6 items-center">
              <p className=" text-xl font-bold ">{time}</p>
              <div className=" flex item-center gap-1 ">
                <IoLocation className=" text-2xl text-[#FF8938] " />
                <p>{location}</p>
              </div>
              <div className=" flex items-center gap-2">
                <FaStar className=" text-xl text-orange-500" />
                <p className=" font-medium text-lg ">{rating}</p>
                <p className=" font-medium text-lg ">( {reviews} )</p>
              </div>
            </div>
          </div>


          <div className=" flex gap-12 my-20">
          <div 
          className=" shadow-xl shadow-[#03363f0a] border-2 border-[#69646427] py-6 px-8 w-full inline-block rounded-md">
            <p>From</p>
            <div className=" flex items-center">
              <p className=" text-2xl">US</p>
              <BiDollar className=" text-2xl text-[#141414c6] ml-2" />
              <p className=" text-2xl font-bold font-serif text-[#141414c6]">
                {cost}
              </p>
            </div>
            <div className=" ">
            <button
              
              className="mt-6 bg-gradient-to-r from-[#6dc234] to-[#295a09b6] w-full py-3 px-16 rounded-full font-bold text-white text-xl hover:bg-[#295a09ad]"
            >
              Check Availability
            </button>
            </div>
            <div className=" flex gap-6  mt-12 relative">
                <HiMiniCircleStack className=" text-3xl " /> 
                <p  className=" text-[#505557]"><span className=" text-[#323637] font-bold ">Pay over time </span> with smaller, interest-free instalments. <span className=" hover:underline text-[#177fa4]">Learn More</span></p>
            </div>
            <div className=" flex gap-6 items-center mt-6">
                
                <GiRapidshareArrow className=" text-3xl" /> 
                <p className=" text-[#505557]"><span className=" text-[#323637] font-bold ">Book once</span> and share the cost with split payments. <span className=" hover:underline text-[#177fa4]">Learn More</span></p>
            </div>
          </div>
          <div>
            <p className=" font-bold text-xl mb-6">Select a departure month</p>
            <div className=" flex gap-7 items-center flex-wrap">
                <div className=" bg-[#323637] border-[#323637] border text-white inline-block px-9 rounded-md py-2">
                    <p>Upcoming</p>
                    <p>departures</p>
                </div>
                <div
                 className="  hover:border-[#323637] border border-[#c7d0d9] text-[#323637] cursor-pointer inline-block px-9 rounded-md py-2 duration-700 hover:duration-700 text-center w-[150px]">
                    <p className="text-lg">{moment().add(0, "month").format("MMM")}</p>
                    <p className="text-lg">{moment().add(0, "year").format("YYYY")}</p>
                </div>
                <div
                 className="  hover:border-[#323637] border border-[#c7d0d9] text-[#323637] cursor-pointer inline-block px-9 rounded-md py-2 duration-700 hover:duration-700 text-center w-[150px]">
                    <p className="text-lg">{moment().add(1, "month").format("MMM")}</p>
                    <p className="text-lg">{moment().add(0, "year").format("YYYY")}</p>
                </div>
                <div
                 className="  hover:border-[#323637] border border-[#c7d0d9] text-[#323637] cursor-pointer inline-block px-9 rounded-md py-2 duration-700 hover:duration-700 text-center w-[150px]">
                    <p className="text-lg">{moment().add(2, "month").format("MMM")}</p>
                    <p className="text-lg">{moment().add(0, "year").format("YYYY")}</p>
                </div>
                <div
                 className="  hover:border-[#323637] border border-[#c7d0d9] text-[#323637] cursor-pointer inline-block px-9 rounded-md py-2 duration-700 hover:duration-700 text-center w-[150px]">
                    <p className="text-lg">{moment().add(3, "month").format("MMM")}</p>
                    <p className="text-lg">{moment().add(0, "year").format("YYYY")}</p>
                </div>
                <div
                 className="  hover:border-[#323637] border border-[#c7d0d9] text-[#323637] cursor-pointer inline-block px-9 rounded-md py-2 duration-700 hover:duration-700 text-center w-[150px]">
                    <p className="text-lg">{moment().add(4, "month").format("MMM")}</p>
                    <p className="text-lg">{moment().add(0, "year").format("YYYY")}</p>
                </div>
                <div
                 className="  hover:border-[#323637] border border-[#c7d0d9] text-[#323637] cursor-pointer inline-block px-9 rounded-md py-2 duration-700 hover:duration-700 text-center w-[150px]">
                    <p className="text-lg">{moment().add(5, "month").format("MMM")}</p>
                    <p className="text-lg">{moment().add(0, "year").format("YYYY")}</p>
                </div>
                <div
                 className="  hover:border-[#323637] border border-[#c7d0d9] text-[#323637] cursor-pointer inline-block px-9 rounded-md py-2 duration-700 hover:duration-700 text-center w-[150px]">
                    <p className="text-lg">{moment().add(6, "month").format("MMM")}</p>
                    <p className="text-lg">{moment().add(0, "year").format("YYYY")}</p>
                </div>
                <div
                 className="  hover:border-[#323637] border border-[#c7d0d9] text-[#323637] cursor-pointer inline-block px-9 rounded-md py-2 duration-700 hover:duration-700 text-center w-[150px]">
                    <p className="text-lg">{moment().add(7, "month").format("MMM")}</p>
                    <p className="text-lg">{moment().add(0, "year").format("YYYY")}</p>
                </div>
                <div
                 className="  hover:border-[#323637] border border-[#c7d0d9] text-[#323637] cursor-pointer inline-block px-9 rounded-md py-2 duration-700 hover:duration-700 text-center w-[150px]">
                    <p className="text-lg">{moment().add(8, "month").format("MMM")}</p>
                    <p className="text-lg">{moment().add(1, "year").format("YYYY")}</p>
                </div>
                <div
                 className="  hover:border-[#323637] border border-[#c7d0d9] text-[#323637] cursor-pointer inline-block px-9 rounded-md py-2 duration-700 hover:duration-700 text-center w-[150px]">
                    <p className="text-lg">{moment().add(9, "month").format("MMM")}</p>
                    <p className="text-lg">{moment().add(1, "year").format("YYYY")}</p>
                </div>
                
            </div>
          </div>
          </div>
        </div>
      </div>

      <div className=" flex items-center gap-12 rounded-md bg-[#ecede7] w-[660px] py-7 px-12">
        <div>
          {/* <FaGlobeEurope></FaGlobeEurope> */}
          <img className=" w-32" src={'https://i.postimg.cc/QMykkWdt/illustration-globe-green.png'} alt="" />
        </div>
        <div>
          <p className=" text-xl font-bold mb-2">Start planning today</p>
          <p className="  font-semibold mb-4 text-[#504e4e]">An expert specializing in tours of this region is here to help.</p>
          <p className=" border border-black inline-block px-9 hover:border-none py-3 text-lg font-semibold rounded-full hover:bg-gradient-to-r from-[#6dc234] to-[#6dc234ad]  hover:text-white">Talk to a Tour Consultant</p>
        </div>
      </div>

      <div className=" my-16">
        <h1 className=" font-bold text-xl mb-3">Flights</h1>
        <p className=" text-[#313131]">Round-trip flights are one more thing we handle to make your journey as smooth as possible. Our team of travel experts will find the best flight itinerary for you at a competitive rate, thanks to our partnerships with top airlines.</p>
        <div>
          <h3 className=" text-lg font-bold text-[#000000bf] mt-7 mb-4">{"Add our airfare package and you'll get:"}</h3>
          <ul className=" list-disc space-y-2 pl-4">
            <li>Round-trip flight for your tour</li>
            <li>Airport transfers at your destination</li>
            <li>A great price locked in today</li>
            <li>4/7 support from our dedicated service team</li>
            <li>Options for arriving early, staying longer, or requesting an upgrade</li>
            <li>Flexible rebooking options if your tour itinerary changes</li>
          </ul>
            <p className="underline mt-3 pl-4  font-bold">Find out more about flights</p>
        </div>
      </div>

      <FAQ />

      
    </>
  );
};

SpotDetails.propTypes = {
  element: PropTypes.object,
};

export default SpotDetails;



