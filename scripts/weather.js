const weatherPage = $(".search-and-weather");

const weatherCombine = weatherPage[0].children[1];

const todaysForecast = weatherPage[0].children[2];

const currentConditions = weatherPage[0].children[3];

function weatherReset() {
  $(".search-and-weather").empty();
  $(".search-and-weather").append(
    "<div class='search'><input type='text' id='input' placeholder='Search Location' /> </div>"
  );
  $(".search-and-weather").append(weatherCombine);
  $(".search-and-weather").append(todaysForecast);
  $(".search-and-weather").append(currentConditions);
}
