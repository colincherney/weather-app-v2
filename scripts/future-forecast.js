//update forecast sidebar when switching between farenheit and celsius

function updateFarenheit(location) {
  fetch(
    "https://api.weatherapi.com/v1/forecast.json?key=f2c31ee9458142fbbd5231344232207&q=" +
      location +
      "&&days=7&aqi=no&alerts=no"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
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

function updateCelsius(location) {
  fetch(
    "https://api.weatherapi.com/v1/forecast.json?key=f2c31ee9458142fbbd5231344232207&q=" +
      location +
      "&&days=7&aqi=no&alerts=no"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      $("#day-zero-temp").text(
        response.forecast.forecastday[0].day.maxtemp_c +
          "°" +
          " / " +
          response.forecast.forecastday[0].day.mintemp_c +
          "°"
      );
      $("#day-one-temp").text(
        response.forecast.forecastday[1].day.maxtemp_c +
          "°" +
          " / " +
          response.forecast.forecastday[1].day.mintemp_c +
          "°"
      );
      $("#day-two-temp").text(
        response.forecast.forecastday[2].day.maxtemp_c +
          "°" +
          " / " +
          response.forecast.forecastday[2].day.mintemp_c +
          "°"
      );
      $("#day-three-temp").text(
        response.forecast.forecastday[3].day.maxtemp_c +
          "°" +
          " / " +
          response.forecast.forecastday[3].day.mintemp_c +
          "°"
      );
      $("#day-four-temp").text(
        response.forecast.forecastday[4].day.maxtemp_c +
          "°" +
          " / " +
          response.forecast.forecastday[4].day.mintemp_c +
          "°"
      );
      $("#day-five-temp").text(
        response.forecast.forecastday[5].day.maxtemp_c +
          "°" +
          " / " +
          response.forecast.forecastday[5].day.mintemp_c +
          "°"
      );
      $("#day-six-temp").text(
        response.forecast.forecastday[6].day.maxtemp_c +
          "°" +
          " / " +
          response.forecast.forecastday[6].day.mintemp_c +
          "°"
      );
    });
}
