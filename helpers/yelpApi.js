//Dependencies
const axios = require('axios');
const config = require('config.js');
const Promise = require('bluebird');

//Request format http://opentable.herokuapp.com/api/{endpoint}?{parameter}
//Helper functions to export

//First do a POST Request to get the access_token https://api.yelp.com/oauth2/token?client_id={client_id}&client_secret={client_secret}
//The Response will have an access_token in the response body. To use this token in the request headers we must specify an authorization key with the value 'Bearer {access_token};
//Ex: headers : {
    // authorization: 'Bearer access_token'
// }
//Use this to make GET reqeusts to the URL https://api.yelp.com/v3/businesses/search?location=San+Francisco&term=restaurants
//

let access = config.YELP_ACCESS_TOKEN;
let yelpHeaders = {
    authorization: `Bearer ${access}`
}
let getRestaurantsSF = ()=> {
    return axios.get('https://api.yelp.com/v3/businesses/search?location=San+Francisco&term=restaurants', yelpHeaders);
}

let getRestaurantsCity = (city)=> {
    let cityArr = city.split(' ');
    let parsedCity = cityArr.join('+');
    return axios.get(`https://api.yelp.com/v3/businesses/search?location=${parsedCity}&term=restaurants`), yelpHeaders);
}
module.exports = {
    getRestaurantsSF:getRestaurantsSF,
    getRestaurantsCity:getRestaurantsCity
}