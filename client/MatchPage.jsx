import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import RaisedButton from 'material-ui/RaisedButton';
import MatchBox from './MatchBox.jsx';
import RegexReference from './RegexReference.jsx';

const styles = {
  actionButton: {
    float: 'right',
    marginRight: '10px',
  },
  clearButton: {
    marginBottom: '10px',
    verticalAlign: 'bottom'
  },
  flagsField: {
    float: 'left',
    width: '100%'
  },
  flagsFieldSpan: {
    display: 'inline-block',
    position: 'relative'
  },
  floatingLabel: {
    color: '#000'
  },
  iconFill: {
    fill:'#000'
  },
  link: {
    fontSize: '.8rem',
    color:'#fff',
    textDecoration: 'none',
    textShadow: 'none',
  },
  matchBoxMargin: {
    margin: '15px'
  },
  patternField: {
    float: 'left',
    width: '100%'
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
    marginRight: '12px',
    width: '100%'
  },
  title: {
    color: '#fff',
    fontSize: '2.2rem',
    paddingTop: '20px',
    textShadow:
      '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
  },
  underline: {
    borderColor: '#000'
  },
  underlineFocus: {
    borderColor: '#fff'
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

  handleClickClear: function() {
    this.setState({
      pattern: '',
      flags: '',
      matchBoxValues: ['']
    });
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

  handleClickChip: function(obj) {
    this.setState(obj.example);
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
        <div className='row'>
          <div className='col-xs-12 col-md-8'>
            <div className='container-fluid'>
              <h1 style={styles.title}>RegEx Playground <a href='http://github.com/cloworm' target='_blank' style={styles.link}>BY CLOWORM</a></h1>
              <div className='row bottom-xs'>
                <div className='col-xs-8 col-sm-6'>
                  <span style={styles.slashWrapper}>
                    <span style={styles.slashLeft}>/</span>
                    <TextField
                      autoCapitalize='off'
                      autoCorrect='off'
                      floatingLabelText='Pattern'
                      floatingLabelStyle={styles.floatingLabel}
                      value={this.state.pattern}
                      onChange={this.handlePatternChange}
                      style={styles.patternField}
                      ref='pattern'
                      errorText={errorMessage}
                      underlineStyle={styles.underline}
                      underlineFocusStyle={styles.underlineFocus}
                    />
                    <span style={styles.slashRight}>/</span>
                  </span>
                </div>
                <div className='col-xs-4 col-sm-4'>
                  <span style={styles.flagsFieldSpan}>
                    <TextField
                      autoCapitalize='off'
                      autoCorrect='off'
                      floatingLabelText='Flags'
                      floatingLabelStyle={styles.floatingLabel}
                      value={this.state.flags}
                      onChange={this.handleFlagsChange}
                      style={styles.flagsField}
                      ref='flags'
                      underlineStyle={styles.underline}
                      underlineFocusStyle={styles.underlineFocus}
                    />
                  </span>
                </div>
                <div className='col-sm-2 col-xs-12'>
                  <RaisedButton
                    label='Clear'
                    style={styles.clearButton}
                    onClick={this.handleClickClear}
                  />
                </div>
              </div>
            </div>
            <br />
            <ReactCSSTransitionGroup
              transitionName='right-side-fade'
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}
            >
              {this.renderMatchBoxes(re)}
            </ReactCSSTransitionGroup>
            <FloatingActionButton
              backgroundColor='#fff'
              mini={true}
              style={styles.actionButton}
              onClick={this.handleNewMatchBox}
              iconStyle={styles.iconFill}
            >
              <ContentAdd />
            </FloatingActionButton>
            {(this.state.matchBoxValues.length > 1) ?
              <FloatingActionButton
                backgroundColor='#bdc3c7'
                mini={true}
                style={styles.actionButton}
                onClick={this.handleRemoveMatchBox}
                iconStyle={styles.iconFill}
              >
                <ContentRemove />
              </FloatingActionButton> : null
            }
          </div>
          <div className='col-xs-12 col-md-4'>
            <RegexReference
              onClickChip={this.handleClickChip}
            />
          </div>
        </div>
      </div>
    );
  }
})

module.exports = MatchPage;
