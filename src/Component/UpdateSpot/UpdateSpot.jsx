import { Textarea } from "@material-tailwind/react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const UpdateSpot = () => {

    const data = useLoaderData()

    console.log(data);

    const {_id, name, email, spotName, countryName, image, location, cost, season, time, visitor, description} = data;
    const handleUpdate = (e) => {
        e.preventDefault()
        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const spotName = form.spotName.value;
        const countryName = form.countryName.value;
        const image = form.image.value;
        const location = form.location.value;
        const cost = form.cost.value;
        const season = form.season.value;
        const time = form.time.value;
        const visitor = form.visitor.value;
        const description = form.description.value;

        const spotData = {name, email, spotName, countryName, image, location, cost, season, time, visitor, description};

        //console.log(spotData);
        fetch(`https://tourism-management-server-fawn.vercel.app/tourists/update/${_id}`,{
            method: "PUT",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(spotData)
        })
        .then( res => res.json())
        .then( result => {
            console.log(result);
            
                toast.success("Congratulations! Your data has been successfully added")
                // form.reset()
            
        })
        .catch( error => {
          toast.error(`Oops! ${error.message}`)
        })
    }


    return (
        <>
        <Helmet>
        <title>Update Profile | ExploreHub</title>
      </Helmet>
      <div className=" my-28 lg:flex gap-16 ">
        <div className="shadow-xl flex justify-center w-full border border-[#29282859] rounded-sm pt-8">
          <form onSubmit={handleUpdate} className="w-full px-8 mb-7 lg:mb-2">
            <h1 className=" font-bold text-xl mb-6">Add Tourist Spot</h1>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="name"
                defaultValue={name}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:border-green-300 appearance-none   focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Your Name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="email"
                defaultValue={email}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:border-green-300 appearance-none   focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Your Email
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="spotName"
                defaultValue={spotName}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:border-green-300 appearance-none   focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Spot Name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="countryName"
                defaultValue={countryName}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:border-green-300 appearance-none   focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Country Name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="image"
                defaultValue={image}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:border-green-300 appearance-none   focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Image URL
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="location"
                defaultValue={location}
                id="location"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:border-green-300 appearance-none   focus:outline-none focus:ring-0 peer"
                placeholder=" "
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Location
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="cost"
                defaultValue={cost}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:border-green-300 appearance-none   focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Average Cost
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="season"
                defaultValue={season}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:border-green-300 appearance-none   focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Season
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="time"
                defaultValue={time}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:border-green-300 appearance-none   focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Travel Time
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="visitor"
                defaultValue={visitor}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:border-green-300  appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Total Visitor
              </label>
            </div>
            <Textarea defaultValue={description} name="description" color="green" label="Short Description" />

              <button
                type="submit"
                className="mt-6 bg-gradient-to-r from-[#6dc234] to-[#6dc234ad] px-12  py-3 rounded-lg font-bold text-white text-xl "
              >
                Update
              </button>

          </form>
        </div>
      </div>
      <ToastContainer></ToastContainer>
        </>
    );
};

export default UpdateSpot;