import React, { Component } from "react";
import {Menu, Icon, Container} from 'semantic-ui-react'

import Register from "../modals/Register";
const HomeNavbar = () => {
    const openModal = () => {
         <Register/>
    }
      return (
        <Container>
            <Menu secondary>
                <Menu.Menu position='left'>
                        <Menu.Item>
                            <Icon name='paper plane outline' size='big' />
                        </Menu.Item>
                        <Menu.Item
                            name='Product'
                        />
                        <Menu.Item 
                            name="Pricing">
                        </Menu.Item>
                        <Menu.Item
                            name='Resources'
                        />
                </Menu.Menu>
                <Menu.Menu position='right'>
                    <Menu.Item
                        name='Log In'
                        // onClick={this.handleItemClick}
                    />
                    <Register/>
                </Menu.Menu>
            </Menu>
        </Container>
        
      )
    }
export default HomeNavbar
// calculator