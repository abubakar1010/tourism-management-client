import { useLoaderData } from "react-router-dom";
import PropTypes from "prop-types";
import "./slide.css";
import { IoBedOutline, IoHomeOutline, IoLocation, IoTimeOutline } from "react-icons/io5";
import { FaPersonRunning, FaUmbrellaBeach, FaUser } from "react-icons/fa6";
import { MdOutlineBookmarkAdded, MdOutlineKitchen, MdOutlinePool } from "react-icons/md";
import { GiRapidshareArrow } from "react-icons/gi";
import { useContext, useState } from "react";
import { TbBath } from "react-icons/tb";
import { HiMiniCircleStack, HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import { PiIntersectSquareLight } from "react-icons/pi";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import moment from "moment";
import { Option, Select } from "@material-tailwind/react";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { BiCoinStack, BiDollar } from "react-icons/bi";
import { Helmet } from "react-helmet-async";
import { FaStar } from "react-icons/fa";

const SpotDetails = () => {
  const data = useLoaderData();

  const {
    image,
    spotName,
    countryName,
    rating,
    location,
    cost,
    description,
    season,
    reviews,
    time,
    visitor
  } = data;
  //console.log(data);

  const { user } = useContext(AuthContext);

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

          <section className="  mb-16 mt-12">
            <div>
              <div className=" flex flex-col xl:flex-row gap-6 justify-between my-24">
                <div className=" shadow-xl px-8 py-6 border border-[#00000086]  h-[430px] mt-20 xl:mt-0 ">
                  <div className=" xl:w-[320px]">
                    <div className=" flex items-center gap-6">
                      <div>
                        <img
                          className="cursor-pointer max-w-[80px] rounded-full w-14 h-14  object-cover"
                          src={user?.photoURL}
                        />
                      </div>
                      <div>
                        <p className=" font-bold  text-xl">
                          {user?.displayName}
                        </p>
                        <p className=" font-medium text-lg  ">{user?.email}</p>
                      </div>
                    </div>
                    <div className=" mt-12 mb-7">
                      <input
                        type="text"
                        placeholder="Your Name"
                        name=""
                        id=""
                        className=" border-2 rounded-md mb-4 py-2
                       border-[#2a2929a1] w-full px-6"
                      />
                      <input
                        type="text"
                        placeholder="Your Phone"
                        name=""
                        id=""
                        className=" border-2 rounded-md mb-2
                       border-[#2a2929a1] mt-4 py-2 w-full px-6"
                      />
                    </div>

                    <p className="  font-medium">{`I'm interested in this property and I'd like to know more details.`}</p>
                    <button className="mt-6 bg-gradient-to-r from-[#6dc234] to-[#6dc234ad] w-full py-3 rounded-lg font-bold text-white  text-xl">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
              
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

SpotDetails.propTypes = {
  element: PropTypes.object,
};

export default SpotDetails;
