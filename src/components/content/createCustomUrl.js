import React, {useState, useEffect} from "react";
import {List, Segment, Input, Label, Button} from 'semantic-ui-react'
import doRequest from  '../../components/api'

import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const TemplateUrl = (oldUrl ='', newUrl = '') => {
    if(oldUrl.length > 50){
        oldUrl = oldUrl.slice(0, 50) + '...'
    }

    return (
        <Segment>
            <List>
                <List.Item> Old: {oldUrl}</List.Item>
                <List.Item> New: {newUrl}</List.Item>
                <List.Item><Segment basic>
                <Input
                    value={newUrl}
                />
                {' '}
                <Button 
                    content='Copy'
                    icon='left arrow'
                    labelPosition='left'
                    onClick={() => {navigator.clipboard.writeText(newUrl)}}
                />
                </Segment></List.Item>
            </List>
        </Segment>
       
    ) 
}

const isValidUrl = (str) => {
    var res = str.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    return (res !== null)
}


const CreateUrl = ({name}) => {
    const [url, setUrl] = useState('')
    const [customName, setCustomName] = useState('')
    const [templateShUrl, setTemplateShUrl] = useState('')
    const items = JSON.parse(localStorage.getItem('user'))
    const getShortUrl = () => {
        if (!isValidUrl(url)) {
            setTemplateShUrl('')
            NotificationManager.warning("Url is not valid", 'oops', 3000);
            return
        }
        let prepareData = {
            longUrl: url,
            typeOfUrl: 'custom',
            nameUrl: customName,
            action: 'getShortUrl',
            token: JSON.stringify(items.token)
        }
        doRequest("http://167.235.192.111:90/api", prepareData, 'POST')
        .then((response) => response.json())
        .then((data) => {
            if (data['Status'] == 'Success') {
                setTemplateShUrl(TemplateUrl(url, data['data']))
                NotificationManager.success('The link is added to the "My Links" page', 'Congratulations', 3000);
            } else if(data['Status'] === 'Warning') {
                NotificationManager.warning(data['Message'], 'oops', 3000);
            } else if(data['Status'] === 'Error'){
                NotificationManager.error(data['Message'], 'Fatal Error', 3000);
            }
        });

    }
    
    return (
        <Segment basic textAlign="center">
                 <Input
                     fluid
                     placeholder='Url...'
                     name='url' 
                     onChange={(e, val) => setUrl(val?.value)}
                 >
                     <input />
                 </Input>
                 <br>
                 </br>
                 <Input
                     fluid
                     placeholder='Custom Name Of Url...'
                     name='customUrl' 
                     onChange={(e, val) => setCustomName(val?.value)}
                 >
                     <input />
                 </Input>
                 <br>
                 </br>
                     <Button 
                         onClick={()=> getShortUrl()}
                     >
                         Get Short Url
                     </Button>
                 {templateShUrl}
                 <NotificationContainer/>
        </Segment>
     )
}

const CustomUrl = (props) => {
    const [name, setName] = useState()
    useEffect(() => {
        setName(props.name)
    }, [props])
    
    
    return (
        <>
          {<CreateUrl name={name}/>}
        </>
    )
}

export default CustomUrl