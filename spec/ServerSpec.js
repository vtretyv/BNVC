const request = require('request');
const axios = require('axios');

describe("Server", function() {

		const URL = 'http://localhost:3000';

  it("Server responds to /data", function(done) {
  		request(URL + '/data', (err, res, body) => {
  				expect(res.statusCode).toEqual(200);
  				done();
  		})
  });

  it("Server responds to /data/city", function(done) {
  		request(URL + '/data/city', (err, res, body) => {
  				expect(res.statusCode).toEqual(200);
  				done();
  		})
  });

  it("Server responds to /book", function(done) {
      axios.post(URL + '/book', {})
      .then( res => {
        expect(res.status).toEqual(200);
        done();
      }).catch( err => {
          throw err;
      })
  });

  it("Server responds to /cancel", function(done) {
      axios.put(URL + '/cancel', {})
      .then( res => {
        expect(res.status).toEqual(200);
        done();
      }).catch( err => {
          throw err;
      })
  });

  it("Server responds to /phone", function(done) {
      request(URL + '/phone', (err, res, body) => {
          expect(res.statusCode).toEqual(200);
          done();
      })
  });

});
