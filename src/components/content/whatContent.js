import React, { Component } from "react";


import CreateLinks from "./createLink";
import CustomUrl from "./createCustomUrl";
import Links from "./links";
import Users from "./users";

const WhatContent = (props) => {

    const SelectContent = (index) => {
        if(index == 'My Links'){
            return <Links links='my'/>
        } else if (index == 'All Links') {
            return <Links links='all'/>
        } else if (index == 'Custom Links') {
            return <CustomUrl name='custom'/>
        } else if (index == 'Create Link'){
            return <CreateLinks name='simple'/>
        }else {
            return <Users/>
        }
    }
    
    return (
        <>
            {SelectContent(props?.activeIndex)}
        </>
    )
}

export default WhatContent