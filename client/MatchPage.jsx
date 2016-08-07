import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import MatchBox from './MatchBox.jsx';
import RegexReference from './RegexReference.jsx';

const styles = {
  slashWrapper: {
    display: "inline-block",
    position: "relative",
    marginRight: "12px"
  },
  slashLeft: {
    position: "absolute",
    top: "42px",
    left: "-6px"
  },
  slashRight: {
    position: "absolute",
    top: "42px",
    right: "-6px"
  }
};

var MatchPage =  React.createClass({
  getInitialState: function() {
    return {
      pattern: '',
      flags: '',
      numMatchBoxes: 1
    };
  },

  handlePatternChange: function() {
    var value = this.refs.pattern.getValue();
    this.setState({ pattern: value });
  },

  handleFlagsChange: function() {
    var value = this.refs.flags.getValue();
    this.setState({ flags: value });
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
      re = new RegExp(this.state.pattern, this.state.flags);
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
              <span style={styles.slashWrapper}>
                <span style={styles.slashLeft}>/</span>
                <TextField
                  floatingLabelText='Enter Regex Here'
                  value={this.state.pattern}
                  onChange={this.handlePatternChange}
                  style={{float: "left"}}
                  ref='pattern'
                  errorText={errorMessage}
                />
                <span style={styles.slashRight}>/</span>
              </span>
              <span style={{display: "inline-block", position: "relative"}}>
                <TextField
                  floatingLabelText='Flags'
                  value={this.state.flags}
                  onChange={this.handleFlagsChange}
                  style={{float: "left"}}
                  ref='flags'
                />
              </span>
            </div>
            <br />
            <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
              {this.renderMatchBoxes(re)}
            </ReactCSSTransitionGroup>
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
