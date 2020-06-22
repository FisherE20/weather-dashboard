const notificationElement = document.querySelector(".notification");
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const locationElement = document.querySelector(".location p");

// This is our API key
var APIKey = "b6c1420f672427cac6dc4bc3480d4d03";

// Here we are building the URL we need to query the database
var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
  "q=city&appid=" + APIKey;
console.log(queryURL);

$.ajax({
    url: queryURL,
    method: "GET"
  })
  
  .then(function(response) {
 
    // Log the queryURL
 console.log(queryURL);

 // Log the resulting object
 console.log(response);

 $("#weather-container").text(JSON.stringify(response));
  
  });

// storing the data from the AJAX request in the results variable
var results = response.Data;

// Looping through each result item
for (var i = 0; i < results.length; i++) {

// Creating and storing a div tag
   var weatherContainer = $("<div>"); 

 // Creating a paragraph tag with the result item's temperature
var pOne = $("<p>").text("Temperature: " + results[i].temperature);
weatherContainerDiv.append(pOne);

// Convert the temp to fahrenheit
var tempF = (response.main.temp - 273.15) * 1.80 + 32;

// add temp content to html
$(".temp").text("Temperature (K) " + response.main.temp);
$(".tempF").text("Temperature (F) " + tempF.toFixed(2));

// Creating a paragraph tag with the result item's humidity
  var pTwo = $("<p>").text("Humidity: " + results[i].humidity);
  weatherContainerDiv.append(pTwo);

// Creating a paragraph tag with the result item's wind speed
  var pThree = $("<p>").text("Wind Speed: " + results[i].wind.speed);
  weatherContainerDiv.append(pThree);  

// Creating a paragraph tag with the result item's uv index
  var p = $("<p>").text("UV Index: " + results[i].uv.index);

// Creating and storing an image tag
//    var weatherImage = $("<img>");

// Setting the src attribute of the image to a property pulled off the result item
//    weatherImage.attr("src", results[i].images.fixed_height.url);

// Appending the paragraph and image tag to the weatherContainerDiv

weatherContainerDiv.append(p);
// weatherContainerDiv.append(weatherImage);

// Prependng the weatherContainerDiv to the HTML page in the "#gifs-appear-here" div
//$("#gifs-appear-here").prepend(weatherContainerDiv);
}

// function celsiusToFahrenheit(temperature){
//      return (temperature * 9/5) + 32;
// };
