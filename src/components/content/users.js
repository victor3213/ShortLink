import React, {Component, useEffect, useState}from "react";
import doRequest from "../api";
import {Table} from 'semantic-ui-react'
import {link} from '../configuration/config'

const CreateRow = () => {
    
}

const Pagination = () => {
    return <>
        <Pagination
            boundaryRange={0}
            defaultActivePage={1}
            ellipsisItem={null}
            firstItem={null}
            lastItem={null}
            siblingRange={1}
            totalPages={10}
            prevItem={() => {console.log("pagination")}}
        />
    </>
}

const Users = (props) => {
    const [users, setUsers] = useState()
    const [itemPerPage, setItemPerPage] = useState(20)

    useEffect(() => {

        let prepareData = {
            userName: '21312eqwsedsqas',
            action: 'getAllUsers',
            itemPerPage: itemPerPage
        }

     

    }, [])

    
    return (
        <>
             <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Login</Table.HeaderCell>
                        <Table.HeaderCell>Is Admin</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>John Lilki</Table.Cell>
                        <Table.Cell>September 14, 2013</Table.Cell>
                        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                        <Table.Cell>No</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Jamie Harington</Table.Cell>
                        <Table.Cell>January 11, 2014</Table.Cell>
                        <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
                        <Table.Cell>Yes</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Jill Lewis</Table.Cell>
                        <Table.Cell>May 11, 2014</Table.Cell>
                        <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
                        <Table.Cell>Yes</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </>
    )
}

export default Users