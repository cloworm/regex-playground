import React from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';

var MatchBox =  React.createClass({
  propTypes: {
    pattern: React.PropTypes.instanceOf(RegExp).isRequired
  },

  getInitialState: function() {
    return { matchText: '' };
  },

  handleMatchTextChange: function() {
    var value = this.refs.matchText.getValue();
    this.setState({ matchText: value });
  },

  renderMatchResult: function() {
    if (this.state.matchText && this.props.pattern) {
      var re = this.props.pattern;
      return this.state.matchText.match(re);
    }
  },

  render: function() {
    return (
      <Paper>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-xs-6'>
              <TextField
                floatingLabelText='Enter Text to Match'
                multiLine={true}
                rows={3}
                value={this.state.matchText}
                onChange={this.handleMatchTextChange}
                ref='matchText'
              />
            </div>
            <div className='col-xs-6'>
              <Subheader>Matched Result</Subheader>
              {this.renderMatchResult()}
              <Subheader>Matched Groups</Subheader>
            </div>
          </div>
        </div>
      </Paper>
    );
  }
})

module.exports = MatchBox;
