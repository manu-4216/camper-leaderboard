var React = require('react');
var PropTypes = React.PropTypes;
require('../main.scss');

// Private component, since not useful elsewhere other than TableHeader.
var Arrow = function (props) {
  var sortImageSrc = '#';
  var sortTypeChanged = (props.sort.type !== props.newSortType);
  if  (sortTypeChanged || props.sort.order === '') {
    // default neutral icon (unsorted)
    sortImageSrc='../images/neutral-arrow.png';
  } else if (props.sort.order === 'asc') {
    sortImageSrc='../images/up-arrow.png';
  } else if (props.sort.order === 'desc') {
    sortImageSrc='../images/down-arrow.png';
  }

  return <img className='sort-arrow--img' src={sortImageSrc} alt='sort arrow'></img>
}

Arrow.propTypes = {
  sort: PropTypes.object.isRequired,
  newSortType: PropTypes.string.isRequired
}

var TableHeader = function(props) {
  return (
    <thead>
      <tr key={"0"}>
        <th>#</th>
        <th>Camper Name</th>
        <th>
          Points in last 30 days
          <button className='sort-arrow--button' onClick={props.onChangeSortRecent}>
            <Arrow sort={props.sort} newSortType={'recent'}/>
          </button>
        </th>
        <th>
          All time points
          <button className='sort-arrow--button' onClick={props.onChangeSortAll}>
            <Arrow sort={props.sort}  newSortType={'alltime'} />
          </button>
        </th>
      </tr>
    </thead>
  )
};

TableHeader.propTypes = {
  sort: PropTypes.object.isRequired,
  onChangeSortRecent: PropTypes.func.isRequired,
  onChangeSortAll: PropTypes.func.isRequired
};

module.exports = TableHeader;
