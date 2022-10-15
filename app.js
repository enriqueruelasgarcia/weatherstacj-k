const request = require('postman-request');
request('http://api.weatherstack.com/current?access_key=c0b3203d7023274784d502b172a89c7c&query=Los%Angeles', function(error, response, body) {
    let fulljson = {
        "location": '',
        "current": '',
        "pollution": ''
    };
    let eljson = JSON.parse(body)
    if (eljson.success == false) {;
        console.log(eljson.success)
        console.log(eljson.error)
    } else {
        fulljson.location = eljson.location;
        fulljson.current = eljson.current;
        request('http://api.airvisual.com/v2/city?city=Los%20Angeles&state=California&country=USA&key=3a47cdd8-1a8c-418e-9866-e002be09a2fd', function(error, response, body) {
            let jsoninfo2 = JSON.parse(body);
            if (jsoninfo2.status == 'fail') {
                console.log(jsoninfo2.status)
                console.log(jsoninfo2.data.message)
            } else {
                fulljson.pollution = jsoninfo2.data.current.pollution;
                console.log(fulljson)
            }
        })
    }
});