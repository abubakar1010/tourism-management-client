import { useState } from "react";
import { useEffect } from "react";
import DisplayCountries from "../../DisplayCountries/DisplayCountries";

const Countries = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/countries`)
        .then( response => response.json())
        .then( res => {
            setData(res)
        })
    },[])
    return (
        <div>
            <div>

                <div>
                    <h1>countries</h1>
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