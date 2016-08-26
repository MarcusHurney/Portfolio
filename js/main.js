$(document).ready(function() {

  // implement sticky navbar
  $(window).scroll(function() {
    // if the user scrolls past the "cover" section
    // make the navbar stick to the top of the screen
    if($(window).scrollTop() > $(window).height()) {
      $('.navbar').addClass('navbar-fixed-top');
    }
    // remove the navbar if the user scrolls back onto
    // the "cover" section
    if($(window).scrollTop() < $(window).height()) {
      $('.navbar').removeClass('navbar-fixed-top');
    }

  });

  // implement smooth scroll for when a user clicks a nav button
  $('a[href^="#"]').bind('click.smoothscroll',function (e) {
    e.preventDefault();
    var target = this.hash;
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 700, 'swing', function () {
        window.location.hash = target;
    });
  });


  // BEGIN ANIMATONS -------------------------------------------------->

  // add fadeInDown animation
  $('.js-wp-1').waypoint(function(direction) {
    $('.js-wp-1').addClass('animated fadeInDown');
  }, {
    // offset determines when the animation should start
    offset: '50%'
  });

  // add fadeInLeft animation
  $('.js-wp-2').waypoint(function(direction) {
    $('.js-wp-2').addClass('animated fadeInLeft');
  }, {
    // offset determines when the animation should start
    offset: '50%'
  });

  // add fadeInRight animation
  $('.js-wp-3').waypoint(function(direction) {
    $('.js-wp-3').addClass('animated fadeInRight');
  }, {
    // offset determines when the animation should start
    offset: '50%'
  });

  // add fadeInUp animation
  $('.js-wp-4').waypoint(function(direction) {
    $('.js-wp-4').addClass('animated fadeInUp');
  }, {
    // offset determines when the animation should start
    offset: '50%'
  });

  // END ANIMATONS -------------------------------------------------->




});
