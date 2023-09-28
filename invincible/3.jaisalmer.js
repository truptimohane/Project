$(document).ready(function () {
  $(".ahmedabad").click(function () {
    $(".ahmedabad").css("border", "2px solid #de5824"),
      $(".jaisalmer").css("border", "0"),
      $(".date-ahmedabad").fadeIn("slide"),
      $(".date-jaisalmer").hide(),
      $(".choice-ahmedabad").fadeIn("slide"),
      $(".choice-jaisalmer").hide();
  });

  $(".jaisalmer").click(function () {
    $(".jaisalmer").css("border", "2px solid #de5824"),
      $(".ahmedabad").css("border", "0"),
      $(".date-jaisalmer").fadeIn("slide"),
      $(".date-ahmedabad").hide(),
      $(".choice-jaisalmer").fadeIn("slide"),
      $(".choice-ahmedabad").hide();
  });

  $("#november").click(function () {
    $(".nov01").fadeIn("slide"),
      $(".dec01").hide(),
      $(".jan01").hide(),
      $(".feb01").hide();
  });

  $("#december").click(function () {
    $(".dec01").fadeIn("slide"),
      $(".nov01").hide(),
      $(".jan01").hide(),
      $(".feb01").hide();
  });

  $("#january").click(function () {
    $(".jan01").fadeIn("slide"),
      $(".nov01").hide(),
      $(".dec01").hide(),
      $(".feb01").hide();
  });

  $("#february").click(function () {
    $(".feb01").fadeIn("slide"),
      $(".dce01").hide(),
      $(".jan01").hide(),
      $(".nov01").hide();
  });

  // jaisalmer
  $("#january1").click(function () {
    $(".jan02").fadeIn("slide"),
      $(".nov02").hide(),
      $(".dec02").hide(),
      $(".feb02").hide();
  });

  $("#february1").click(function () {
    $(".feb02").fadeIn("slide"),
      $(".dce02").hide(),
      $(".jan02").hide(),
      $(".nov02").hide();
  });

  $("#november1").click(function () {
    $(".nov02").fadeIn("slide"),
      $(".dec02").hide(),
      $(".jan02").hide(),
      $(".feb02").hide();
  });

  $("#december1").click(function () {
    $(".dec02").fadeIn("slide"),
      $(".nov02").hide(),
      $(".jan02").hide(),
      $(".feb02").hide();
  });
});
