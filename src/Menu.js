import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './Menu.css'

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <ButtonDropdown className="menu" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle className="menu-button">
        <i className="fas fa-ellipsis-v"/>
        </DropdownToggle>
        <DropdownMenu className="menu-list">
          <DropdownItem className="menu-list-item">Make Cluster</DropdownItem>
          <DropdownItem className="menu-list-item">Use as Reference</DropdownItem>
          <DropdownItem className="menu-list-item">Duplicate <i className="far fa-copy" /></DropdownItem>
          <DropdownItem className="menu-list-item">Inspect in New Tab <i className="fas fa-external-link-alt" /></DropdownItem>
          <DropdownItem className="menu-list-item text-danger">Remove <i className="fas fa-trash-alt" /></DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

export default Menu;
