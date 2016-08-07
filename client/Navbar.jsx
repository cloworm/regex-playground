import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

var Navbar =  React.createClass({

  propTypes: {
    onNavigate: React.PropTypes.func.isRequired
  },

  getInitialState: function() {
    return { value: 3 };
  },

  handleChange: function(event, index, value) {
    this.setState({value});
  },

  render: function() {
    return (
      <Toolbar>
        <ToolbarGroup>
          <RaisedButton label="About" primary={true} onClick={this.props.onNavigate.bind(null, 'about')}/>
          <RaisedButton label="Match" secondary={true} onClick={this.props.onNavigate.bind(null, 'match')} />
        </ToolbarGroup>
      </Toolbar>
    );
  }
})

module.exports = Navbar;
