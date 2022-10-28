import React from "react";

const Login = () => {
    const [open, setOpen] = useState(false)
    return (
        <Modal
            basic
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size="small"
            trigger={<Menu.Item name='Login'></Menu.Item>}
        >
            <Header icon>
                <Icon namne='plug'/>
            </Header>
            <Modal.Content>
                <p>
                Your inbox is getting full, would you like us to enable automatic
                archiving of old messages?
                </p>
            </Modal.Content>
            <Modal.Actions>
                <Button basic color='red' inverted onClick={() => setOpen(false)}>
                    <Icon name='remove' /> No
                </Button>
                <Button color='green' inverted onClick={() => setOpen(false)}>
                    <Icon name='checkmark' /> Yes
                </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default Login