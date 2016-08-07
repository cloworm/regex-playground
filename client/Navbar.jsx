import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import Info from 'material-ui/svg-icons/action/info'

var Navbar =  React.createClass({

  propTypes: {
    onNavigate: React.PropTypes.func.isRequired,
  },

  getInitialState: function() {
    return {
      value: 3,
      open: false
    };
  },

  handleDialogOpen: function() {
    this.setState({ open: true });
  },

  handleDialogClose: function() {
    this.setState({ open: false });
  },

  handleChange: function(event, index, value) {
    this.setState({value});
  },

  // handleTitleTap: function() {
  //   return (
  //     this.props.onNavigate.bind(null, 'match')
  //   )
  // },

  render: function() {
    return (
      <div>
        <AppBar
          title='RegEx Playground'
          zDepth={0}
          showMenuIconButton={false}
          onTitleTouchTap={this.props.onNavigate.bind(null, 'match')}
          iconElementRight={
            <IconButton
              onTouchTap={this.handleDialogOpen}
              label='Dialog'
            >
            <Dialog
              title='About'
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleDialogClose}
            >
              Made by <a href='http://github.com/cloworm' target='_blank'>Cloworm</a>
            </Dialog>
              <Info />
            </IconButton>
          }
        />
      </div>
    );
  }
})

module.exports = Navbar;

        // <RaisedButton label="About" primary={true} onClick={this.props.onNavigate.bind(null, 'about')}/>
        // <RaisedButton label="Match" secondary={true} onClick={this.props.onNavigate.bind(null, 'match')} />
