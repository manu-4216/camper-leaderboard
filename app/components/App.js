var React = require('react');
var PageHeader = require('../components/PageHeader');
var TableContainer = require('../containers/TableContainer');
var PageFooter = require('../components/PageFooter');
require('../main.scss');

var App = function(props) {
  return (
    <div>
      <PageHeader />
      <TableContainer />
      <PageFooter />
    </div>
  )
};

module.exports = App;
