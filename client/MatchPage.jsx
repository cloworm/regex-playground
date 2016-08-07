import React from 'react';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import MatchBox from './MatchBox.jsx';
import RegexReference from './RegexReference.jsx';

var MatchPage =  React.createClass({
  getInitialState: function() {
    return { pattern: '', numMatchBoxes: 1 };
  },

  handlePatternChange: function() {
    var value = this.refs.pattern.getValue();
    this.setState({ pattern: value });
  },

  handleNewMatchBox: function() {
    var current = this.state.numMatchBoxes;
    this.setState({ numMatchBoxes: current + 1 });
  },

  handleRemoveMatchBox: function() {
    var current = this.state.numMatchBoxes;
    this.setState({ numMatchBoxes: current - 1 });
  },

  renderMatchBoxes: function(re) {
    var boxes = [];
    for(var i = 0; i < this.state.numMatchBoxes; i++) {
      boxes.push(<div key={i} style={{ margin: '15px' }}><MatchBox pattern={re} /></div>);
    }
    return boxes;
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
            {this.renderMatchBoxes(re)}
            <FloatingActionButton
              secondary={true}
              mini={true}
              style={{ float: 'right' }}
              onClick={this.handleNewMatchBox}
            >
              <ContentAdd />
            </FloatingActionButton>
            {(this.state.numMatchBoxes > 1) ?
              <FloatingActionButton
                primary={true}
                mini={true}
                style={{ float: 'right' }}
                onClick={this.handleRemoveMatchBox}
              >
                <ContentRemove />
              </FloatingActionButton> : null
            }
          </div>
        </div>
      </div>
    );
  }
})

module.exports = MatchPage;
