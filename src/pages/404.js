import React from "react";
import { Button, Header, Icon, Segment } from 'semantic-ui-react'
const ErrorPage = () => {
    return <>
        <Segment placeholder>
            <Header icon>
                Dude sorry you don't have access here
                <Icon size='big' color='red' name='eye' />
            </Header>
        </Segment>
    </> 
}

export default ErrorPage