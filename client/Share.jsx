import React from 'react';
import TextField from 'material-ui/TextField';
import ShareLink from './ShareLink.js';
import CopyToClipboard from 'react-copy-to-clipboard';
import IconButton from 'material-ui/IconButton';
import Copy from 'material-ui/svg-icons/content/content-copy';

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
  underlineFocus: {
    borderColor: '#000'
  },
};

var Share = React.createClass({
  render: function() {
    var shareLink = ShareLink(this.props.pattern, this.props.flags, this.props.matches);
    return (
      <div>
        <TextField
          name='shareLink'
          floatingLabelText='Permalink'
          readOnly='readOnly'
          value={shareLink}
          ref='shareLink'
          underlineFocusStyle={styles.underlineFocus}
        />
        <CopyToClipboard text={shareLink}>
          <IconButton tooltip="Copy to Clipboard">
            <Copy />
          </IconButton>
        </CopyToClipboard>
      </div>
    );
  }
})

module.exports = Share;
