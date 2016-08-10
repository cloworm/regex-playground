import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import RaisedButton from 'material-ui/RaisedButton';
import MatchBox from './MatchBox.jsx';
import RegexReference from './RegexReference.jsx';

const examples = [
  {
    pattern: "\\((\\d{3})\\) (\\d{3})-(\\d{4})",
    flags: '',
    matchBoxValues: ['(908) 555-1212', '(213) 555-6789']
  }, {
    pattern: 'a',
    flags: 'gi',
    matchBoxValues: ['banana']
  }
];

const styles = {
  actionButton: {
    float: 'right'
  },
  exampleButton: {
    marginBottom: '10px',
    marginLeft: '30px',
    verticalAlign: 'bottom'
  },
  flagsField: {
    float: 'left',
    width: '50px'
  },
  flagsFieldSpan: {
    display: 'inline-block',
    position: 'relative'
  },
  matchBoxMargin: {
    margin: '15px'
  },
  patternField: {
    float: 'left'
  },
  slashLeft: {
    position: 'absolute',
    top: '42px',
    left: '-6px'
  },
  slashRight: {
    position: 'absolute',
    top: '42px',
    right: '-6px'
  },
  slashWrapper: {
    display: 'inline-block',
    position: 'relative',
    marginRight: '12px'
  }
};

var MatchPage =  React.createClass({
  getInitialState: function() {
    return {
      pattern: '',
      flags: '',
      matchBoxValues: ['']
    };
  },

  handleClickExample: function() {
    var example = examples[parseInt(Math.random() * examples.length)];
    this.setState(example);
  },

  handlePatternChange: function() {
    var value = this.refs.pattern.getValue();
    this.setState({ pattern: value });
  },

  handleFlagsChange: function() {
    var value = this.refs.flags.getValue();
    this.setState({ flags: value });
  },

  handleMatchBoxChange: function(index, value) {
    this.state.matchBoxValues[index] = value;
    this.setState({ matchBoxValues: this.state.matchBoxValues });
  },

  handleNewMatchBox: function() {
    this.state.matchBoxValues.push('');
    this.setState({ matchBoxValues: this.state.matchBoxValues });
  },

  handleRemoveMatchBox: function() {
    this.state.matchBoxValues.pop();
    this.setState({ matchBoxValues: this.state.matchBoxValues });
  },

  renderMatchBoxes: function(re) {
    return this.state.matchBoxValues.map(function(value, i) {
      return (
        <div key={i} style={styles.matchBoxMargin}>
          <MatchBox
            pattern={re}
            value={value}
            onChange={this.handleMatchBoxChange.bind(null, i)}
          />
        </div>
      )
    }.bind(this))
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
          <div className='col-xs-12 col-md-8'>
            <div className='container-fluid'>
              <span style={styles.slashWrapper}>
                <span style={styles.slashLeft}>/</span>
                <TextField
                  floatingLabelText='Pattern'
                  value={this.state.pattern}
                  onChange={this.handlePatternChange}
                  style={styles.patternField}
                  ref='pattern'
                  errorText={errorMessage}
                />
                <span style={styles.slashRight}>/</span>
              </span>
              <span style={styles.flagsFieldSpan}>
                <TextField
                  floatingLabelText='Flags'
                  value={this.state.flags}
                  onChange={this.handleFlagsChange}
                  style={styles.flagsField}
                  ref='flags'
                />
              </span>
              <RaisedButton label='Example' style={styles.exampleButton} onClick={this.handleClickExample} />
            </div>
            <br />
            <ReactCSSTransitionGroup transitionName='right-side-fade' transitionEnterTimeout={500} transitionLeaveTimeout={300}>
              {this.renderMatchBoxes(re)}
            </ReactCSSTransitionGroup>
            <FloatingActionButton
              secondary={true}
              mini={true}
              style={styles.actionButton}
              onClick={this.handleNewMatchBox}
            >
              <ContentAdd />
            </FloatingActionButton>
            {(this.state.matchBoxValues.length > 1) ?
              <FloatingActionButton
                mini={true}
                style={styles.actionButton}
                onClick={this.handleRemoveMatchBox}
              >
                <ContentRemove />
              </FloatingActionButton> : null
            }
          </div>
          <div className='col-xs-12 col-md-4'>
            <RegexReference />
          </div>
        </div>
      </div>
    );
  }
})

module.exports = MatchPage;
