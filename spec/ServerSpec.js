const request = require('request');

describe("Server", function() {

		const URL = 'http://localhost:3000';

  it("Server responds to /data", function(done) {
  		request(URL + '/data', (err, res, body) => {
  				expect(res.statusCode).toEqual(200);
  				done();
  		})
  });

  it("Server responds to /", function(done) {
  		request(URL, (err, res, body) => {
  				expect(res.statusCode).toEqual(200);
  				done();
  		})
  });

});
