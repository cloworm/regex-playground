import React from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Chip from 'material-ui/Chip';
import Tooltip from 'rc-tooltip';

const styles = {
  header: {
    textAlign: 'center'
  },
  paper: {
    display: 'inline-block',
    margin: '16px 32px 16px 0',
    width: '100%',
  },
  chipContainer: {
    padding: '0 5px 5px 5px',
    display: 'inline-block'
  },
};

const flags = [
  {name: 'g', tip: 'Global', example: {pattern: 'a', flags: 'g', matchBoxValues: ['banana']}},
  {name: 'i', tip: 'Case insensitive', example: {pattern: 'aBcDe', flags: 'i', matchBoxValues: ['abCDE']}},
];

const selectors = [
  {name: '.', tip: 'Any character', example: {pattern: '...-...', flags: '', matchBoxValues: ['abc-def-ghi-jkl']}},
  {name: '\\w', tip: 'Any word character', example: {pattern: '\\w+', flags: 'g', matchBoxValues: ['A8-3/49_B?']}},
  {name: '\\W', tip: 'Any non-word character', example: {pattern: '\\W+', flags: 'g', matchBoxValues: ['A8-3/49_B?']}},
  {name: '\\s', tip: 'Any whitespace character', example: {pattern: '', flags: '', matchBoxValues: ['']}},
  {name: '\\S', tip: 'Any non-whitespace character', example: {pattern: '\\S+', flags: 'g', matchBoxValues: ['foo bar\nbaz']}},
  {name: '\\d', tip: 'Any digit character', example: {pattern: '\\d+', flags: 'g', matchBoxValues: ['867-5309']}},
  {name: '\\D', tip: 'Any non-digit character', example: {pattern: '\\D', flags: '', matchBoxValues: ['867-5309']}},
  {name: '[abc]', tip: 'Any character in the brackets', example: {pattern: '[aeiou]', flags: 'g', matchBoxValues: ['quick brown fox']}},
  {name: '[^abc]', tip: 'Any character not in the brackets', example: {pattern: '[^aeiou ]', flags: 'g', matchBoxValues: ['quick brown fox']}},
  {name: '[a-z]', tip: 'Any character in the range', example: {pattern: '[a-m]', flags: 'g', matchBoxValues: ['quick brown fox']}},
];

const positions = [
  {name: '^', tip: 'Beginning of string', example: {pattern: '^\\w+', flags: 'g', matchBoxValues: ['abc-def-ghi-jkl']}},
  {name: '$', tip: 'End of string', example: {pattern: '\\w+$', flags: 'g', matchBoxValues: ['abc-def-ghi-jkl']}},
];

const escapes = [
  {name: '.', tip: '\\.', example: {pattern: '', flags: '', matchBoxValues: ['']}},
  {name: '\\', tip: '\\\\', example: {pattern: '', flags: '', matchBoxValues: ['']}},
  {name: '+', tip: '\\+', example: {pattern: '', flags: '', matchBoxValues: ['']}},
  {name: '*', tip: '\\*', example: {pattern: '', flags: '', matchBoxValues: ['']}},
  {name: '?', tip: '\\?', example: {pattern: '', flags: '', matchBoxValues: ['']}},
  {name: '^', tip: '\\^', example: {pattern: '', flags: '', matchBoxValues: ['']}},
  {name: '$', tip: '\\$', example: {pattern: '', flags: '', matchBoxValues: ['']}},
  {name: '[', tip: '\\[', example: {pattern: '', flags: '', matchBoxValues: ['']}},
  {name: ']', tip: '\\]', example: {pattern: '', flags: '', matchBoxValues: ['']}},
  {name: '{', tip: '\\{', example: {pattern: '', flags: '', matchBoxValues: ['']}},
  {name: '}', tip: '\\}', example: {pattern: '', flags: '', matchBoxValues: ['']}},
  {name: '(', tip: '\\(', example: {pattern: '', flags: '', matchBoxValues: ['']}},
  {name: ')', tip: '\\)', example: {pattern: '', flags: '', matchBoxValues: ['']}},
  {name: '|', tip: '\\|', example: {pattern: '', flags: '', matchBoxValues: ['']}},
  {name: '/', tip: '\\/', example: {pattern: '', flags: '', matchBoxValues: ['']}},
];

const specials = [
  {name: '\\t', tip: 'Tab character', example: {pattern: '', flags: '', matchBoxValues: ['']}},
  {name: '\\n', tip: 'New line character', example: {pattern: '', flags: '', matchBoxValues: ['']}},
  {name: '\\r', tip: 'Line return character', example: {pattern: '', flags: '', matchBoxValues: ['']}},
];

const groups = [
  {name: '(abc)', tip: 'Match group for whatever is between ( )', example: {pattern: '(https?)://(.+)', flags: '', matchBoxValues: ['http://example.com', 'https://example.com']}},
  {name: '$number', tip: 'Select a specific match group', example: {pattern: '', flags: '', matchBoxValues: ['']}},
];

const counts = [
  {name: '+', tip: 'One or more', example: {pattern: '\\w+', flags: 'g', matchBoxValues: ['a ab abc abcd']}},
  {name: '*', tip: 'Zero or more', example: {pattern: 'http://.*', flags: '', matchBoxValues: ['http://example.com']}},
  {name: '{min, max}', tip: 'At least min number, at most max number', example: {pattern: '\\w{2,4}', flags: 'g', matchBoxValues: ['a ab abc abcd abcde']}},
  {name: '?', tip: 'Zero or one', example: {pattern: 'https?', flags: '', matchBoxValues: ['http://example.com', 'https://example.com']}},
  {name: '|', tip: 'Or operator', example: {pattern: '(https|http)', flags: '', matchBoxValues: ['http://example.com', 'https://example.com']}},
];

var RegexReference = React.createClass({

  handleTouchTap: function(obj) {
    this.props.onClickChip(obj);
  },

  renderChip: function(obj) {
    return (
      <div style={styles.chipContainer} key={obj.name}>
        <Tooltip
          placement='top'
          overlay={<div>{obj.tip}</div>}
          destroyTooltipOnHide={true}
        >
          <Chip
            onTouchTap={this.handleTouchTap.bind(null, obj)}
          >
            {obj.name}
          </Chip>
        </Tooltip>
      </div>
    )
  },

  render: function() {
    return (
      <Paper style={styles.paper}>
        <br/>
        <h1 style={styles.header}>Click below to view an example.</h1>
        <Subheader>Selectors</Subheader>
        <div style={styles.chipContainer}>
          {selectors.map(this.renderChip)}
        </div>
        <Divider />

        <Subheader>Flags</Subheader>
        <div style={styles.chipContainer}>
          {flags.map(this.renderChip)}
        </div>
        <Divider />

        <Subheader>Counts</Subheader>
        <div style={styles.chipContainer}>
          {counts.map(this.renderChip)}
        </div>
        <Divider />

        <Subheader>Position</Subheader>
        <div style={styles.chipContainer}>
          {positions.map(this.renderChip)}
        </div>
        <Divider />

        <Subheader>Groups</Subheader>
        <div style={styles.chipContainer}>
          {groups.map(this.renderChip)}
        </div>
        <Divider />

        <Subheader>Special characters</Subheader>
        <div style={styles.chipContainer}>
          {specials.map(this.renderChip)}
        </div>
        <Divider />

        <Subheader>Charcters to escape with \</Subheader>
        <div style={styles.chipContainer}>
          {escapes.map(this.renderChip)}
        </div>
      </Paper>
    );
  }
})

module.exports = RegexReference;
