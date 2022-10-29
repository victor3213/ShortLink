import React, { Component } from "react";


import CustomLinks from "./customLink";
import Links from "./links";
import Users from "./users";

const WhatContent = (props) => {

    const SelectContent = (index) => {
        if(index == 'My Links'){
            return <Links links='my'/>
        } else if (index == 'All Links') {
            return <Links links='all'/>
        } else if (index == 'Custom Links') {
            return <CustomLinks/>
        } else {
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