import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './App.jsx';

injectTapEventPlugin();

ReactDOM.render(
  React.createElement(App),
  document.getElementById('react-app')
);
