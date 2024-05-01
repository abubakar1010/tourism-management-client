
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../Private/PrivateRoute";
import BlogDetails from "../Component/Banner/BlogDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AddSpot from "../Component/AddSpot/AddSpot";
import Spot from "../Component/Spot/Spot";
import AllSpot from "../Pages/AllSpot/AllSpot";
import SpotDetails from "../Component/SpotDetails/SpotDetails";
import Mylist from "../Component/MyList/Mylist";
import UpdateSpot from "../Component/UpdateSpot/UpdateSpot";

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
                loader: () => fetch('http://localhost:5000/tourists')
              }
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
            loader: () => fetch('http://localhost:5000/tourists')
        },
        {
            path: "/details/:id",
            element: <PrivateRoute>
              <SpotDetails />
            </PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/tourists/${params.id}`)
        },
        {
            path: "/myList/email/:email",
            element: <PrivateRoute>
              <Mylist />
            </PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/tourists/email/${params.email}`)
        },
        {
            path: "/update/:id",
            element: <PrivateRoute>
              <UpdateSpot />
            </PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/tourists/update/${params.id}`)
        },
        {
          path: "/blogDetails/:id",
          element: <PrivateRoute>
            <BlogDetails />
          </PrivateRoute>,
          loader: () => fetch('/blog.json')
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
