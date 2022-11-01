import React, {useState, useEffect} from "react";
import {List, Segment, Input, Label, Button} from 'semantic-ui-react'
import doRequest from  '../../components/api'

const TemplateUrl = (oldUrl ='', newUrl = '') => {
    if(oldUrl.length > 50){
        oldUrl = oldUrl.slice(0, 50) + '...'
    }

    return (
        <Segment>
            <List>
                <List.Item> Old: {oldUrl}</List.Item>
                <List.Item>  New: {newUrl}</List.Item>
                <List.Item><Segment basic>
                        <Input
                            action={{
                                color: 'teal',
                                labelPosition: 'right',
                                icon: 'copy',
                                content: 'Copy',
                            }}
                            value={newUrl}
                            onClick={navigator.clipboard.writeText(newUrl)}
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
    const [error, setError] = useState(false)
    const [templateShUrl, setTemplateShUrl] = useState('')
    const items = JSON.parse(localStorage.getItem('user'))
    const getShortUrl = () => {
        let prepareData = {
            longUrl: url,
            typeOfUrl: 'simple',
            action: 'getShortUrl',
            userId:  +items?.id
        }
        doRequest("http://167.235.192.111:90/api", prepareData, 'POST')
        .then((response) => response.json())
        .then((data) => {
            if(data['Status'] == 'Success'){
                setTemplateShUrl(TemplateUrl(url, data['data']))
            }
        });

        if (!isValidUrl(url)) {
            setTemplateShUrl('')
            setError(true)
            return
        }
    }
    
    return (
        <Segment basic textAlign="center">
                 {error &&   <Label basic color='red' pointing='below'>
                    The Url is Invalid
                 </Label>}
                 <Input
                     fluid
                     placeholder='Url...'
                     name='url' 
                     onChange={(e, val) => setUrl(val?.value)}
                 >
                     <input />
                 </Input>
                     <Button 
                         onClick={()=> getShortUrl()}
                     >
                         Get Short Url
                     </Button>
                 {templateShUrl}
        </Segment>
     )
}

const CreateLinks = (props) => {
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

export default CreateLinks