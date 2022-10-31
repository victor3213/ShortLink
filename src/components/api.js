import React from "react";


const doRequest = (url, body = null, method = null) => {
    let options = {}
    const myHeaders = new Headers();
            myHeaders.set('Content-Type', 'application/json');
    if(body != null){
        options.body = JSON.stringify(body)
    }
    options.method = method
    options.headers = myHeaders
    return fetch(url,options)
        
}

export default doRequest