var React = require('react');
var Table = require('../components/Table');
var MessageBox = require('../components/MessageBox');
var fccHelper = require('../utils/fccHelper');

// Stateful master component.
var TableContainer = React.createClass({
  getInitialState: function () {
    return {
      isLoading: true,
      errorMessage: '',
      campers: [],
      sort: {
        type: 'recent',
        order: ''
      }
    }
  },

  componentDidMount: function () {
    fccHelper.getCampersInfo()
    .then(function (answer) {
      if (Array.isArray(answer)) {
        this.setState({
          isLoading: false,
          campers: answer
        })
      } else {
        console.log(answer);
        this.setState({
          isLoading: false,
          errorMessage: answer.message,
          campers: []
        })
      }
    }.bind(this)
    );
  },

  handleChangeSortRecent: function (e) {
    this.changeSort(this.state.sort, 'recent');
  },

  handleChangeSortAll: function (e) {
    this.changeSort(this.state.sort, 'alltime');
  },

  changeSort : function (currentSort, newSortType) {
    var sortedCampers = [];
    var sortTypeChanged = (currentSort.type !== newSortType);
    if (sortTypeChanged) {
      // When changing the sort type, use default order: desc:
      sortedCampers = this.sortArr(this.state.campers, newSortType, 'desc');
      this.setState({
        campers: sortedCampers,
        sort: {
          type: newSortType,
          order: 'desc'
        }
      });
    } else {
      // same sort type. Reverse the sort order (asc/desc)
      if (currentSort.order === "asc") {
        // sort asc:
        sortedCampers = this.sortArr(this.state.campers, newSortType, 'desc');
        this.setState({
          campers: sortedCampers,
          sort: {
            type: newSortType,
            order: 'desc'
          }
        });
      } else {
        // sort asc:
        sortedCampers = this.sortArr(this.state.campers, newSortType, 'asc');
        this.setState({
          campers: sortedCampers,
          sort: {
            type: newSortType,
            order: 'asc'
          }
        });
      }
    }
  },

  // Sorts an array of objects based on the 'prop', in 'order'=asc/desc
  sortArr: function (arr, prop, order) {
    if (arr === []) {
      return [];
    }

    if (order === 'asc') {
      arr.sort(function (a, b) {
        if (a[prop] > b[prop]) {
          return 1;
        }
        if (a[prop] < b[prop]) {
          return -1;
        }
        return 0;
      });
    } else {
      arr.sort(function (a, b) {
        if (a[prop] > b[prop]) {
          return -1;
        }
        if (a[prop] < b[prop]) {
          return 1;
        }
        return 0;
      });
    }

    return arr;
  },

  render: function () {
    return (
      <div>
        <Table
          campers={this.state.campers}
          sort={this.state.sort}
          onChangeSortRecent={this.handleChangeSortRecent}
          onChangeSortAll={this.handleChangeSortAll} />
        <MessageBox
          isLoading={this.state.isLoading}
          errorMessage={this.state.errorMessage}/>
      </div>
    )
  }
});



module.exports = TableContainer;
