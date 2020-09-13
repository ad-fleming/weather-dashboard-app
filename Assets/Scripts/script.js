// ```
// <!-- GIVEN a weather dashboard with form inputs
// Build landing page structure in html
// create css classes to correspond with dynamically created elements

// 1) Define global variables/permanent elements

var apiKey = "a114e9c8bd3f8f06caf27cdcb845acfd";
var targetDivEl = $(".targetDiv");
var searchContainerEl = $(".searchContainerEl");
var citySearchBar = $("#citySearchBar");
var searchCityBtn = $("#searchCityBtn");
var forecastBox = $(".forecastBox");
var cityNameEl = $(".cityDisplay");
var fiveCastTitle = $(".fivecastTitle");
var temperatureEl = $(".temp");
var humidityEl = $(".humidity");
var windSpeedEl = $(".windSpeed");
var uvIndexEl = $(".uvIndex");
var day1El = $("#day1");
var currentDate = moment().format('MMM Do');
var navDateEl = $("#navDate");
navDateEl.text("Current Date: " + currentDate);
// 2)Create a variable for building url query string


// ====================== On search click ======================
// ============================================================
searchCityBtn.on("click", function(event){
    event.preventDefault();
    var city = citySearchBar.val().trim();
    var currentForecastQuery = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey
    $.ajax({
        Method: "GET",
        url: currentForecastQuery,
    })
    .then(function(response){
        console.log(currentForecastQuery);
        console.log(response);
        console.log(response.coord.lat);
        console.log(response.coord.lon);
        var cityLat = response.coord.lat;
        var cityLon = response.coord.lon;
        var cityLocation = "lat=" + cityLat + "&lon=" + cityLon + "&";
        cityNameEl.html("<h1>Today in " + response.name + ":</h1>");
        temperatureEl.text("Current Temp: " + response.main.temp + " °F");
        humidityEl.text("Humidity: " + response.main.humidity + "%");
        windSpeedEl.text("Wind Speed: " + response.wind.speed +  " MPH");
        
        $.ajax({
            Method:"GET",
            url:"https://api.openweathermap.org/data/2.5/onecall?" + cityLocation + "exclude=hourly,minutely&units=imperial&appid=" + apiKey
        })
        .then(function(response){
            console.log(response);
            forecastBox.attr("class", "forecastDay");
            fiveCastTitle.removeClass("hide");
            for( i = 0; i < 5; i ++){
                // TODO: Populate "title" divs using moment js (create a 'now' moment in global scope and set the div to have a text moment().add(1, "days).format("M,DD,YYYY")))
                var referenceDate = moment().add(i, 'days').format('MMM Do');
                var addNumber=i;

                var forecastDate = $('<div>');
                forecastDate.attr("class", "text-center mt-3 mb-1")
                forecastDate.text(referenceDate);
                var forecastIcon = $("<img>");
                forecastIcon.attr("src", "http://openweathermap.org/img/wn/" + response.daily[i].weather[0].icon + "@2x.png");
                forecastIcon.attr("class", "forecastIcon mt-1 mb-1");
                var forecastTemp = $('<div>');
                forecastTemp.attr("class", "text-center mt-1 mb-1");
                forecastTemp.text("Temp: " + response.daily[i].temp.day +"°F");
                var forecastHumidity =  $("<div>");
                forecastHumidity.attr("class", "text-center mt-1 mb-1");
                forecastHumidity.text("Humidity: " + response.daily[i].humidity + "%");
                $("#" + i).append(forecastDate,forecastIcon,forecastTemp,forecastHumidity);
            }
        })
    });

  
    
}); //<----- This is the end of the Search Button click event 


// 3) set a variable for the city name equal to a data-name attribute which is assigned on click and equal to the city the user enters
// 4) Write a function that on user click of the search button  uses ajax to make a query search to the API
    // 4.1) if the search is empty on click return, otherwise it should empty() the search display areas of any existing information
    // 4.2) get the object from the api for current weather forecast
    // 4.2)get the object from the api for 5 day forecast
    // 4.3) parse the data and display to corresponding areas


// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city
// WHEN I open the weather dashboard
// THEN I am presented with the last searched city forecast -->
// ```



