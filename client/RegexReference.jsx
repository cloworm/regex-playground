import React from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Chip from 'material-ui/Chip';
import Tooltip from 'rc-tooltip';
import ReactDOM from 'react-dom';

const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',
  width: '100%',
  chipContainer: {
    padding: '0 5px 5px 5px',
    display: 'inline-block'
  },
  tooltipOverlay: {
    backgroundColor: '#E0E0E0',
    width: '150px',
    height: '50px',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
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

  },

  renderChip: function(content) {
    return (
      <div style={style.chipContainer} key={content}>
        <Tooltip
          placement='top'
          overlay={<div style={style.tooltipOverlay}>hello this is a tooltip</div>}
          destroyTooltipOnHide={true}
        >
          <Chip
            onTouchTap={this.handleTouchTap}
          >
            {content}
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
