$(document).ready(function () {
  // Hide the div
  $(".tick, .tick2, .tick3").hide();
  // Show the div after 5s
  $(".tick").delay(3000).fadeIn(300);
  $(".tick2").delay(4000).fadeIn(300);
  $(".tick3").delay(5000).fadeIn(300);
});

$(document).on("click", ".next-btn", function () {
  $(this).closest("fieldset").removeClass("active");
  $(this).closest("fieldset").next("fieldset").addClass("active");
});

$(document).on("click", ".hide", function () {
  $(this).closest(".top-div").hide();
});

$(document).on("click", ".auto-hide-btn", function () {
  $(this).closest("fieldset").next("fieldset").addClass("auto-hide-div");
  setTimeout(function () {
    $(".top-div").hide();
    $("fieldset").removeClass("active auto-hide-div");
    $(".last-div").addClass("active");
  }, 1000);
});
