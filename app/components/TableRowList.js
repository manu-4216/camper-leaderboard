var React = require('react');
var PropTypes = React.PropTypes;
require('../main.scss');

/* Private Component. It receives {...user} using spread operator, which allows
 * for using props.id instead of props.user.id
 */
function Row (props) {
  return (
    <tr>
      <td>
        {props.index + 1}
      </td>
      <td>
        <a href={'https://www.freecodecamp.com/'+props.username} target='_blank'>
          <img className='logo' src={props.img} alt='camper profile picture'></img>
          {props.username}
        </a>
      </td>
      <td>
        {props.recent}
      </td>
      <td>
        {props.alltime}
      </td>
    </tr>
  )
}


var TableRowList = function(props) {
  return (
    <tbody>
      {props.campers.map(function (item, index) {
        return (
          <Row {...item} key={item.username} index={index} />
        )
      })}
    </tbody>
  )
};

TableRowList.propTypes = {
  campers: PropTypes.array.isRequired
}

module.exports = TableRowList;
