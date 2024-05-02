
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../Private/PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AddSpot from "../Component/AddSpot/AddSpot";
import Spot from "../Component/Spot/Spot";
import AllSpot from "../Pages/AllSpot/AllSpot";
import SpotDetails from "../Component/SpotDetails/SpotDetails";
import Mylist from "../Component/MyList/Mylist";
import UpdateSpot from "../Component/UpdateSpot/UpdateSpot";
import CountryCard from "../Component/CountryCard/CountryCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
        {
            path: "/",
            element:<Home />,
            children:[
              {
                path:"/",
                element: <Spot />,
                loader: () => fetch('https://tourism-management-server-fawn.vercel.app/tourists')
              },
            ]
        },
        {
            path: "/login",
            element:<Login />
        },
        {
            path: "/register",
            element:<Register />
        },
        {
            path: "/allSpot",
            element:<AllSpot />,
            loader: () => fetch('https://tourism-management-server-fawn.vercel.app/tourists')
        },
        {
            path: "/details/:id",
            element: <PrivateRoute>
              <SpotDetails />
            </PrivateRoute>,
            loader: ({params}) => fetch(`https://tourism-management-server-fawn.vercel.app/tourists/${params.id}`)
        },
        {
            path: "/countryCards/cards/:countryName",
            element: <PrivateRoute>
              <CountryCard />
            </PrivateRoute>,
            loader: ({params}) => fetch(`https://tourism-management-server-fawn.vercel.app/countries/countryCards/cards/${params.countryName}`)
        },
        {
            path: "/myList/email/:email",
            element: <PrivateRoute>
              <Mylist />
            </PrivateRoute>,
            loader: ({params}) => fetch(`https://tourism-management-server-fawn.vercel.app/tourists/email/${params.email}`)
        },
        {
            path: "/update/:id",
            element: <PrivateRoute>
              <UpdateSpot />
            </PrivateRoute>,
            loader: ({params}) => fetch(`https://tourism-management-server-fawn.vercel.app/tourists/update/${params.id}`)
        },
        
        {
            path: "/addSpot",
            element: <PrivateRoute>
              <AddSpot />
            </PrivateRoute>,
        },
    ]
  },
]);

export default router;
