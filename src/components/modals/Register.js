import React, { useState } from "react";
import {Menu, Button, Header, Icon, Modal, Form, Input, Message, List} from "semantic-ui-react";
import doRequest from "../api";


const TemplateErrors = (data) => {
    let arr = []
    for(let val in data){
        arr.push(data[val])
    }
    
    return <>
            <Message
                error
                header='Errors'
                content={<List items={arr} />}
            />
    </>
}
const sendReuest = () => {

}

const Register = (props) => {
    const [open, setOpen] = useState(false)
    const [error, setError] = useState(false)
    const [tempErr, setTempErr] = useState('')
    const data = {}
   
    
    const getData = (datada, val) => {
        data[val?.name] = {type: val.type, value: val.value}
    }

    
    const userRegistration = () => {
        const errors = {}
        let error = false
        const propOwn = Object.getOwnPropertyNames(data);
        if(propOwn.length == 0){
            errors['all']  = 'Missing all data'
            error = true
        }

        for(const val in data){
            if(data[val]?.type == 'text' && data[val]?.value.length < 4){
                error = true
                errors[val] = 'Length of '+ val + 'is < 4' 
            }

            if(data[val]?.type == "password"){
                if(data[val]?.value.length < 6){
                    error = true
                    errors[val] = 'Length of '+ val + 'is < 6' 
                }
            }
        }

        if(data['password']?.value == undefined || data['confirmPassword']?.value == undefined){
            error = true
            errors['passowrds'] = 'passowrds not equal'
        }
        if(data['password']?.value  !=  data['confirmPassword']?.value){
            error = true
            errors['passowrds'] = 'passowrds not equal'
        }
        if(error == true){
            setTempErr(TemplateErrors(errors))
        } else {
            setTempErr('')
            let prepareData = {
                login: data['login']?.value,
                firstName: data['firstName']?.value,
                lastName: data['lastName']?.value,
                password: data['password']?.value,
                action: 'registerUser'
            }

            doRequest("http://167.235.192.111:90/", prepareData, 'POST')
                .then((response) => response.json())
                .then((data) => {
                    if(data['Status'] == 'Success'){
                        localStorage.setItem('user', JSON.stringify(data['data']));
                        window.location.href = '/jfhdskjh';
                    } else {
                        errors['error'] = data['Message']
                        setTempErr(TemplateErrors(errors))
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
                            onChange={(el, val) => getData(el, val)}    
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Last Name</label>
                        <Input
                            name='lastName'
                            placeholder='Last Name...'
                            onChange={(el, val) => getData(el, val)}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Login</label>
                        <Input
                            name='login' 
                            placeholder='Login...' 
                            onChange={(el, val) => getData(el, val)}    
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <Input 
                            name='password'
                            type='password'
                            placeholder='Password...' 
                            onChange={(el, val) => getData(el, val)}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Confirm Password</label>
                        <Input
                            name='confirmPassword'
                            type='password'
                            placeholder='Confirm...' 
                            onChange={(el, val) => getData(el, val)}    
                        />
                    </Form.Field>
                </Form>
            </Modal.Content>
            <Modal.Actions>
            {tempErr}
                
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