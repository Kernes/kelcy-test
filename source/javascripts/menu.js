// This is where it all goes :)
$(document).ready(function() {
  $(".js-mobile-menu").click(function() {
    if ($(".js-menu").hasClass("slideup"))
      $(".js-menu").removeClass("slideup").addClass("slidedown");
    else
      $(".js-menu").removeClass("slidedown").addClass("slideup");
  });
});
