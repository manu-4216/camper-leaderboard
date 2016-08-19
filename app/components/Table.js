var React = require('react');
var PropTypes = React.PropTypes;
var TableHeader = require('./TableHeader');
var TableRowList = require('./TableRowList');
require('../main.scss');

var Table = function(props) {
  return (
    <div className="content">
      <table>
        <caption colSpan='4'>Leaderboard</caption>
        <TableHeader
          sort={props.sort}
          onChangeSortRecent={props.onChangeSortRecent}
          onChangeSortAll={props.onChangeSortAll} />
        <TableRowList campers={props.campers} />
      </table>
    </div>
  )
};

Table.propTypes = {
  campers: PropTypes.array.isRequired,
  onChangeSortRecent: PropTypes.func.isRequired,
  onChangeSortAll: PropTypes.func.isRequired,
}

module.exports = Table;
