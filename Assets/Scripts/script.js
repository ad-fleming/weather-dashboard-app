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
var dataDump = $(".temporaryDataDump");
var city = $();
var currentForecastQuery = "http"
var fiveDayForecastQuery = "http"
// 2)Create a variable for building url query string
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



