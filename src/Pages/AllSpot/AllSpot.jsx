import { useLoaderData } from "react-router-dom";
import { useState } from "react";

import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";
import DisplaySpots from "../../Component/DisplaySpots/DisplaySpots";

const AllSpot = () => {
    const data = useLoaderData()

    const [displayData, setDisplayData] = useState([]);
    const [isSorted, setIsSorted] = useState(false)


    const handleSort = async() => {
        setIsSorted(true)
        const sortedData = data.sort( (a, b) => {
            return a.cost - b.cost
        })
        
        setDisplayData(sortedData)
        
    }

    return (
        <div className=" my-24">
            <div className=" text-center">
                <h1 className=" py-6 text-xl xl:text-4xl font-bold  px-3">
                    Skyline Serenity Where Luxury Living Reaches New Heights
                </h1>
                <p className=" text-lg font-medium  tracking-wider leading-relaxed text-black xl:px-64 px-4">
                    Explore our carefully curated collection of residential properties,
                    each offering a blend of luxury, comfort, and natural beauty. Immerse
                    yourself in panoramic views and peaceful landscapes.
                </p>
            </div>
            <div className=" my-12 text-right">
                <Menu>
                    <MenuHandler>
                        <Button>
                            Sort By Cost
                        </Button>
                    </MenuHandler>
                    <MenuList>
                        <MenuItem onClick={handleSort}>Low To High</MenuItem>
                    </MenuList>
                </Menu>
            </div>
            <div className="space-y-16">
                {
                    isSorted? displayData.map((element) => (
                        <DisplaySpots key={element.id} element={element} />
                    )) : data.map((element) => (
                        <DisplaySpots key={element.id} element={element} />
                    ))
                }
                
            </div>
        </div>
    );
};

export default AllSpot;


