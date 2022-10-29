import React from "react";
import { Container, Divider, List, Grid, Icon, Segment, Item, Input, Label, Accordion} from "semantic-ui-react";


const Footer = () => {
    return (
        <Container>
            <Segment basic />
            <Divider/>
            <Grid
                textAlign='center'
                divided='vertically'
            >
                <Grid.Row columns={3}>
                    <Grid.Column>
                        <List items={['Privacy Policy', 'Terms of Service', 'Acceptable Use Policy']} />
                    </Grid.Column>
                    <Grid.Column>
                        <List items={['Branded Links', 'Mobile Links', 'Campaign']} />
                    </Grid.Column>
                    <Grid.Column>
                        <List items={['Link Management', 'For Developers', 'Customer Service']} />
                    </Grid.Column>
                </Grid.Row>
            </Grid> 
        </Container>
    )
}

export default Footer