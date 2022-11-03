import React from "react";
import { Table } from 'semantic-ui-react'
import {backLink} from '../configuration/config'
const headerTable = (props) => {
    return <Table.Header>
            <Table.Row>
                <Table.HeaderCell key={'idUrl'}>idUrl</Table.HeaderCell>
                <Table.HeaderCell key={'idUser'}>idUser</Table.HeaderCell>
                <Table.HeaderCell key={'originUrl'}>originUrl</Table.HeaderCell>
                <Table.HeaderCell key={'shortUrl'}>shortUrl</Table.HeaderCell>
                <Table.HeaderCell key={'clicks'}>clicks</Table.HeaderCell>
                <Table.HeaderCell key={'datetime'}>datetime</Table.HeaderCell>
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
                <Table.Cell>{backLink + values?.shortUrl}</Table.Cell>
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