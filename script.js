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
