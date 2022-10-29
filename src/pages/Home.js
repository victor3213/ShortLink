import React from "react";

import HomeNavbar from "../components/navbar/homeNavbar";
import BodyHomePage from "./BodyHomePage";
import Footer from "../components/footer";

const Home = () => {
    return (
        <>
            <HomeNavbar/>
            <BodyHomePage/>
            <Footer/>
        </>
    )
}

export default Home