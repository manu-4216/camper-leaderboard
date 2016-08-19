var React = require('react');
var PropTypes = React.PropTypes;
require('../main.scss');

var MessageBox = function (props) {
  if (props.isLoading) {
    return (
      <h1 className='messageBox'>
        Loading. Please wait...
      </h1>
    );
  }
  if (props.errorMessage !== '') {
    return (
      <h1 className='messageBox'>
        {props.errorMessage}
      </h1>
    );
  }
  return null;
}

MessageBox.PropTypes = {
  isLoading: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired
};

module.exports = MessageBox;
