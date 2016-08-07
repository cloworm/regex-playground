import React from 'react';
import Chip from 'material-ui/Chip';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

var MatchItem =  React.createClass({
  propTypes: {
    item: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      <div style={styles.wrapper}>
        <Chip style={styles.chip}>{this.props.item}</Chip>
      </div>
    )
  }
})

module.exports = MatchItem;
