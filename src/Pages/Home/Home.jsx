import { Helmet } from "react-helmet-async";
import Banner from "../../Component/Banner/Banner";
import { Outlet } from "react-router-dom";


const Home = () => {
    return (
        <>
        <Helmet>
            <title>Home | ExploreHub </title>
        </Helmet>
            <div>
                <Banner />
                <Outlet></Outlet>
            </div>
        </>
    );
};

export default Home;