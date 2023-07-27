let getLocation = "Scottsdale";

function getWeather(location) {
  fetch(
    "https://api.weatherapi.com/v1/forecast.json?key=f2c31ee9458142fbbd5231344232207&q=" +
      location +
      "&&days=7&aqi=no&alerts=no"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
      console.log(response.current.temp_f);

      $(".search-and-weather").empty();
      $(".search-and-weather").append(
        "<div class='search'><input type='text' id='input' placeholder='Search Location' /> </div>"
      );
      $(".search-and-weather").append(weatherCombine);
      $(".search-and-weather").append(todaysForecast);
      $(".search-and-weather").append(currentConditions);

      // display information

      //change location name
      $("#city-name").text(
        response.location.name + ", " + response.location.region
      );

      //change chance of rain
      $("#rain-chance").text(
        "Chance of rain: " +
          response.forecast.forecastday[0].day.daily_chance_of_rain +
          "%"
      );

      //change current temp
      $("#current-temp").text(response.current.temp_f + "°");

      //hourly forecast

      //six am
      $("#six-am").text(response.forecast.forecastday[0].hour[6].temp_f + "°");
      $("#six-am-condition").attr(
        "src",
        response.forecast.forecastday[0].hour[6].condition.icon
      );

      //nine am
      $("#nine-am").text(response.forecast.forecastday[0].hour[9].temp_f + "°");
      $("#nine-am-condition").attr(
        "src",
        response.forecast.forecastday[0].hour[9].condition.icon
      );

      //twelve pm
      $("#noon").text(response.forecast.forecastday[0].hour[12].temp_f + "°");
      $("#noon-condition").attr(
        "src",
        response.forecast.forecastday[0].hour[12].condition.icon
      );

      //three pm
      $("#three-pm").text(
        response.forecast.forecastday[0].hour[15].temp_f + "°"
      );
      $("#three-pm-condition").attr(
        "src",
        response.forecast.forecastday[0].hour[15].condition.icon
      );

      //six pm
      $("#six-pm").text(response.forecast.forecastday[0].hour[18].temp_f + "°");
      $("#six-pm-condition").attr(
        "src",
        response.forecast.forecastday[0].hour[18].condition.icon
      );

      //nine pm
      $("#nine-pm").text(
        response.forecast.forecastday[0].hour[21].temp_f + "°"
      );
      $("#nine-pm-condition").attr(
        "src",
        response.forecast.forecastday[0].hour[21].condition.icon
      );

      //current condition
      $("#current-condition").attr("src", response.current.condition.icon);

      //real feel
      $("#real-feel").text(response.current.feelslike_f + "°");

      //wind
      if (windUnit === "mph") {
        $("#current-wind").text(response.current.wind_mph + " mph");
      } else {
        $("#current-wind").text(response.current.wind_kph + " km/h");
      }

      //uv index
      $("#current-uv").text(response.current.uv);

      //humidity
      $("#current-humidity").text(response.current.humidity + "%");

      //seven day forecast

      //change dates
      $("#day-zero").text(response.forecast.forecastday[0].date);
      $("#day-one").text(response.forecast.forecastday[1].date);
      $("#day-two").text(response.forecast.forecastday[2].date);
      $("#day-three").text(response.forecast.forecastday[3].date);
      $("#day-four").text(response.forecast.forecastday[4].date);
      $("#day-five").text(response.forecast.forecastday[5].date);
      $("#day-six").text(response.forecast.forecastday[6].date);

      //change conditions
      $("#day-zero-conditions").attr(
        "src",
        response.forecast.forecastday[0].day.condition.icon
      );
      $("#day-one-conditions").attr(
        "src",
        response.forecast.forecastday[1].day.condition.icon
      );
      $("#day-two-conditions").attr(
        "src",
        response.forecast.forecastday[2].day.condition.icon
      );
      $("#day-three-conditions").attr(
        "src",
        response.forecast.forecastday[3].day.condition.icon
      );
      $("#day-four-conditions").attr(
        "src",
        response.forecast.forecastday[4].day.condition.icon
      );
      $("#day-five-conditions").attr(
        "src",
        response.forecast.forecastday[5].day.condition.icon
      );
      $("#day-six-conditions").attr(
        "src",
        response.forecast.forecastday[6].day.condition.icon
      );

      //change 7 day high/low temps
      $("#day-zero-temp").text(
        response.forecast.forecastday[0].day.maxtemp_f +
          "°" +
          " / " +
          response.forecast.forecastday[0].day.mintemp_f +
          "°"
      );
      $("#day-one-temp").text(
        response.forecast.forecastday[1].day.maxtemp_f +
          "°" +
          " / " +
          response.forecast.forecastday[1].day.mintemp_f +
          "°"
      );
      $("#day-two-temp").text(
        response.forecast.forecastday[2].day.maxtemp_f +
          "°" +
          " / " +
          response.forecast.forecastday[2].day.mintemp_f +
          "°"
      );
      $("#day-three-temp").text(
        response.forecast.forecastday[3].day.maxtemp_f +
          "°" +
          " / " +
          response.forecast.forecastday[3].day.mintemp_f +
          "°"
      );
      $("#day-four-temp").text(
        response.forecast.forecastday[4].day.maxtemp_f +
          "°" +
          " / " +
          response.forecast.forecastday[4].day.mintemp_f +
          "°"
      );
      $("#day-five-temp").text(
        response.forecast.forecastday[5].day.maxtemp_f +
          "°" +
          " / " +
          response.forecast.forecastday[5].day.mintemp_f +
          "°"
      );
      $("#day-six-temp").text(
        response.forecast.forecastday[6].day.maxtemp_f +
          "°" +
          " / " +
          response.forecast.forecastday[6].day.mintemp_f +
          "°"
      );
    });
}

$("body").on("keyup", "#input", function (e) {
  if (e.keyCode === 13) {
    getLocation = $("#input").val();
    if (tempUnit === "farenheit") {
      getWeather(getLocation);
    } else {
      getWeatherCelsius(getLocation);
    }
  }
});

$(document).ready(function () {
  getWeather("Scottsdale");
});
