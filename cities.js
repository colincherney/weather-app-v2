let cities = [
  "New York City, United States",
  "Paris, France",
  "London, United Kingdom",
  "Rome, Italy",
  "Jerusalem, Israel",
  "Bangkok, Thailand",
  "Prague, Czech Republic",
  "Berlin, Germany",
  "Amsterdam, Netherlands",
  "Madrid, Spain",
  "Munich, Germany",
  "Vienna, Austria",
  "Brussels, Belgium",
  "Sydney, Australia",
  "Rio de Janeiro, Brazil",
  "Sydney, Australia",
];

function showCities() {
  $(".search-and-weather").empty();

  $(".search-and-weather").append(
    "<div class='search'><input type='text' id='input' placeholder='Search Location' /> </div>"
  );
  for (let i = 0; i < 16; i++) {
    $(".search-and-weather").append(
      "<div class='city'><h5>" + cities[i] + "</h5></div>"
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
