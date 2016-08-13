import React from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Chip from 'material-ui/Chip';

const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',
  width: '100%',
  chip: {
      margin: 4,
      display: 'inline-block'
  },
  chipContainer: {
    padding: '0 5px 5px 5px'
  }
};
const flags = 'g i m'.split(' ');
const selectors = '. \\w \\W \\s \\S \\d \\D [abc] [^abc] [a-z]'.split(' ');
const positions = '^ $'.split(' ');
const escapes = '. \\ + * ? ^ $ [ ] { } ( ) | /'.split(' ');
const specials = '\\t \\n \\r'.split(' ');
const groups = '(abc) $1'.split(' ');
const counts = '+ * {#,#} ? |'.split(' ');

var RegexReference = React.createClass({
  handleTouchTap: function() {
    alert('You clicked the chip!');
  },

  renderChip: function(content) {
    return (
      <Chip
        key={content}
        onTouchTap={this.handleTouchTap}
        style={style.chip}
      >
        {content}
      </Chip>
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
