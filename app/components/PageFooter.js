var React = require('react');
require('../main.scss');

var PageFooter = function(props) {
  return (
    <div className='bar footer'>
      by <a className='link' href='https://codepen.io/manu4216/' target='_blank'>manu4216</a>
      <img className='logo' src="https://avatars.githubusercontent.com/u/18104777?v=3" alt='code author image'></img>
    </div>
  )
};

module.exports = PageFooter;
