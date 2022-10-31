import React,{useEffect} from "react";
import {Menu, Icon, Input, Dropdown} from 'semantic-ui-react'

const dataAboutUser = localStorage.getItem('user');
let nameUser = dataAboutUser != null ? dataAboutUser['login'] : ''
const logOut = () =>{
    localStorage.removeItem('user')
    window.location.href = '/'
}
const UserNavbar = (props) => {
  
    return (
            <Menu secondary>
                <Menu.Menu position='left'>
                        <Menu.Item>
                            <Icon name='paper plane outline' size='big' />
                        </Menu.Item>
                        
                </Menu.Menu>
                <Menu.Menu position='right'>
                    <Dropdown item text={<Icon name='user secret'  size="big"/>}>
                        <Dropdown.Menu>
                        <Dropdown.Item>{nameUser}</Dropdown.Item>
                        <Dropdown.Item>Support</Dropdown.Item>
                        <Dropdown.Item onClick={() => logOut()}>Sign out</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Menu>
            </Menu>
    )
}

export default UserNavbar