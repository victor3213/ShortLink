import React, { Component, useState } from "react";
import {Menu, Button, Header, Icon, Modal, Checkbox, Form, Input } from "semantic-ui-react";
import doRequest from "../api";

const Login = () => {
    const [open, setOpen] = useState(false)
    const values = {}

    const saveValue = (e, val) => {
        values[val?.name] = val?.value
    }

    const loginUser = () => {
        let error = false
        for(let val in values){
            if(values[val].length == 0){
                error = true
            }
        }

        if (error) {

        } else {
            let prepareData = {
                login: values['login'],
                password: values['password'],
                action: 'loginUser'
            }

            doRequest("http://167.235.192.111:90/api", prepareData, 'POST')
                .then((response) => response.json())
                .then((data) => {
                    if(data['Status'] == 'Success'){
                        localStorage.setItem('user', JSON.stringify(data['data']));
                        window.location.href = '/jfhdskjh';
                    } else {
                        
                    }
                });
        }
    }

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
                            onChange={(e, val) => saveValue(e, val)}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <Input 
                            name='password'
                            type='password'
                            placeholder='Password...'
                            onChange={(e, val) => saveValue(e, val)}
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
                    onClick={() => loginUser()}
                >
                    <Icon name='checkmark' /> Login
                </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default Login