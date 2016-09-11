import React from 'react';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';

const styles = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',
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
        <Subheader>Share</Subheader>
        <TextField
          autoCapitalize='off'
          autoCorrect='off'
          floatingLabelText='Copy Link'
          floatingLabelFocusStyle={styles.floatingLabelFocus}
          floatingLabelFixed={true}
          multiLine={true}
          fullWidth={true}
          rows={3}
          value={this.shareLink()}
          onChange={this.handleLinkChange}
          ref='matchText'
          underlineFocusStyle={styles.underlineFocus}
        />
      </Paper>
    );
  }
})

module.exports = Share;
