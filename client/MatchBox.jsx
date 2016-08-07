import React from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import MatchItem from './MatchItem.jsx';

const styles = {
  matchResultsMargin: {
    marginBottom: '10px'
  }
}

var MatchBox =  React.createClass({
  propTypes: {
    pattern: React.PropTypes.instanceOf(RegExp).isRequired,
    value: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired
  },

  handleMatchTextChange: function() {
    var value = this.refs.matchText.getValue();
    this.props.onChange(value);
  },

  renderMatchGroups: function() {
    if (this.props.value && this.props.pattern) {
      var re = this.props.pattern;
      var match = this.props.value.match(re);
      if (match) {
        return match.map(function(matchItem, index) {
          return (
            <MatchItem key={index} item={matchItem} />
          )
        });
      } else {
        return 'No matches yet';
      }
    } else {
      return 'No matches yet';
    }
  },

  renderMatchResult: function() {
    if (this.props.value && this.props.pattern) {
      var re = this.props.pattern;
      var match = this.props.value.match(re);
      if (match) {
        return match[0];
      } else {
        return 'No matches yet';
      }
    } else {
      return 'No matches yet';
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
                fullWidth={true}
                rows={3}
                value={this.props.value}
                onChange={this.handleMatchTextChange}
                ref='matchText'
              />
            </div>
            <div className='col-xs-6'>
              <div style={styles.matchResultsMargin}>
                <Subheader>Matched Result</Subheader>
                {this.renderMatchResult()}
                <Subheader>Matched Groups</Subheader>
                {this.renderMatchGroups()}
              </div>
            </div>
          </div>
        </div>
      </Paper>
    );
  }
})

module.exports = MatchBox;
