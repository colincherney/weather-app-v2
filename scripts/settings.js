let counter = 0;
let tempUnit = "farenheit";

function settings() {
  $(".search-and-weather").empty();
  $(".search-and-weather").append(
    "<div class='search'><input type='text' id='input' placeholder='Search Location' /> </div>"
  );
  $(".search-and-weather").append("<div id='settings'></div>");
  $("#settings").append("<div id='settings-title'>Settings</div>");

  //append farenheit or celsius
  $("#settings").append("<div id='temp-units'>Temperature Units</div>");
  $("#temp-units").append("<div id='choose-unit'>Farenheit / Celsius</div>");
  if (tempUnit === "farenheit") {
    $("#temp-units").append(
      '<label class="switch"><input type="checkbox" value="farenheit" id="temp-unit-slider"><span class="slider round"></span></label>'
    );
  } else {
    $("#temp-units").append(
      '<label class="switch"><input type="checkbox" value="farenheit" id="temp-unit-slider" checked><span class="slider round"></span></label>'
    );
  }
}

$("body").on("click", "#temp-unit-slider", function () {
  counter++;
  if (counter % 2 === 0) {
    tempUnit = "farenheit";
  } else {
    tempUnit = "celsius";
  }
  console.log(tempUnit);
});

$("#sidebar-weather-button").on("click", function () {
  if (tempUnit === "farenheit") {
    getWeather(getLocation);
  } else {
    getWeatherCelsius(getLocation);
  }
});

$("body").on("input", "#temp-unit-slider", function () {
  if (tempUnit === "farenheit") {
    updateFarenheit(getLocation);
  } else {
    updateCelsius(getLocation);
  }
});
