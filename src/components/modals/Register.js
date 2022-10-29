import React, { useState } from "react";
import {Menu, Button, Header, Icon, Modal, Checkbox, Form, Input } from "semantic-ui-react";

const Register = (props) => {
    const [open, setOpen] = useState(false)
    const data = {}
    const errors = {}
    
    const validateData = (datada, val) => {
        if(val.value)  data[val?.name] = {type: val.type, value: val.value}
    }

    const userRegistration = () => {
        if(data?.length == undefined) {
            
        }

        let error = false

        for (const val in data) {
            if (data[val].type == 'text') {
                console.log(data[val]?.value.length);
                if (data[val]?.value.length < 4 || data[val]?.value.length  > 20){

                }
            } else if (data[val].type == 'password') {

            }
        }
    }

    return (
        <Modal
            basic
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size="small"
            trigger={<Menu.Item name={props.name}></Menu.Item>}
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
                            width={'3'}
                            name='firstName' 
                            placeholder='First Name...' 
                            onChange={(el, val) => validateData(el, val)}    
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Last Name</label>
                        <Input
                            name='lastName'
                            placeholder='Last Name...'
                            onChange={(el, val) => validateData(el, val)}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Login</label>
                        <Input
                            name='login' 
                            placeholder='Login...' 
                            onChange={(el, val) => validateData(el, val)}    
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <Input 
                            name='password'
                            type='password'
                            placeholder='Password...' 
                            onChange={(el, val) => validateData(el, val)}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Confirm Password</label>
                        <Input
                            name='confirmPassword'
                            type='password'
                            placeholder='Confirm...' 
                            onChange={(el, val) => validateData(el, val)}    
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
                    onClick={() => userRegistration()}
                >
                    <Icon name='checkmark' /> Register
                </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default Register