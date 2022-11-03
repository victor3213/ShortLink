import React ,{ useEffect, useState }from "react";

import doRequest from "../api";
import Tables from './table'


const Links = (props) => {
    const [links, setLinks] = useState({})
    const items = JSON.parse(localStorage.getItem('user'))
    useEffect(() => {
        let prepareData = {
            action: 'getUrls',
            token: JSON.stringify(items.token),
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