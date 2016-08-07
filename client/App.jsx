import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Navbar from './Navbar.jsx';
import AboutPage from './AboutPage.jsx';
import MatchPage from './MatchPage.jsx';


var App = React.createClass({
  getInitialState: function() {
    return { currentPage: 'match' };
  },

  handleNavigate: function(string) {
    this.setState({ currentPage: string });
  },

  renderPage: function() {
    switch(this.state.currentPage) {
      case 'match': return <MatchPage />;
      case 'about': return <AboutPage />;
    }
  },

  render: function() {
    return (
      <MuiThemeProvider>
        <div>
          <Navbar onNavigate={this.handleNavigate} />
          <div className='container-fluid'>
            {this.renderPage()}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
})

module.exports = App;
