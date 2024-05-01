import { useLoaderData } from "react-router-dom";
import { Card, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
const Mylist = () => {

    const data = useLoaderData()
    console.log(data);
    const [displayData, setDisplayData] = useState(data)


    const TABLE_HEAD = ["Id", "Country", "Price", "", ""];

    const handleDelete = (id) => {

        fetch(`http://localhost:5000/tourists/delete/${id}`,{
            method: "DELETE",
        })
        .then( res => res.json())
        .then( res => {
            console.log(res);
            if (res.deletedCount > 0) {
                
                toast.success("Congratulation! This item is successfully deleted")
                const remaining = data.filter( item => item._id != id)
                setDisplayData(remaining)
            }
        })
    }

    return (
        <>

            <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head,index) => (
              <th key={index} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {displayData.map(({_id, countryName, cost }) => (
            <tr key={_id} className="even:bg-blue-gray-50/50">
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {_id}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {countryName}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {cost}
                </Typography>
              </td>
              <td className="p-4">
                <Typography  variant="small" color="blue-gray" className="font-medium cursor-pointer">
                  Update
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-medium cursor-pointer">
                  <span onClick={ () => handleDelete(_id)}>Delete</span>
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
    <ToastContainer></ToastContainer>


        </>
    );
};

export default Mylist;


