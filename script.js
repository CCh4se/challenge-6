// var key = "2c9d51edd3cd7b196d7798f8d5722ef0";
//
//
//
//
//
//
// function attached to the button to pull the city information from the field where the city was typed.
function getWeather(){
    var newCity = document.getElementById("citySearch");
    var cityName = document.getElementById("cityName");
    cityName.innerHTML ="--"+newCity.value+"--";
}

// variables for the 3 speperate server-side APIs
var fiveDayForecast = "https://api.openweathermap.org/data/2.5/forecast?q=+newCity.value+&appid=2c9d51edd3cd7b196d7798f8d5722ef0";

var weatherForecast = "https://api.openweathermap.org/data/2.5/forecast?lat=35&lon=80&appid=2c9d51edd3cd7b196d7798f8d5722ef0";

var geoCoding = "http://api.openweathermap.org/geo/1.0/direct?q=+newCity.value+&limit=5&appid=2c9d51edd3cd7b196d7798f8d5722ef0";

// fetch forecast
fetch(fiveDayForecast)
    .then(function(response) {
        if (!response.ok) throw new Error('Huh?');
 
        console.log('response :>>', response);

        return response.json();
})
    .then(function(data) {
        console.log('data :>>', data);

        var dump = document.createElement('pre');
        dump.textContent = JSON.stringify(data, null, 2);
        document.body.appendChild(dump);
})
    .catch(function(error) {
        console.log(error);
});

fetch(weatherForecast)
    .then(function(response) {
        if (!response.ok) throw new Error('Huh?');
 
        console.log('response :>>', response);

        return response.json();
})
    .then(function(data) {
        console.log('data :>>', data);

        var dump = document.createElement('pre');
        dump.textContent = JSON.stringify(data, null, 2);
        document.body.appendChild(dump);
})
    .catch(function(error) {
        console.log(error);
});

fetch(geoCoding)
    .then(function(response) {
        if (!response.ok) throw new Error('Huh?');
 
        console.log('response :>>', response);

        return response.json();
})
    .then(function(data) {
        console.log('data :>>', data);

        var dump = document.createElement('pre');
        dump.textContent = JSON.stringify(data, null, 2);
        document.body.appendChild(dump);
})
    .catch(function(error) {
        console.log(error);
});
