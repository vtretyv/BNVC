//Dependencies
const axios = require('axios');
// const config = require('config.js');
const Promise = require('bluebird');

//Request format http://opentable.herokuapp.com/api/{endpoint}?{parameter}
//Helper functions to export

let getRestaurantsSF = ()=>{
    //Returns a promise
     return axios.get('http://opentable.herokuapp.com/api/restaurants?city=San+Francisco');
}


let getRestaurantsCity = (city)=>{
    let cityArr = city.split(' ');
    let parsedCity = cityArr.join('+');
    //Returns a promise
    return axios.get(`http://opentable.herokuapp.com/api/restaurants?city=${parsedCity}`);
}

module.exports = {
    getRestaurantsSF:getRestaurantsSF,
    getRestaurantsCity:getRestaurantsCity
}