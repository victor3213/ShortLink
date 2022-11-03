import React, {Component, useEffect, useState}from "react";
import doRequest from "../api";
import {Table} from 'semantic-ui-react'

const headerTable = (props) => {
    return <Table.Header>
            <Table.Row>
                <Table.HeaderCell key={'idUser'}>idUser</Table.HeaderCell>
                <Table.HeaderCell key={'FirstName'}>First Name</Table.HeaderCell>
                <Table.HeaderCell key={'LastName'}>Last Name</Table.HeaderCell>
                <Table.HeaderCell key={'Login'}>Login</Table.HeaderCell>
                <Table.HeaderCell key={'Role'}>Role</Table.HeaderCell>
                <Table.HeaderCell key={'Password'}>Password</Table.HeaderCell>
                <Table.HeaderCell key={'DateTime'}>Date Time</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
}

const ColumnTable = ({values}) => {
    let pass = ''
    if(values?.password.length > 20){
        pass = values?.password.slice(0,20)
    } else {
        pass = values?.originUrl
    }
    let role = (values?.role_id == 1) ? 'Admin' : 'Users'

    return <Table.Row key={values?.id}>
                <Table.Cell>{values?.id}</Table.Cell>
                <Table.Cell>{values?.firstName}</Table.Cell>
                <Table.Cell>{values?.lastName}</Table.Cell>
                <Table.Cell>{values?.login}</Table.Cell>
                <Table.Cell>{role}</Table.Cell>
                <Table.Cell>{pass}</Table.Cell>
                <Table.Cell>{values?.datetime}</Table.Cell>
            </Table.Row>
}
const Users = (props) => {
    const [users, setUsers] = useState()

    useEffect(() => {
        let prepareData = {
            action: 'getAllUsers',
            userId: 1
        }
    
        doRequest("http://167.235.192.111:90/api", prepareData, 'POST')
        .then((response) => response.json())
        .then((data) => {
            setUsers(data)
        });
    }, [props])

    if(users?.Status != 'Success') return 'No Records Found :('
    return (
        <>
            <Table singleLine>
                {headerTable()}
                <Table.Body>
                   {users.Data.data.map((answer, i) => {     
                        return (<ColumnTable values={answer} />) 
                    })}
                </Table.Body>
            </Table>
        </>
    )
}

export default Users