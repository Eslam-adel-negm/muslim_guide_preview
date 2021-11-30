/*global $, console*/

$(function () {

  'use strict';

    // login animation
    $('.signup_Side .overlay_btn').on('click', function () {
      $('.registration-page').removeClass('signIn_Side_open').addClass('signup_Side_open');
    });

    $('.signIn_Side .overlay_btn').on('click', function () {
      $('.registration-page').removeClass('signup_Side_open').addClass('signIn_Side_open');
    });

  // Start dark mode
  $('#toggleDark').on('click', function () {
    $(this).toggleClass('dark-on');
    if ($(this).hasClass("dark-on")) {
      $("#dark_style").attr("href", "css/dark.css")
    } else {
      $("#dark_style").attr("href", "")
    }
  });
  // End dark mode

  // Suggestion Home Slider
  $('.slider-home').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    rtl: true,
    dots: true,
    prevArrow: '<a class="prevSlider"><i class="fas fa-chevron-right"></i></a>',
    nextArrow: '<a class="nextSlider"><i class="fas fa-chevron-left"></i></a>',
    responsive: [{
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
  // End Home Slider

  // Start dark mode
  $('.btn-innerpage_collapse').on('click', function () {
    $('.innerpage_content_handel').toggleClass('innerpage_content_open');
  });
  // End dark mode

  // Start open aside book
  $('.chapterSide_item.has-sup_chapterSide').on('click', function () {
    $(this).toggleClass('submenu-chaper_open');
    $(this).find('.submenu-chapterSide_ul').slideToggle();
  });
  // End open aside book


  // Start inner page main slide
  $('.slider-nav')
    .on('init', function (event, slick) {
      $('.slider-nav .slick-slide.slick-current').addClass('is-active');
    })
    .slick({
      slidesToShow: 7,
      slidesToScroll: 7,
      arrows: false,
      rtl: true,
      focusOnSelect: false,
      infinite: false,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        }
      },{
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      }, {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      }]
    });

  $('.slider-single').slick({
    prevArrow: $('.prev-question'),
    nextArrow: $('.next-question'),
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    infinite: false,
    useTransform: true,
    speed: 400,
    // vertical: true,
    // verticalSwiping: true,
    rtl: true,
    speed: 500,
    fade: true,
    draggable: false,
    touchMove: false,
    swipeToSlide: false,
    swipe: false
  });


  /// sync to timeline with slider
  $('.slider-single').on('afterChange', function () {
    var currentSlide = $('.slider-single .infoSide_item.slick-current').attr("data-slick-index");
    $('.slider-nav').slick('slickGoTo', currentSlide);
    var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    $('.slider-nav .slick-slide.is-active').removeClass('is-active');
    $(currrentNavSlideElem).addClass('is-active');
  });

  /// click on timeline to show slider
  $('.slider-nav').on('click', '.slick-slide', function(event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data('slick-index');
    $('.slider-single').slick('slickGoTo', goToSingleSlide);
  });

  // End inner page main slide
  
  // info-vertical_list
  $('.info-vertical_list_item').on('click', function () {
    $(this).addClass('show_answer');
  });


  //// info_timeline

  $('.info_timeline').slick({
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    rtl: false,
    focusOnSelect: true,
  });


  //// info_timeline
  $('.info-collapes_item').on('click', function (e) {
    $(this).addClass('show_answer');
    $(this).children('.info-collapes_answer').slideDown("slow", function () {
      $('.slider-single').slick('setPosition');
    });
  });

  //// info-icon-vertical_list
  $('.info-icon-vertical-list_item').on('click', function (e) {
    $(this).addClass('show_answer');
  });
  
  //info_video
  const player = new Plyr('.info_video video', {
    // controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen'],
    controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'settings', 'fullscreen'],
  });

  // info_steps
  $('.info-steps_item').on('click', function () {
    $(this).addClass('show_answer');
  });

  // square-extra_horizontals
  $('.square-extra_horizontal').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    adaptiveHeight: true,
    arrows: false,
    rtl: true,
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        dots: true
      }
    }]
  });

  // square-expand_horizontal
  $('.square-expand_horizontal').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    focusOnSelect: true,
    adaptiveHeight: true,
    arrows: false,
    rtl: true,
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        dots: true
      }
    }]
  });

  // square_horizontal
  $('.square_horizontal').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    focusOnSelect: true,
    adaptiveHeight: true,
    arrows: false,
    rtl: true,
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        dots: true
      }
    }]
  });

  $('.square_horizontal').on('afterChange', function () {
    $('.slider-single').slick('setPosition');
  });


    // info-vertical_list
    $('.info-square_list_item').on('click', function () {
      $(this).addClass('show_answer');
    });

});