// used for make a https call for api request
var request = require("request");
//javascript testing framework
var expect = require("chai").expect;
//api
var baseUrl = "https://api.themoviedb.org";
// has features to look through the node_module files
var util = require("util");

describe('returns Nemo', function() {
    it('returns Nemo', function(done) {
        request.get({ url: baseUrl + '/3/movie/12?api_key=f561ad1d8b6694aee707893207c3db74&language=en-US' },
            function(error, response, body) {
            		var bodyObj = JSON.parse(body);
            		expect(bodyObj.title).to.equal("Finding Nemo");
            		expect(bodyObj.adult).to.equal(false);
                    expect(bodyObj.status).to.equal("Released");
                    expect(bodyObj.release_date).to.equal("2003-05-30");
                    expect(response.statusCode).to.equal(200);
                    console.log(body);
                done();
            });
    });
});

describe('returns Harrison-ford', function() {
    it('returns Harrison-ford', function(done) {
        request.get({ url: baseUrl + '/3/person/3?api_key=f561ad1d8b6694aee707893207c3db74' },
            function(error, response, body) {
                    var bodyObj = JSON.parse(body);
                    expect(bodyObj.name).to.equal("Harrison Ford");
                    expect(bodyObj.adult).to.equal(true);
                    expect(bodyObj.gender).to.equal(2);
                    expect(bodyObj.birthday).to.equal("1942-07-13");
                    expect(response.statusCode).to.equal(200);
                    console.log(body);
                done();
            });
    });
});


