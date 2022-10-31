import React from "react";
import { Container } from "semantic-ui-react";

import UserNavbar from "../components/navbar/userNavbar";
import Meniu from '../components/menu'

const Dashboard = () => {
    useEffect(() => {
        let dataAboutUser = localStorage.getItem('user');
        if(dataAboutUser == null){
            window.location.href = '/'
        }
    }, [])
    
    return (
        <Container>
            <UserNavbar/>
            <Meniu/>        
        </Container>
    )
}

export default Dashboard