/*global window, jQuery */
(function ($) {

  'use strict';
  // -- :: Navbar Style (1)    
  if ($(window).width() > 991 ) {
    $('nav.th-nav-st1 li.th-nav-item.has-dropdown').hover(
      function () {
        $(this).find('ul.th-dropdown-list').fadeIn();
      },
      function () {
        $(this).find('ul.th-dropdown-list').hide();
      }
    );
  } else {
    $('nav.th-nav-st1 li.th-nav-item.has-dropdown').on('click', function () {
      $(this).find('ul.th-dropdown-list').slideToggle().parent().siblings().find('ul.th-dropdown-list').slideUp();
    });
  }
  // Toggle Navbar
  $('#nav_toggler').on('click', function () {
    $('body').toggleClass('navbar-activated')
  });
    
  // ----------------------------

  // -- :: About Us Page

  // Map Section
  $("#about-us-page .flag").on('click', function () {
    $('.flag').removeClass('open');
    $(this).addClass('open');
  });
  $(document).mouseup(function (e) {
    var flag_con = $(".flag");
    // if the target of the click isn't the container nor a descendant of the container
    if (!flag_con.is(e.target) && flag_con.has(e.target).length === 0) {
      flag_con.removeClass('open');
    }
  });
  // ----------------------------

  // -- :: VPS Page
  $('#dist_toggler li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    $($(this).data('show')).show().siblings().hide()
  });
  // ----------------------------

  $('#scroller').hover(function () {
    
  });

}(jQuery));
