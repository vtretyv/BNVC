const yelp = require('../helpers/yelpApi.js');
const axios = require('axios');


describe("API Helpers", function() {

  it("Get San Francisco Restuarants should return an object with an array of restuarant objects that defaults to San Francisco if no parameter is specified.", function(done) {
    yelp.getRestaurantsByCity().then((results)=>{
      expect(results.data.businesses[0].location.city).toEqual('San Francisco');
      done();
    })
   

  });

  it("The Get Restaurants in City function should return restaurants from the given city", function() {
    yelp.getRestaurantsByCity('Chicago').then((results)=>{
      expect(results.data.businesses[0].location.city).toEqual('Chicago');
      done();
    })

  });

  it("The Get Restaurants in City function should return restaurants from the given city", function() {
    yelp.getRestaurantsByCity('Franklin, IA').then((results)=>{
      expect(results.data.businesses[0].location.city).toEqual('Franklin');
      expect(results.data.businesses[0].location.state).toEqual('IA');
      
      done();
    })

  });

  it("The Get Restaurants in City function should return restaurants from the given city", function() {
    yelp.getRestaurantsByCity('Franklin, TN').then((results)=>{
      expect(results.data.businesses[0].location.city).toEqual('Franklin');
      expect(results.data.businesses[0].location.state).toEqual('TN');
      
      done();
    })

  });

  it("The Get Restaurants by City function should return restaurants from the given city", function() {
    yelp.getRestaurantInCity('Ichido','San Francisco').then((results)=>{
      expect(results.data.businesses[0].location.city).toEqual('San Francisco');
      expect(results.data.businesses[0].name).toEqual('Ichido');
      done();
    })

  });

  
});