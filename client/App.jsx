import React from "react";
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
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
          {this.renderPage()}
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-xs-12 col-sm-6'>
                <h1>Welcome To My Boilerplate</h1>
              </div>
              <div className='col-xs-12 col-sm-6'>
                <RaisedButton label='Hello' />
              </div>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
})

module.exports = App;
