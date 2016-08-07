import React from 'react';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';

const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0'
};

var RegexReference = React.createClass({

  render: function() {
    return (
      <Paper style={style}>
        <Menu>
          <MenuItem primaryText='\d' secondaryText='# from 0-9' />
          <MenuItem primaryText='\D' />
          <Divider />
          <MenuItem primaryText='\w' />
          <MenuItem primaryText='\W' />
        </Menu>
      </Paper>
    );
  }
})

module.exports = RegexReference;
