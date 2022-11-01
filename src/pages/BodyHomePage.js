import React, { useState } from "react";
import { Container, Divider, Button, Grid, Icon, Segment, Item, Input, Label, Accordion} from 'semantic-ui-react'
import Register from "../components/modals/Register";
import '../App.css'
import doRequest from '../components/api'

const InfoAboutShortUrl = () => {
    return (
        <Grid
            textAlign='center'
            divided='vertically'
        >
            <Grid.Row 
                columns={3}
            >
                <Grid.Column>
                    <Segment basic>
                        Short URL in 1 click
                    </Segment>
                    <Item>
                        <Item.Content verticalAlign='middle'>
                            <Item.Header>
                                <Icon name='unlink' size='big' />
                            </Item.Header>
                            <Item.Description>
                                <Segment basic>
                                    In just 1 click you get a personal short address.
                                    This sURL is static, which means it's always with you
                                </Segment>
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Grid.Column>
                <Grid.Column>
                    <Segment basic >
                        Full link statistics
                    </Segment>
                    <Item>
                        <Item.Content verticalAlign='middle'>
                            <Item.Header>
                                <Icon name='sort amount up' size='big' />
                            </Item.Header>
                            <Item.Description>
                                <Segment basic>
                                    You can track the statistics of your links.
                                    Just add a "+" at the end of the short link
                                </Segment>
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Grid.Column>
                <Grid.Column>
                    <Segment basic >
                        Working alternative to goo.gl
                    </Segment>
                    <Item>
                        <Item.Content verticalAlign='middle'>
                            <Item.Header>
                                <Icon name='internet explorer' size='big' />
                            </Item.Header>
                            <Item.Description>
                                <Segment basic>
                                    Unlike the closed project from google,
                                    sURL supports really short URLs like surl.li/clck
                                </Segment>
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

const isValidUrl = (str) => {
    var res = str.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    return (res !== null)
}
const TemplateUrl = (oldUrl ='este vechi', newUrl = 'este nou') => {
    
    if(oldUrl.length > 50){
        oldUrl = oldUrl.slice(0, 50) + '...'
    }

    return (
        <Grid columns='equal'>
            <Grid.Row 
                columns={3}
            >
                <Grid.Column textAlign='center'>
                <Segment basic/>
                    <Segment basic>
                       Old: {oldUrl}
                    </Segment>
                </Grid.Column>
                <Grid.Column textAlign='center'>
                <Segment basic/>

                    <Segment basic>
                       New: {newUrl}
                    </Segment>
                </Grid.Column>
                <Grid.Column textAlign='center' style={{marginTop:'32px'}}>
                    <Segment basic>
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
                    </Segment>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    ) 
}

const TryShortUrl = () => {
    const [url, setUrl] = useState('')
    const [error, setError] = useState(false)
    const [templateShUrl, setTemplateShUrl] = useState('')
    
    const getShortUrl = () => {
        let prepareData = {
            longUrl: url,
            typeOfUrl: 'simple',
            action: 'getShortUrl'
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
                    <Button 
                        onClick={()=> getShortUrl()}
                    >
                        Get Short Url
                    </Button>
                </Input>
                {templateShUrl}
       </Segment>
    )
}

const Question = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const handleClick = (e, val) => {
        let index = val?.index
        let newIndex = (activeIndex === index) ? -1 : index
        setActiveIndex(newIndex)
    }

    return (
        <Accordion>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={ (e, val) => handleClick(e, val)}
        >
          <Icon name='dropdown' />
          What is a URL shortener?
        </Accordion.Title>
        <Accordion.Content active={activeIndex == 0}>
          <Segment  basic>
            A URL shortener, also known as a link shortener, seems like a simple tool, but it is a service that can have a dramatic impact on your marketing efforts.

            Link shorteners work by transforming any long URL into a shorter, more readable link. When a user clicks the shortened version, they’re automatically forwarded to the destination URL.

            Think of a short URL as a more descriptive and memorable nickname for your long webpage address. You can, for example, use a short URL like bit.ly/CelebrateBitly so people will have a good idea about where your link will lead before they click it.

            If you’re contributing content to the online world, you need a URL shortener.

            Make your URLs stand out with our easy to use free link shortener above.
          </Segment>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={ (e, val) => handleClick(e, val)}
          
        >
          <Icon name='dropdown' />
          What is a custom URL shortener?
        </Accordion.Title>
        <Accordion.Content active={activeIndex == 1}>
          <Segment basic>
            A custom URL shortener, sometimes referred to as a branded URL shortener, lets you brand your links.

            For example, instead of bit.ly/2m75BWD, you could use a custom short URL like yourbrnd.co/2m75BWD.

            There are several benefits of branding your short links. Branded links build trust between your audience and your business, drive more clicks, give your audience a preview of where they are being taken and increase brand awareness.

            A link shortening service that includes custom short URLs is vital to improving audience engagement with your communications. A short URL is good, but a custom URL works every time.
          </Segment>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex == 2}
          index={2}
          onClick={ (e, val) => handleClick(e, val)}
        >
          <Icon name='dropdown' />
          What is a Link-in-bio?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <Segment basic>
          The term “Link-in-bio” refers to the clickable URL that you can add to your profile section for social media. Most social media platforms give you the option to add a link in your bio to take followers to your website, product page, content or some other important page.
          </Segment>
        </Accordion.Content>
      </Accordion>
    )
}

const BodyHomePage = () => {
    return (
        <Container 
            className="top"
        >
            <Grid
                textAlign='center'
                divided='vertically'
            >
                <Grid.Row 
                    columns={2}
                >
                    <Grid.Column verticalAlign='center'>
                    <Segment basic>
                        We’ve expanded!
                        Shorten URLs. Generate QR Codes.
                        And now, create Link-in-bios.
                    </Segment>
                    <Button basic color='blue'>
                        <Register name='Get Started'/>
                    </Button>
                </Grid.Column>
                    
                    <Grid.Column verticalAlign='center'>
                    <Icon name='registered outline' size='massive' />
                </Grid.Column>
                </Grid.Row>
            </Grid>
            <Segment basic/>
            <Divider/>
                <InfoAboutShortUrl/>
           <Divider horizontal>
                <Icon name="mouse pointer"/> 
                Try
           </Divider>
                <TryShortUrl/>
            <Divider horizontal>
                <Icon name="question circle outline"/> 
                question
           </Divider>
           <Question/>
        </Container>
    )
}

export default BodyHomePage