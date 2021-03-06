$(document).ready(function() {
  // send email function
    var submitBtn = jQuery('#submit');

    submitBtn.on('click', function (event) {
      event.preventDefault();

      var name = $('#name').val();
      var email = $('#email').val();
      var message = $('#message').val();
      var answer = $('#human').val();

      if (answer === '5') {
        var jsonData = JSON.stringify({
          name: name,
          email: email,
          message: message
        });

        var success = function() {
          name = $('#name').val('')
          email = $('#email').val('');
          message = $('#message').val('');
          answer = $('#human').val('');
        };

        $.ajax({
          type: "POST",
          url: "/mail",
          data: jsonData,
          success: success,
          dataType: "json"
        });
      } else {
        name = $('#name').val('')
        email = $('#email').val('');
        message = $('#message').val('');
        answer = $('#human').val('');
        return;
      }
    });

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

  // animations for gavel and bug in cover section ------>
  // bug
  $('.js-wp-100').waypoint(function(direction) {
    $('.js-wp-100').addClass('animated bounceInUp');
  }, {
    // offset determines when the animation should start
    offset: '45%'
  });
  // gavel
  $('.js-wp-200').waypoint(function(direction) {
    $('.js-wp-200').addClass('animated rotateInDownRight');
  }, {
    // offset determines when the animation should start
    offset: '45%'
  });
  // end gavel and bug in cover section ------>

  // add fadeInDown animation
  $('.js-wp-1').waypoint(function(direction) {
    $('.js-wp-1').addClass('animated fadeIn');
  }, {
    // offset determines when the animation should start
    offset: '45%'
  });

  // add fadeInLeft animation
  $('.js-wp-2').waypoint(function(direction) {
    $('.js-wp-2').addClass('animated fadeIn');
  }, {
    // offset determines when the animation should start
    offset: '45%'
  });

  // add fadeInRight animation
  $('.js-wp-3').waypoint(function(direction) {
    $('.js-wp-3').addClass('animated fadeIn');
  }, {
    // offset determines when the animation should start
    offset: '50%'
  });

  // add fadeInUp animation
  $('.js-wp-4').waypoint(function(direction) {
    $('.js-wp-4').addClass('animated fadeIn');
  }, {
    // offset determines when the animation should start
    offset: '50%'
  });

  // add flipInX animation
  $('.js-wp-5').waypoint(function(direction) {
    $('.js-wp-5').addClass('animated flipInX');
  }, {
    // offset determines when the animation should start
    offset: '50%'
  });

  // add flipInX animation
  $('.js-wp-6').waypoint(function(direction) {
    $('.js-wp-6').addClass('animated flipInX');
  }, {
    // offset determines when the animation should start
    offset: '50%'
  });

  // add flipInX animation
  $('.js-wp-7').waypoint(function(direction) {
    $('.js-wp-7').addClass('animated flipInX');
  }, {
    // offset determines when the animation should start
    offset: '50%'
  });

  // add flipInX animation
  $('.js-wp-8').waypoint(function(direction) {
    $('.js-wp-8').addClass('animated flipInX');
  }, {
    // offset determines when the animation should start
    offset: '50%'
  });

  // add flipInX animation
  $('.js-wp-9').waypoint(function(direction) {
    $('.js-wp-9').addClass('animated flipInX');
  }, {
    // offset determines when the animation should start
    offset: '50%'
  });

  // add flipInX animation
  $('.js-wp-10').waypoint(function(direction) {
    $('.js-wp-10').addClass('animated flipInX');
  }, {
    // offset determines when the animation should start
    offset: '50%'
  });

  // add flipInX animation
  $('.js-wp-10-5').waypoint(function(direction) {
    $('.js-wp-10-5').addClass('animated flipInX');
  }, {
    // offset determines when the animation should start
    offset: '50%'
  });

  // add flipInX animation
  $('.js-wp-11').waypoint(function(direction) {
    $('.js-wp-11').addClass('animated flipInX');
  }, {
    // offset determines when the animation should start
    offset: '50%'
  });

  $('.js-wp-12').waypoint(function(direction) {
    $('.js-wp-12').addClass('animated fadeIn');
  }, {
    // offset determines when the animation should start
    offset: '50%'
  });

  $('.js-wp-13').waypoint(function(direction) {
    $('.js-wp-13').addClass('animated fadeIn');
  }, {
    // offset determines when the animation should start
    offset: '50%'
  });

  $('.js-wp-14').waypoint(function(direction) {
    $('.js-wp-14').addClass('animated fadeIn');
  }, {
    // offset determines when the animation should start
    offset: '50%'
  });

  $('.js-wp-14').waypoint(function(direction) {
    $('.js-wp-14').addClass('animated fadeIn');
  }, {
    // offset determines when the animation should start
    offset: '50%'
  });

  $('.js-wp-15').waypoint(function(direction) {
    $('.js-wp-15').addClass('animated fadeIn');
  }, {
    // offset determines when the animation should start
    offset: '50%'
  });

  $('.js-wp-16').waypoint(function(direction) {
    $('.js-wp-16').addClass('animated fadeIn');
  }, {
    // offset determines when the animation should start
    offset: '50%'
  });

  $('.js-wp-17').waypoint(function(direction) {
    $('.js-wp-17').addClass('animated fadeIn');
  }, {
    // offset determines when the animation should start
    offset: '50%'
  });

  $('.js-wp-18').waypoint(function(direction) {
    $('.js-wp-18').addClass('animated fadeIn');
  }, {
    // offset determines when the animation should start
    offset: '50%'
  });

  $('.js-wp-19').waypoint(function(direction) {
    $('.js-wp-19').addClass('animated fadeIn');
  }, {
    // offset determines when the animation should start
    offset: '50%'
  });

  $('.js-wp-20').waypoint(function(direction) {
    $('.js-wp-20').addClass('animated fadeIn');
  }, {
    // offset determines when the animation should start
    offset: '50%'
  });

  $('.js-wp-21').waypoint(function(direction) {
    $('.js-wp-21').addClass('animated fadeIn');
  }, {
    // offset determines when the animation should start
    offset: '70%'
  });

  $('.js-wp-22').waypoint(function(direction) {
    $('.js-wp-22').addClass('animated fadeIn');
  }, {
    // offset determines when the animation should start
    offset: '70%'
  });

  $('.js-wp-23').waypoint(function(direction) {
    $('.js-wp-23').addClass('animated fadeIn');
  }, {
    // offset determines when the animation should start
    offset: '70%'
  });

  $('.js-wp-24').waypoint(function(direction) {
    $('.js-wp-24').addClass('animated fadeIn');
  }, {
    // offset determines when the animation should start
    offset: '70%'
  });

  $('.js-wp-25').waypoint(function(direction) {
    $('.js-wp-25').addClass('animated fadeIn');
  }, {
    // offset determines when the animation should start
    offset: '70%'
  });

  $('.js-wp-26').waypoint(function(direction) {
    $('.js-wp-26').addClass('animated fadeIn');
  }, {
    // offset determines when the animation should start
    offset: '70%'
  });

 // react native animation
  $('.js-wp-27').waypoint(function(direction) {
    $('.js-wp-27').addClass('animated fadeIn');
  }, {
    // offset determines when the animation should start
    offset: '70%'
  });

  // END ANIMATONS -------------------------------------------------->




});
