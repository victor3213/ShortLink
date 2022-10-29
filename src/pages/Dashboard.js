import React from "react";
import { Container } from "semantic-ui-react";

import UserNavbar from "../components/navbar/userNavbar";
import Meniu from '../components/menu'

const Dashboard = () => {
    return (
        <Container>
            <UserNavbar/>
            <Meniu/>        
        </Container>
    )
}

export default Dashboard