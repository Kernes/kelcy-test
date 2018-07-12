$(document).ready(function() {
  $(".js-mobile-navigation").click(function() {
    if ($(".js-navigation").hasClass("slideup"))
      $(".js-navigation").removeClass("slideup").addClass("slidedown");
    else
      $(".js-navigation").removeClass("slidedown").addClass("slideup");
  });
});
