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
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
      console.log(response.current.temp_f);
    })
    .catch(function (err) {
      console.log("error: " + err);
    });
}

$("#go").on("click", function () {
  let location = $("input").val();
  getWeather(location);
});
