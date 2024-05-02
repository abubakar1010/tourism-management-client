import { Link, useLoaderData } from "react-router-dom";
import { Card, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
const Mylist = () => {

    const data = useLoaderData()
    console.log(data);
    const [displayData, setDisplayData] = useState(data)


    const TABLE_HEAD = ["Id", "Country", "Price", "", ""];

    const handleDelete = (id) => {
      console.log(id);
      Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
          if (result.isConfirmed) {


              fetch(`http://localhost:5000/tourists/delete/${id}`, {
                  method: 'DELETE'
              })
                  .then(res => res.json())
                  .then(result => {
                      console.log(result);
                      if (result.deletedCount > 0) {
                          Swal.fire(
                              'Deleted!',
                              'Your item has been deleted.',
                              'success'
                          )
                          const remaining = displayData.filter(item => item._id !== id);
                          setDisplayData(remaining)
                      }
                  })

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
                  <Link to={`/update/${_id}`}>
                  Update
                  </Link>
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


