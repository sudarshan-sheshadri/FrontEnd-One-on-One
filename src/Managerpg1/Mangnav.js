import React from 'react'

import {
    Button,
    Header,
    Image,
    Menu,
    Ref,
    Segment,
    Sidebar,
} from 'semantic-ui-react'


 class MangNav extends React.Component {
    state = {}
    segmentRef = {}

    handleHideClick = () => this.setState({ visible: false })
    handleShowClick = () => this.setState({ visible: true })

    handleSidebarHide = () => this.setState({ visible: false })

    render() {
        const { visible } = this.state

        return (
            <div>
                <Button.Group>
                    <Button disabled={visible} onClick={this.handleShowClick}>
                        Show sidebar
                    </Button>
                    <Button disabled={!visible} onClick={this.handleHideClick}>
                        Hide sidebar
                    </Button>
                </Button.Group>

                <Sidebar.Pushable as={Segment.Group} raised>
                    <Sidebar
                        as={Menu}
                        animation='overlay'
                        icon='labeled'
                        inverted
                        onHide={this.handleSidebarHide}
                        vertical
                        target={this.segmentRef}
                        visible={visible}
                        width='thin'
                    >
                        <Menu.Item as='a'>Home</Menu.Item>
                        <Menu.Item as='a'>Games</Menu.Item>
                        <Menu.Item as='a'>Channels</Menu.Item>
                    </Sidebar>

                    <Ref innerRef={this.segmentRef}>
                        <Segment>

                        </Segment>
                    </Ref>


                </Sidebar.Pushable>
            </div>
        )
    }
}
export default MangNav