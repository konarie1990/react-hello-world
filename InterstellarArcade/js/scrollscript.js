"use strict";

$(document).ready(function() {
  const hero_ScrollArrow = $("#scroll-arrow");

  hero_ScrollArrow.hover(
    function() {
      $(this).addClass("bounce");
    },
    function() {
      $(this).removeClass("bounce");
    }
  );
});
