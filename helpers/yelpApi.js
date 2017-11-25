//Dependencies
const axios = require('axios');
const config = require('./config.js');

//Request format http://opentable.herokuapp.com/api/{endpoint}?{parameter}
//Helper functions to export

//First do a POST Request to get the access_token https://api.yelp.com/oauth2/token?client_id={client_id}&client_secret={client_secret}
//The Response will have an access_token in the response body. To use this token in the request headers we must specify an authorization key with the value 'Bearer {access_token};
//Ex: headers : {
    // authorization: 'Bearer access_token'
// }
//Use this to make GET reqeusts to the URL https://api.yelp.com/v3/businesses/search?location=San+Francisco&term=restaurants
//

const access = config.YELP_ACCESS_TOKEN;
const yelpHeaders = {
  headers: {
    Authorization: `Bearer ${access}`
  }
};


const getRestaurantsByCity = (cityAndState = 'San Francisco') => {
  const cityState = cityAndState.split(',');
  const city = cityState[0];
  const state = cityState[1];
  const cityArr = city.split(' ');
  const parsedCity = cityArr.join('+');
  let pCandS = '';
  if (state === undefined) {
    pCandS = parsedCity;
  } else {
    pCandS = `${parsedCity},+ ${state}`;
  }
  return axios.get(`https://api.yelp.com/v3/businesses/search?location=${pCandS}&term=restaurants&limit=50`, yelpHeaders);
};

const getRestaurantInCity = (Restaurant, City)=> {
  const cityArr = City.split(' ');
  const parsedCity = cityArr.join('+');
  const restaurantArr = Restaurant.split(' ');
  const parsedRes = restaurantArr.join('+');
  return axios.get(`https://api.yelp.com/v3/businesses/search?location=${parsedCity}&term=${parsedRes}`, yelpHeaders);
};

module.exports = {
  getRestaurantsByCity: getRestaurantsByCity,
  getRestaurantInCity: getRestaurantInCity
};