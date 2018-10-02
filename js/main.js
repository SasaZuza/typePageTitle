/*global $, jQuery, alert*/
$(document).ready(function () {

  'use strict';



  var typed = $(".typed");

  $(function () {
    typed.typed({
      strings: ["Type you text here!"],
      typeSpeed: 100,
      loop: true,
    });
  });


});