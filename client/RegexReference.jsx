import React from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Chip from 'material-ui/Chip';
import Tooltip from 'rc-tooltip';

const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',
  width: '100%',
  chipContainer: {
    padding: '0 5px 5px 5px',
    display: 'inline-block'
  },
};

const flags = [
  {name: 'g', tip: 'Global', example: {pattern: 'a', flags: 'g', matchBoxValues: ['banana']}},
  {name: 'i', tip: 'Case insensitive'},
  {name: 'm', tip: 'Multiline'},
];

const selectors = [
  {name: '.', tip: 'Any character'},
  {name: '\\w', tip: 'Any word character'},
  {name: '\\W', tip: 'Any non-word character'},
  {name: '\\s', tip: 'Any whitespace character'},
  {name: '\\S', tip: 'Any non-whitespace character'},
  {name: '\\d', tip: 'Any digit character'},
  {name: '\\D', tip: 'Any non-digit character'},
  {name: '[abc]', tip: 'Any character in the brackets'},
  {name: '[^abc]', tip: 'Any character not in the brackets'},
  {name: '[a-z]', tip: 'Any character in the range'},
];

const positions = [
  {name: '^', tip: 'Beginning of string'},
  {name: '$', tip: 'End of string'},
];

const escapes = [
  {name: '.', tip: '\\.'},
  {name: '\\', tip: '\\\\'},
  {name: '+', tip: '\\+'},
  {name: '*', tip: '\\*'},
  {name: '?', tip: '\\?'},
  {name: '^', tip: '\\^'},
  {name: '$', tip: '\\$'},
  {name: '[', tip: '\\['},
  {name: ']', tip: '\\]'},
  {name: '{', tip: '\\{'},
  {name: '}', tip: '\\}'},
  {name: '(', tip: '\\('},
  {name: ')', tip: '\\)'},
  {name: '|', tip: '\\|'},
  {name: '/', tip: '\\/'},
];

const specials = [
  {name: '\\t', tip: 'Tab character'},
  {name: '\\n', tip: 'New line character'},
  {name: '\\r', tip: 'Line return character'},
];

const groups = [
  {name: '(abc)', tip: 'Match group for whatever is between ( )'},
  {name: '$number', tip: 'Select a specific match group'},
];

const counts = [
  {name: '+', tip: 'At least one'},
  {name: '*', tip: 'Zero or more'},
  {name: '{min, max}', tip: 'At least min number, at most max number'},
  {name: '?', tip: 'Zero or one'},
  {name: '|', tip: 'Or operator'},
];

var RegexReference = React.createClass({

  handleTouchTap: function(obj) {
    this.props.onClickChip(obj);
  },

  renderChip: function(obj) {
    return (
      <div style={style.chipContainer} key={obj.name}>
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
      <Paper style={style}>

        <Subheader>Selectors</Subheader>
        <div style={style.chipContainer}>
          {selectors.map(this.renderChip)}
        </div>
        <Divider />

        <Subheader>Flags</Subheader>
        <div style={style.chipContainer}>
          {flags.map(this.renderChip)}
        </div>
        <Divider />

        <Subheader>Counts</Subheader>
        <div style={style.chipContainer}>
          {counts.map(this.renderChip)}
        </div>
        <Divider />

        <Subheader>Position</Subheader>
        <div style={style.chipContainer}>
          {positions.map(this.renderChip)}
        </div>
        <Divider />

        <Subheader>Groups</Subheader>
        <div style={style.chipContainer}>
          {groups.map(this.renderChip)}
        </div>
        <Divider />

        <Subheader>Special characters</Subheader>
        <div style={style.chipContainer}>
          {specials.map(this.renderChip)}
        </div>
        <Divider />

        <Subheader>Charcters to escape with \</Subheader>
        <div style={style.chipContainer}>
          {escapes.map(this.renderChip)}
        </div>
      </Paper>
    );
  }
})

module.exports = RegexReference;
