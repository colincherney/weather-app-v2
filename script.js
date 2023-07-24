window.onresize = function () {
  if ($(window).width() < 1024) {
    $("#myVideo").attr("src", "mobileBg.mov");
  } else {
    $("#myVideo").attr("src", "cozy.mov");
  }
};

if ($(window).width() < 1024) {
  $("#myVideo").attr("src", "mobileBg.mov");
}

function getWeather(location) {
  fetch(
    "http://api.weatherapi.com/v1/current.json?key=f2c31ee9458142fbbd5231344232207&q=" +
      location +
      "&aqi=no"
  ),
    fetch(
      "http://api.weatherapi.com/v1/forecast.json?key=f2c31ee9458142fbbd5231344232207&q=" +
        location +
        "&aqi=no"
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        console.log(response);
        console.log(response.current.temp_f);

        // display weather

        // remove assets
        $("#dayTemp").remove();

        //current temps
        $("body").append("<div id='dayTemp'></div>");

        //append current temp
        $("#dayTemp").append(
          "<h1 id='currentTemp'>Current Temperature: " +
            response.current.temp_f +
            "°F</h1>"
        );

        //append feels like temp
        $("#dayTemp").append(
          "<h4 id='feelsLike'>Feels Like: " +
            response.current.feelslike_f +
            "°F</h4>"
        );

        //append high temp
        $("#dayTemp").append(
          '<h1 id="highTemp">High: ' +
            response.forecast.forecastday[0].day.maxtemp_f +
            "°F</h1>"
        );

        //append low temp
        $("#dayTemp").append(
          '<h1 id="lowTemp">Low: ' +
            response.forecast.forecastday[0].day.mintemp_f +
            "°F</h1>"
        );

        //append condition title
        $("#dayTemp").append('<h1 id="conditionTitle">Condition:</h1>');

        //append condition div
        $("#dayTemp").append('<div id="condition"></div>');

        //append condition text
        $("#condition").append(
          '<h2 id="currentCondition">' +
            response.current.condition.text +
            "</h2>"
        );

        //append condition icon
        $("#condition").append(
          '<img src="' +
            response.current.condition.icon +
            '" alt="condition icon" id="conditionIcon"/>'
        );
      })
      .catch(function (err) {
        console.log("error: " + err);
      });
}

$("#go").on("click", function () {
  let location = $("input").val();
  getWeather(location);
});
