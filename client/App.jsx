import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import MatchPage from './MatchPage.jsx';

var App = React.createClass({

  render: function() {
    return (
      <MuiThemeProvider>
        <MatchPage />
      </MuiThemeProvider>
    );
  }
})

module.exports = App;

