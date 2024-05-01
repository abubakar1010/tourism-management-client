import { FaStar } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BiDollar } from "react-icons/bi";

const DisplaySpots = ({ element }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const {
    _id,
    spotName,
    countryName,
    time,
    reviews,
    image,
    cost,
    location,
    rating,
    description,
  } = element;
  return (
    <div data-aos="fade-up" data-aos-duration="1000" className=" h-[420px] ">
      <div className="  flex items-center shadow-xl border-2 border-[#0003] h-full rounded-xl gap-12">
        <div className=" ">
          <img
            src={image}
            alt=""
            className=" w-full h-[410px] object-cover pl-4 py-6"
          />
        </div>

        <div className=" w-[70%] pr-6">
          <div className=" flex justify-between items-center w-full">
            <div className=" flex gap-4 items-center pb-4">
              <p className=" bg-[#f1f2f3] text-[#323637] px-6 py-1 rounded-md">
                Family
              </p>
              <p className=" bg-[#f1f2f3] text-[#323637] px-6 py-1 rounded-md">
                Historical
              </p>
              <p className=" bg-[#f1f2f3] text-[#323637] px-6 py-1 rounded-md">
                Culture
              </p>
            </div>
            <div className="pb-4">
              <p className=" text-white bg-green-500 px-4 py-1  rounded-md">
                10% OFF
              </p>
            </div>
          </div>
          <div className="  py-3">
            <div className=" flex items-center justify-between">
              <h1 className=" font-bold  text-xl ">{spotName}</h1>
              <div className=" flex items-center gap-2">
                <FaStar className=" text-xl text-orange-500" />
                <p className=" font-medium text-lg ">{rating || "4.8"}</p>
                <p className=" font-medium text-lg ">( {reviews || "530 reviews"} )</p>
              </div>
            </div>
          </div>
          <div className=" flex justify-between pb-4">
            <p className="">{description.slice(0, 140)}...</p>
          </div>

          <div className=" flex justify-between pl-4">
          <div className=" flex gap-6 my-2 ">
            
            <div className="space-y-3">
              <p className=" text-lg font-bold text-[#323637]">
                Destination:
              </p>
              <p className=" text-lg font-bold text-[#323637]">Duration:</p>
              <p className=" text-lg font-bold text-[#323637]">
                Operated in:
              </p>
            </div>
            <div className="space-y-3">
              <p className=" text-lg text-[#505557]">{countryName}</p>
              <p className=" text-lg text-[#505557]">{time}</p>
              <p className=" text-lg text-[#505557]">English</p>
            </div>
          </div>
          <div className=" space-y-2">
            <div className=" flex items-center ">
                <p className="  text-[#505557]">From</p>
                <BiDollar className=" " />
                <p className="line-through">{cost}</p>
            </div>
            <div className=" flex items-center text-[#378367] ">
                <p className=" text-lg font-medium">Us</p>
                <BiDollar />
                <p>{cost - cost*0.1}</p>
            </div>
            <div className=" flex items-center">
                <p className=" text-lg font-medium text-[#505557]">You Save</p>
                <BiDollar />
                <p>{cost*0.1 }</p>
            </div>
            
          </div>
          </div>

          <div className=" flex justify-between px-3 items-center pt-4 pb-7">
            <div className=" flex item-center gap-1">
              <IoLocation className=" text-2xl text-[#FF8938] " />
              <p>{location}</p>
            </div>
            <div>
              <NavLink to={`/details/${_id}`}>
                <button className=" bg-gradient-to-r from-[#6dc234] to-[#6dc234ad]  py-2 px-4 text-white font-bold  rounded-md text-xl hover:scale-105 duration-500 hover:duration-500  ">
                  View Details
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

DisplaySpots.propTypes = {
  element: PropTypes.object,
};

export default DisplaySpots;
