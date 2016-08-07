import React from "react";
import ReactDOM from "react-dom";
import App from './App.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDOM.render(
  React.createElement(App),
  document.getElementById('react-app')
);
