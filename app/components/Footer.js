var React = require('react');
require('../main.scss');

var Footer = function(props) {
  return (
    <div className='bar text-center footer'>
      by <a href='https://codepen.io/manu4216/' target='_blank'>manu4216</a>
      <img className='logo' src="https://avatars.githubusercontent.com/u/18104777?v=3" alt='logo' height='36' width='36'></img>
    </div>
  )
};

module.exports = Footer;
