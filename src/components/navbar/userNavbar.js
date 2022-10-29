import React from "react";
import {Menu, Icon, Input, Dropdown} from 'semantic-ui-react'
const options = [
    {
      key: 'today',
      text: 'today',
      value: 'today',
      content: 'Today',
    },
    {
      key: 'this week',
      text: 'this week',
      value: 'this week',
      content: 'This Week',
    },
    {
      key: 'this month',
      text: 'this month',
      value: 'this month',
      content: 'This Month',
    },
  ]
const UserNavbar = (props) => {
    return (
            <Menu secondary>
                <Menu.Menu position='left'>
                        <Menu.Item>
                            <Icon name='paper plane outline' size='big' />
                        </Menu.Item>
                        
                </Menu.Menu>
                <Menu.Menu position='right'>
                        <Menu.Item>
                        <Input
                            icon={<Icon 
                                    name='search' 
                                    inverted 
                                    circular 
                                    link
                                    onClick={() => console.log('Search')}
                                />}
                            placeholder='Search link...'
                        />
                        </Menu.Item>
                    <Dropdown item text={<Icon name='user secret'  size="big"/>}>
                        <Dropdown.Menu>
                        <Dropdown.Item>English</Dropdown.Item>
                        <Dropdown.Item>Support</Dropdown.Item>
                        <Dropdown.Item onClick={() => console.log('logOut')}>Sign out</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Menu>
            </Menu>
    )
}

export default UserNavbar