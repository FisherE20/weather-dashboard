$(".search").on("click", function () {
  // This is our API key
  var APIKey = "b6c1420f672427cac6dc4bc3480d4d03";
  var city = $("#search").val();
  // Here we are building the URL we need to query the database
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?" +
    "q=" +
    city +
    "&appid=" +
    APIKey;

  console.log(city);
  // Here we run our AJAX call to the OpenWeatherMap API
  $.ajax({
    url: queryURL,
    method: "GET",
  })
    // We store all of the retrieved data inside of an object called "response"
    .then(function (response) {
      // Log the queryURL
      console.log(queryURL);
      // Log the resulting object
      console.log(response);
      console.log(city);
      $("ul").prepend(`<li>${city}</li>`);

      // Transfer content to HTML
      $(".city").html("<h1>" + response.name + "</h1>");
      $(".pThree").text("Wind Speed:" + response.wind.speed);
      $(".pTwo").text("Humidity:" + response.main.humidity);

      // Convert the temp to fahrenheit
      var tempF = (response.main.temp - 273.15) * 1.8 + 32;

      // add temp content to html
      $(".pOne").text("Temperature (K) " + response.main.temp);
      $(".pOne").text("Temperature (F) " + tempF.toFixed(2));

      var APIKey = "b6c1420f672427cac6dc4bc3480d4d03";
      var lon = response.coord.lon;
      var lat = response.coord.lat;

      let queryURLUv =
        "https://api.openweathermap.org/data/2.5/onecall?appid=" +
        APIKey +
        "&lat=" +
        lat +
        "&lon=" +
        lon;

      $.ajax({
        url: queryURLUv,
        method: "GET",
      }).then(function (res) {
        console.log(res);
        lat = res.lat;
        lon = res.lon;
        $(".pFour").text("UV Index:" + res.current.uvi);
      });

      var key = "b6c1420f672427cac6dc4bc3480d4d03";
      var queryUrl = "https://api.openweathermap.org/data/2.5/forecast";

      $.ajax({
        url: queryUrl,
        dataType: "json",

        data: {
          q: city,
          appid: key,
          units: "metric",
          cnt: "6",
        },
        success: function (data) {
          console.log("Received data:", data); // For testing
          var wf = "";
          $.each(data.list, function (index, val) {
            wf += "<b>Day " + index + "</b>: "; // Day
            wf += val.main.temp + "&degC"; // Temperature
            wf += "<span> | " + val.weather[0].description + "</span>"; // Description
            wf +=
              "<img src='https://openweathermap.org/img/w/" +
              val.weather[0].icon +
              ".png'>"; // Icon
          });
          $("#futureCast").html(wf);
        },
      });
    });
});
