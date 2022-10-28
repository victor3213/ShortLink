import React, { useState } from "react";
import {Menu, Button, Header, Icon, Modal, Checkbox, Form, Input } from "semantic-ui-react";

const Register = () => {

    const [open, setOpen] = useState(false)
    return (
        <Modal
            basic
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size="small"
            trigger={<Menu.Item name='Register' ></Menu.Item>}
        >
            <Header icon>
                <Icon name='registered'  size='big' color='grey'/>
                Register
            </Header>
            <Modal.Content>
                <Form inverted>
                    <Form.Field>
                        <label>First Name</label>
                        <Input
                            name='firstName' 
                            placeholder='First Name...' />
                    </Form.Field>
                    <Form.Field>
                        <label>Last Name</label>
                        <Input
                            name='lastName'
                            placeholder='Last Name...' />
                    </Form.Field>
                    <Form.Field>
                        <label>Login</label>
                        <Input
                            name='login' 
                            placeholder='Login...' />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <Input 
                            type='password' 
                            placeholder='Password...' />
                    </Form.Field>
                    <Form.Field>
                        <label>Confirm Password</label>
                        <Input type='password' placeholder='Confirm...' />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox label='I agree to the Terms and Conditions' />
                    </Form.Field>
                </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button basic color='red' inverted onClick={() => setOpen(false)}>
                    <Icon name='remove' /> Cancel
                </Button>
                <Button color='green' inverted onClick={() => setOpen(false)}>
                    <Icon name='checkmark' /> Register
                </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default Register