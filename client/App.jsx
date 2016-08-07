import React from "react";
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';


var App = React.createClass({

  render: function() {
    return (
      <MuiThemeProvider>
        <div>
          <h1>Welcome To My Boilerplate</h1>
          <RaisedButton label='Hello' />
        </div>
      </MuiThemeProvider>
    );
  }
})

module.exports = App;
