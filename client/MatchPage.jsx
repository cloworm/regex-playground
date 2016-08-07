import React from 'react';
import TextField from 'material-ui/TextField';
import MatchBox from './MatchBox.jsx';
import RegexReference from './RegexReference.jsx';

var MatchPage =  React.createClass({

  render: function() {
    return (
      <div>
        <h1>Match Page</h1>
        <div className='row'>
          <div className='col-xs-2 col-sm-4'>
            <RegexReference />
          </div>
          <div className='col-xs-10 col-sm-8'>
            <div className='container-fluid'>
              <TextField
                floatingLabelText='Enter Regex Here'
              /><br />
            </div>
            <MatchBox />
            <br />
          </div>
        </div>
      </div>
    );
  }
})

module.exports = MatchPage;
