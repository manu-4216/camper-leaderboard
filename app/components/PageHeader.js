var React = require('react');
require('../main.scss');

var PageHeader = function(props) {
  return (
    <div className='bar'>
      <span className='header'>FreeCodeCamp</span>
      <img className='logo' src='http://metakata.altervista.org/wordpress/wp-content/uploads/2015/08/freecodecamp_white.png' alt='logo'></img>
    </div>
  )
};

module.exports = PageHeader;
