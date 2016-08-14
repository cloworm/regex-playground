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

  render: function() {
    return (
      <div>
        <AppBar
          title='RegEx Playground'
          zDepth={0}
          style={{backgroundColor: '#f1c40f', marginBottom: '5px'}}
          titleStyle={{fontSize: '35px', paddingLeft: '40px', textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'}}
          showMenuIconButton={false}
          onTitleTouchTap={this.props.onNavigate.bind(null, 'match')}
          // iconElementRight={
          //   <IconButton
          //     onTouchTap={this.handleDialogOpen}
          //     label='Dialog'
          //     touch={true}
          //   >
          //     <Dialog
          //       title='About'
          //       modal={false}
          //       open={this.state.open}
          //       onRequestClose={this.handleDialogClose}
          //     >
          //       Made by <a href='http://github.com/cloworm' target='_blank'>Chloe Echikson</a>
          //     </Dialog>
          //     <Info color='#FFF' zDepth={1}/>
          //   </IconButton>
          // }
        />
      </div>
    );
  }
})

module.exports = Navbar;
