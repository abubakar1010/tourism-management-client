import { useState } from "react";
import { useEffect } from "react";
import DisplayCountries from "../../DisplayCountries/DisplayCountries";

const Countries = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`https://tourism-management-server-fawn.vercel.app/countries`)
        .then( response => response.json())
        .then( res => {
            setData(res)
        })
    },[])
    return (
        <div>
            <div>

            <div className=" text-center mt-12 mb-16">
                <h1 className=" py-6 text-xl xl:text-4xl font-bold  px-3">
                Discover Your Next Adventure
                </h1>
                <p className=" text-lg font-medium  tracking-wider leading-relaxed text-black xl:px-64 px-4">
                Explore the world one country at a time with our comprehensive Packages. Dive into the rich cultures, breathtaking landscapes, and iconic landmarks of each destination through vivid descriptions, stunning imagery, and practical travel advice.
                </p>
            </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 my-16 place-content-center">
          {data.map((element) => (
            <DisplayCountries key={element._id} element={element} />
          ))}
        </div>
      </div>
        </div>
    );
};

export default Countries;