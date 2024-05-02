import { useLoaderData } from "react-router-dom";
import DisplaySpots from "../DisplaySpots/DisplaySpots";

const CountryCard = () => {
    const data = useLoaderData()

    console.log(data);
    return (
        <div className=" space-y-12">
            {
                data.map( item => <DisplaySpots key={item._id} element={item}/>)
            }
        </div>
    );
};

export default CountryCard;