import React from 'react';
import TextField from 'material-ui/TextField';
import CopyToClipboard from 'react-copy-to-clipboard';
import IconButton from 'material-ui/IconButton';
import Copy from 'material-ui/svg-icons/content/content-copy';

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
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xs-3' style={styles.permalink}>
            Permalink:
            <CopyToClipboard text={this.shareLink()}>
              <IconButton style={styles.button} tooltip="Copy to Clipboard">
                <Copy />
              </IconButton>
            </CopyToClipboard>
          </div>
          <div className='col-xs-9'>
            <TextField
              name='shareLink'
              readOnly='readOnly'
              fullWidth={true}
              value={this.shareLink()}
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
