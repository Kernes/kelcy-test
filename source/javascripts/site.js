//= require jquery.min
//= require navigation

$(document).ready(function () {
  var Shuffle = window.Shuffle;

  var myShuffle = new Shuffle(document.querySelector('.my-shuffle'), {
    itemSelector: '.js-item',
    sizer: '.my-sizer-element',
    buffer: 1,
  });
});
