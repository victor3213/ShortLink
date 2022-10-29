import React, { useState } from 'react'
import { Grid, Menu } from 'semantic-ui-react'


import WhatContent from './content/whatContent'

const ROLE = 'admin'
const Meniu = () => {
    const [activeIndex, setActiveIndex] = useState('My Links')
    const handleClick = (e, val) => {
        let index = val?.name
        let newIndex = (activeIndex === index) ? -1 : index
        setActiveIndex(newIndex)
    }
    const ifIsAdmin = (role) => {
        if(role == ROLE){
            return <>
                <Menu.Item
                    name='Users'
                    active={activeIndex === 'Users'}
                    onClick={(e, val) => handleClick(e, val)}
                />
                <Menu.Item
                    name='All Links'
                    active={activeIndex === 'All Links'}
                    onClick={(e, val) => handleClick(e, val)}
                />
            </>
        }
        return ''
    }

    return (
        <Grid>
            <Grid.Column width={4}>
            <Menu fluid vertical tabular>
                <Menu.Item
                    name='My Links'
                    active={activeIndex === 'My Links'}
                    onClick={(e, val) => handleClick(e, val)}
                />
                <Menu.Item
                    name='Custom Links'
                    active={activeIndex === 'Custom Links'}
                    onClick={(e, val) => handleClick(e, val)}
                />
                {ifIsAdmin(ROLE)}
            </Menu>
            </Grid.Column>

            <Grid.Column stretched width={12}>
                <WhatContent
                    activeIndex={activeIndex}
                />
            </Grid.Column>
        </Grid>
)
}

export default Meniu