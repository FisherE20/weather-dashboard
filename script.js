$(".search").on("click", function(event) {

  // This is our API key
var APIKey = "b6c1420f672427cac6dc4bc3480d4d03";

// Here we are building the URL we need to query the database
var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
  "q="+ city +"&appid=" + APIKey;
console.log(queryURL);

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
 
    // Log the queryURL
 console.log(queryURL);

 // Log the resulting object
 console.log(response);


 // // storing the data from the AJAX request in the results variable

fetch(api)
.then(response =>{
  return response.json();
})
.then(data =>{
  return data.json();
})

var results = response.Data;

$("#cities").text(JSON.stringify(response));

// // Looping through each result item
// //for (var i = 0; i < results.city.length; i++) {

// // Creating and storing a div tag
   var section = $("<article>");

   $("#city-list").prepend(rowDiv); 

// //Creating an H1 tag for the city searched
   var city= $("<h1>").text(results.name);
   $(".city").append("<h1>" + response.name + "</h1>");

//  // Creating a paragraph tag with the result item's temperature
var pOne = $("<p>").text(results.main.temp);
citiesArticle.append(pOne);

// // Convert the temp to fahrenheit
var tempF = (results.main.temp - 273.15) * 1.80 + 32;

// // add temp content to html
$(".temp").text(results.main.temp);
$(".tempF").text("Temperature (F) " + tempF.toFixed(2));

// // Creating a paragraph tag with the result item's humidity
  var pTwo = $("<p>").text(results.humidity);
  citiesArticle.append(pTwo);

// // Creating a paragraph tag with the result item's wind speed
  var pThree = $("<p>").text(results.wind.speed);
  citiesArticle.append(pThree);  

// // Creating a paragraph tag with the result item's uv index
  var p = $("<p>").text(results.uv.index);

// // Creating and storing an image tag
   var weatherImage = $("<img>");

// // Setting the src attribute of the image to a property pulled off the result item
   weatherImage.attr("src", results[i].images.fixed_height.url);

// // Appending the paragraph and image tag to the weatherContainerDiv

// //weatherContainerDiv.append(p);
// // weatherContainerDiv.append(weatherImage);


});
});
    var results = response.Data;

    let lat = results.coord.lat
    let lon = results.coord.lon
    console.log(lat)
   
    let queryURLUv = "http://api.openweathermap.org/data/2.5/uvi/forecast?appid="+ apiKey + "&lat={lat}&lon={lon}&cnt={cnt}"
    
    let queryURLForecast = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid="+ apiKey

    $.ajax({
      url: queryURLForecast,
      method: "GET"

  }).then(function(response){
      console.log(queryURLForecast)
      console.log(response)
  })
//   // Prependng the forecastArticle to the HTML page in the "#gifs-appear-here" div
  $("#futureCast").prepend(forecastArticle);
   
// // function celsiusToFahrenheit(temperature){
// //      return (temperature * 9/5) + 32;


