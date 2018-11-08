import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './DrawerButton.css'

class DrawerButton extends Component {
  render() {
    return (
      <div id="semiCircle">
        <i className={"fas "+this.props.icon}/>
      </div>
    )
  }
}

DrawerButton.propType= {
  icon : PropTypes.string.isRequired
};

export default DrawerButton;
