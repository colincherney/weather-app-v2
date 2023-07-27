let cities;

async function getCities() {
  const response = await fetch(
    "https://gist.githubusercontent.com/randymeech/e9398d4f6fb827e2294a/raw/22925b92339f0f4c005159ae4d36f8f3988e9d39/top-1000-cities.json"
  );
  cities = await response.json();
}

function showCities() {
  $(".search-and-weather").empty();

  $(".search-and-weather").append(
    "<div class='search'><input type='text' id='input' onkeyup='search()' placeholder='Search for cities..'> </div>"
  );
  $(".search-and-weather").append("<div class='cities-list'></div>");
  for (let i = 0; i < cities.length; i++) {
    $(".cities-list").append(
      "<div class='city'><h5>" + cities[i].name + "</h5></div>"
    );
  }
  click();
}

function click() {
  $(".city").on("click", function () {
    let city = $(this).text();
    getWeather(city);
  });
}

getCities();

function search() {
  let input = $("#input").val().toLowerCase();
  $(".cities-list").empty();
  for (let i = 0; i < cities.length; i++) {
    if (cities[i].name.toLowerCase().indexOf(input) > -1) {
      $(".cities-list").append(
        "<div class='city'><h5>" + cities[i].name + "</h5></div>"
      );
    }
  }
  click();
}
