import React from 'react';
import TextField from 'material-ui/TextField';
import MatchBox from './MatchBox.jsx';
import RegexReference from './RegexReference.jsx';

var MatchPage =  React.createClass({
  getInitialState: function() {
    return { pattern: '' };
  },

  handlePatternChange: function() {
    var value = this.refs.pattern.getValue();
    this.setState({ pattern: value });
  },

  render: function() {
    var re;
    var errorMessage;
    try {
      re = new RegExp(this.state.pattern);
    } catch(err) {
      re = new RegExp();
      errorMessage = err.message;
    }

    return (
      <div>
        <h1>Match Page</h1>
        <div className='row'>
          <div className='col-xs-2 col-sm-4'>
            <h3>Reference</h3>
          </div>
          <div className='col-xs-10 col-sm-8'>
            <div className='container-fluid'>
              <TextField
                floatingLabelText='Enter Regex Here'
                value={this.state.pattern}
                onChange={this.handlePatternChange}
                ref='pattern'
                errorText={errorMessage}
              /><br />
            </div>
            <MatchBox
              pattern={re}
            />
            <br />
          </div>
        </div>
      </div>
    );
  }
})

module.exports = MatchPage;
