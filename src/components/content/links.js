import React ,{ useEffect, useState }from "react";
import {Pagination} from 'semantic-ui-react'

import doRequest from "../api";
import Tables from './table'

const pagination = (totalPages= 10) => {
   return <>
        <Pagination
            boundaryRange={0}
            defaultActivePage={1}
            ellipsisItem={null}
            firstItem={null}
            lastItem={null}
            siblingRange={1}
            totalPages={totalPages}
        />
   </>
}

const Links = (props) => {
    const [links, setLinks] = useState({})
    useEffect(() => {
        let prepareData = {
            userName: '21312eqwsedsqas',
            action: 'getUrls',
            userId: 1,
            limit: 10,
            offset: 0,
            all: (props?.links === 'my') ? false : true
        }
    
        doRequest("http://167.235.192.111:90/api", prepareData, 'POST')
        .then((response) => response.json())
        .then((data) => {
            setLinks(data)
        });
    }, [props])
    
  

    
    return (
        <>
            <Tables data={links}/>
        </>
    )
}

export default Links