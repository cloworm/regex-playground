import React from 'react';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import CopyToClipboard from 'react-copy-to-clipboard';
import IconButton from 'material-ui/IconButton';
import Copy from 'material-ui/svg-icons/content/content-copy';

const styles = {
  display: 'inline-block',
  marginLeft: '0',
  width: '100%',
  floatingLabelFocus: {
    color: '#000',
  },
  underlineFocus: {
    borderColor: '#000'
  },
};

var Share = React.createClass({
  handleLinkChange: function() {

  },

  shareLink: function() {
    var url = `${window.location.protocol}//${window.location.host}`;
    var params = [];
    if (this.props.pattern.length > 0) {
      if (params.length < 1) url += '?';
      params.push(`pattern=${encodeURIComponent(this.props.pattern)}`);
    }
    if (this.props.flags.length > 0) {
      if (params.length < 1) url += '?';
      params.push(`flags=${encodeURIComponent(this.props.flags)}`);
    }
    if (this.props.matches.length > 0 && this.props.matches[0] !== '') {
      if (params.length < 1) url += '?';
      this.props.matches.forEach(function(match) {
        params.push(`matches[]=${encodeURIComponent(match)}`);
      })
    }

    return url + params.join('&');
  },

  render: function() {
    return (
      <Paper style={styles}>
        <div className='container-fluid'>
          <TextField
            autoCapitalize='off'
            autoCorrect='off'
            name='shareLink'
            floatingLabelText='Share'
            id='shareLink'
            readOnly='readOnly'
            value={this.shareLink()}
            onChange={this.handleLinkChange}
            ref='shareLink'
            underlineFocusStyle={styles.underlineFocus}
          />
          <CopyToClipboard text={this.shareLink()}>
            <IconButton style={{display: 'inline-block'}} tooltip="Copy to Clipboard">
              <Copy />
            </IconButton>
          </CopyToClipboard>
        </div>
      </Paper>
    );
  }
})

module.exports = Share;
