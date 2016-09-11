import React from 'react';
import TextField from 'material-ui/TextField';
import CopyToClipboard from 'react-copy-to-clipboard';
import IconButton from 'material-ui/IconButton';
import Copy from 'material-ui/svg-icons/content/content-copy';
import ShareLink from './ShareLink.js';

const styles = {
  button: {
    display: 'inline-block'
  },
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
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xs-12 col-sm-5' style={styles.permalink}>
            Permalink:
            <CopyToClipboard text={shareLink}>
              <IconButton style={styles.button} tooltip="Copy to Clipboard">
                <Copy />
              </IconButton>
            </CopyToClipboard>
          </div>
          <div className='col-xs-12 col-sm-7'>
            <TextField
              name='shareLink'
              readOnly='readOnly'
              fullWidth={true}
              value={shareLink}
              ref='shareLink'
              underlineFocusStyle={styles.underlineFocus}
            />
          </div>
        </div>
      </div>
    );
  }
})

module.exports = Share;
