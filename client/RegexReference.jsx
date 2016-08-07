import React from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import {List, ListItem} from 'material-ui/List';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';

const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',
  width: '100%'
};

// const referenceData = [
//   {
//     command:
//     description:
//   },
// ];

const tableData = [
  {
    name: 'John Smith',
    status: 'Employed',
  },
  {
    name: 'Randal White',
    status: 'Unemployed',
  },
  {
    name: 'Stephanie Sanders',
    status: 'Employed',
  },
  {
    name: 'Steve Brown',
    status: 'Employed',
  },
  {
    name: 'Joyce Whitten',
    status: 'Employed',
  },
  {
    name: 'Samuel Roberts',
    status: 'Employed',
  },
  {
    name: 'Adam Moore',
    status: 'Employed',
  },
];

var RegexReference = React.createClass({

  render: function() {
    return (
      <Paper style={style}>
        <List>
          <Subheader>Flags</Subheader>
          <Divider />
          <ListItem primaryText='g' secondaryText='global' />
          <Subheader>Characters</Subheader>
          <Divider />
          <ListItem primaryText='\w' secondaryText='word characters' />
        </List>
      </Paper>
    );
  }
})

module.exports = RegexReference;

// <Table
//   height='300px'
//   selectable={false}
// >
//   <TableHeaderColumn adjustForCheckbox={false} colspan='2' style={{ textAlign: 'center' }}>
//     <TableRow>
//       Modifiers
//     </TableRow>
//   </TableHeaderColumn>
//   <TableBody displayRowCheckbox={false}>
//     {tableData.map( (row, index) => (
//       <TableRow key={index} displayBorder={false}>
//         <TableRowColumn>{row.name}</TableRowColumn>
//         <TableRowColumn>{row.status}</TableRowColumn>
//       </TableRow>
//       ))}
//   </TableBody>
// </Table>
