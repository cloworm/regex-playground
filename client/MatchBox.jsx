import React from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';

var MatchBox =  React.createClass({

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
              />
            </div>
            <div className='col-xs-6'>
              <Subheader>Matched Result</Subheader>
              <Subheader>Matched Groups</Subheader>
            </div>
          </div>
        </div>
      </Paper>
    );
  }
})

module.exports = MatchBox;
