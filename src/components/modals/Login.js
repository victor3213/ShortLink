import React, { Component, useState } from "react";
import {Menu, Button, Header, Icon, Modal, Checkbox, Form, Input } from "semantic-ui-react";

const Login = () => {
    const [open, setOpen] = useState(false)
    return (
        <Modal
            basic
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size="small"
            trigger={<Menu.Item name='Login'></Menu.Item>}
        >
            <Header icon>
                <Icon name='plug'  size='big' color='grey'/>
                Login
            </Header>
           <Modal.Content>
                <Form inverted>
                    <Form.Field>
                        <label>Login</label>
                        <Input
                            name='login' 
                            placeholder='Login...' 
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <Input 
                            name='password'
                            type='password'
                            placeholder='Password...' 
                        />
                    </Form.Field>
                </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button basic color='red' inverted onClick={() => setOpen(false)}>
                    <Icon name='remove' /> Cancel
                </Button>
                <Button 
                    color='green' 
                    inverted 
                >
                    <Icon name='checkmark' /> Login
                </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default Login