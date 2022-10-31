import React from "react";
import { Table } from 'semantic-ui-react'
import {link} from '../configuration/config'
const headerTable = (props) => {
    return <Table.Header>
            <Table.Row>
                <Table.HeaderCell>idUrl</Table.HeaderCell>
                <Table.HeaderCell>idUser</Table.HeaderCell>
                <Table.HeaderCell>originUrl</Table.HeaderCell>
                <Table.HeaderCell>shortUrl</Table.HeaderCell>
                <Table.HeaderCell>clicks</Table.HeaderCell>
                <Table.HeaderCell>datetime</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
}
const ColumnTable = ({values}) => {
    let originUrl= ''
    if(values?.originUrl.length > 20){
        originUrl = values?.originUrl.slice(0,20)
    } else {
        originUrl = values?.originUrl
    }

    return <Table.Row key={values?.id}>
                <Table.Cell>{values?.id}</Table.Cell>
                <Table.Cell>{values?.idUser}</Table.Cell>
                <Table.Cell>{originUrl}</Table.Cell>
                <Table.Cell>{link + values?.shortUrl}</Table.Cell>
                <Table.Cell>{values?.clicks}</Table.Cell>
                <Table.Cell>{values?.datetime}</Table.Cell>

            </Table.Row>
}

const Tables = ({data}) => {
    if(data?.Status != 'Success') return 'No Records Found :('
    return   <Table singleLine>
                {headerTable()}
                <Table.Body>
                   {data.data.data.map((answer, i) => {     
                        return (<ColumnTable values={answer} />) 
                    })}
                </Table.Body>
            </Table>
}

export default Tables