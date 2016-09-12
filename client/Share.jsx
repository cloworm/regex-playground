import React from 'react';
import TextField from 'material-ui/TextField';
import ShareLink from './ShareLink.js';
import CopyToClipboard from 'react-copy-to-clipboard';
import IconButton from 'material-ui/IconButton';
import Copy from 'material-ui/svg-icons/content/content-copy';
import Snackbar from 'material-ui/Snackbar';

const styles = {
  paper: {
    display: 'inline-block',
    marginLeft: '0',
    width: '100%'
  },
  permalink: {
    textAlign: 'right',
    paddingRight: '0'
  },
  textArea: {
    height: '64px',
    width: '229px'
  },
  underlineFocus: {
    borderColor: '#000'
  },
};

var Share = React.createClass({
  getInitialState: function() {
    return {
      open: false
    }
  },

  handleCopyPermalink: function() {
    this.setState({
      open: true
    });
  },

  handleRequestClose: function() {
    this.setState({
      open: false
    });
  },

  render: function() {
    var shareLink = ShareLink(this.props.pattern, this.props.flags, this.props.matches);
    return (
      <div className='row'>
        <div className='col-xs-12'>
        <TextField
          name='shareLink'
          floatingLabelText='Permalink'
          readOnly='readOnly'
          value={shareLink}
          ref='shareLink'
          underlineFocusStyle={styles.underlineFocus}
          style={styles.textArea}
        />
        <CopyToClipboard
          text={shareLink}
          onCopy={this.handleCopyPermalink}
        >
          <IconButton
            tooltip="Copy Permalink to Clipboard"
            tooltipPosition='bottom-left'
          >
            <Copy />
          </IconButton>
        </CopyToClipboard>
        <Snackbar
          open={this.state.open}
          message='Copied to clipboard'
          autoHideDuration={2000}
          onRequestClose={this.handleRequestClose}
        />
        </div>
      </div>
    );
  }
})

module.exports = Share;
