const request = require('postman-request');
request('http://api.weatherstack.com/current?access_key=c0b3203d7023274784d502b172a89c7c&query=Los%Angeles', function(error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    let jsoninfo = JSON.parse(body);
    console.log('WEATHERSTACK AND AIRVISUAL SAY:');
    console.log(jsoninfo.location);
    console.log(jsoninfo.current);
});
const request2 = require('postman-request');
request2('http://api.airvisual.com/v2/city?city=Los%20Angeles&state=California&country=USA&key=3a47cdd8-1a8c-418e-9866-e002be09a2fd', function(error, response, body) {
    let jsoninfo2 = JSON.parse(body);
    console.log(jsoninfo2.data.current)

});