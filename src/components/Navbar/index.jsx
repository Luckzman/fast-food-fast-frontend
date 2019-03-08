import React, { Component } from 'react';
import { Menu, Segment, Container } from 'semantic-ui-react';
import FormModal from '../Modal';
import './navbar.scss';

export default class MenuExampleInvertedSegment extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Segment inverted className="no-border-radius">
        <Container>
          <Menu inverted secondary>
            <Menu.Item name="Home" active={activeItem === 'Home'} onClick={this.handleItemClick} />
            <Menu.Menu position="right">
              <Menu.Item
                name="catalog"
                active={activeItem === 'catalog'}
                onClick={this.handleItemClick}
              />
              <Menu.Item>
                <FormModal />
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </Container>
      </Segment>
    );
  }
}
