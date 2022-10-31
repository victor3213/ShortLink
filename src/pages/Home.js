import React, {useEffect} from "react";

import HomeNavbar from "../components/navbar/homeNavbar";
import BodyHomePage from "./BodyHomePage";
import Footer from "../components/footer";

const Home = () => {
    useEffect(() => {
        let dataAboutUser = localStorage.getItem('user');
        if(dataAboutUser != null){
            window.location.href = '/jfhdskjh'
        }
    }, [])
    
    return (
        <>
            <HomeNavbar/>
            <BodyHomePage/>
            <Footer/>
        </>
    )
}

export default Home