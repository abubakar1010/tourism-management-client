import PropTypes from "prop-types"
import { FaEye } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const DisplayCountries = ({element}) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    
        const {_id, image, countryName, description} = element
    
        return (
            <>
                <div data-aos="zoom-in-up" data-aos-duration="1000" className="  w-full ">
          <div className=" w-full">
            <div className=" w-full ">
              <img
                src={image}
                alt=""
                className=" h-[340px] w-full object-cover"
              />
             
            </div>
    
             <div className="  mt-9 mb-4">
             <p className="  text-xl font-bold  text-[#3f3c3c]">{countryName}</p>
             </div>
                    <div className="max-h-[100px]">
                        <p className="text-[#3f3c3c]">{description} </p>
                    </div>
    
            <div className="pt-14 pb-7 text-right">
            <NavLink to={`/countryCards/card/${_id}`}>
            <button className=" bg-gradient-to-r from-[#6dc234] to-[#6dc234ad]  py-2 px-4 text-white font-bold  rounded-md text-xl hover:scale-105 duration-500 hover:duration-500  ">
                Read More
            </button>
            </NavLink>
    
            </div>
          </div>
        </div>
            </>
        );
    };
    
    DisplayCountries.propTypes = {
    
        element: PropTypes.object
    }
export default DisplayCountries;

