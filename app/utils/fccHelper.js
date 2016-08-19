var axios = require('axios');

var helpers = {
  getCampersInfo: function () {
    // fetch the list of top 100 recent campers:
    return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
      .then(function (answer) {
        return (answer.data);
      })
      .catch(function (error) {
        console.warn('Error in axios request for the campers list: ', error);
        return(error);
      })
  }
}

module.exports = helpers;
