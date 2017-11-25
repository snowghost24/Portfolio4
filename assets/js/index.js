// ─────────────────────────────────────────────────────────────────
$(document).ready(function () {

  // this allows me to use animate.Css()
  $.fn.extend({
    animateCss: function (animationName, callback) {
      var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      this.addClass('animated ' + animationName).one(animationEnd, function () {
        $(this).removeClass('animated ' + animationName);
        if (callback) {
          callback();
        }
      });
      return this;
    }
  });

  // this creates animations first section
  $('#firstSection').animateCss('flipInX', function () {
    $('#header').css("display", "block").animateCss('fadeIn');
  });


  // $(function(){
  //   $(window).scroll(function() {
  //      if($(window).scrollTop() >= 3000) {
  //       console.log("You passed it");
  //       $('#connectWithMe').animateCss('fadeIn');
  //       //  $('#connectWithMe').addClass('animate');
  //       //  $('#connectWithMe').addClass('bounceInLeft');

  //      }
  //     else {
  //       $('#animateContact').removeClass('animate');
  //       $('#animateContact').removeClass('bounceInLeft');
  //     }
  //   });
  // });


  // $(function(){
  //   $(window).scroll(function() {
  //      if($(window).scrollTop() >= 700) {
  //       //  $('nav').addClass('scrolled');
  //        console.log($(window).scrollTop())
  //        console.log("im in here");
  //         $('nav').addClass('scrolled2');
  //      }
  //     else {
  //       $('nav').removeClass('scrolled');

  //     }
  //   });
  // });

  var visibleSlideInLeft = false;
  var element_position1 = $('#aboutMeDiv').offset().top;
  $(window).on('scroll', function () {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = element_position1;
    if (y_scroll_pos > (scroll_pos_test - 30) && visibleSlideInLeft === false) {
      // console.log(y_scroll_pos);
      // $('nav').addClass('scrolled2');
      $('#name-li').addClass('guzman').animateCss('slideInLeft')
      visibleSlideInLeft = true;
    } else {
      // $('nav').removeClass('displayMore');
      // $('#name-li').removeClass('guzman');
    }
  });


  var element_position = $('.sectThree').offset().top;
  var sect3Height = $('.sectThree').height();
  var bottom = (sect3Height + element_position);
  console.log(bottom);
  $(".sectThree").is(":visible");
  $(window).on('scroll', function () {
    var y_scroll_pos = window.pageYOffset;
    if ( y_scroll_pos < (element_position) || y_scroll_pos > bottom  ) {
      $('#portfolio-nav').removeClass('hidNavContent');
    } else {
      $('#portfolio-nav').addClass('hidNavContent')
       } 
  });

  // ──────THESE ANIMATE TITLE IN CAROUSEL───────────────────

  function moveElements(element, animation) {
    element.addClass('animated ' + animation);
    //wait for animation to finish before removing classes
    window.setTimeout(function () {
      element.removeClass('animated ' + animation);
    }, 2000);
  };


  $("#oneSpanNext").on("click", function () {
    var element = $('#twoImgH3')
    var animation = "bounceInLeft";
    moveElements(element, animation)
  });


  $("#twoSpanNext").on("click", function () {
    var element = $('#threeImgH3')
    var animation = "bounceInLeft";
    moveElements(element, animation);
  });


  $("#threeSpanNext").on("click", function () {
    var element = $('#fourImgH3')
    var animation = "bounceInLeft";
    moveElements(element, animation);
  });


  $("#fourSpanNext").on("click", function () {
    var element = $('#oneImgH3')
    var animation = "bounceInLeft";
    moveElements(element, animation);
  });


  $("#oneSpanPrev").on("click", function () {
    var element = $('#fourImgH3')
    var animation = "bounceInRight";
    moveElements(element, animation);
  });


  $("#twoSpanPrev").on("click", function () {
    var element = $('#oneImgH3')
    var animation = "bounceInRight";
    moveElements(element, animation);
  });

  $("#threeSpanPrev").on("click", function () {
    var element = $('#twoImgH3')
    var animation = "bounceInRight";
    moveElements(element, animation);
  });

  $("#fourSpanPrev").on("click", function () {
    var element = $('#threeImgH3')
    var animation = "bounceInRight";
    moveElements(element, animation);
  });

  // ───SETS HEIGHT OF MODAL TO SCREEN SIZE────────────────────────
  $('#myModal').on('show.bs.modal', function () {
    $('.modal .modal-body').css('overflow-y', 'auto');
    $('.modal .modal-body').css('min-height', $(window).height() * 0.7);
  });

  // ───────────────ALLOWS YOU TO PUT LINEAR GRADIENT ON PARALLAX ELEMENT────────────────────
  var bg = $('#bg');
  $(window).scroll(function () {
    var x = $(this).scrollTop();
    bg.css('background-position', '0% ' + parseInt(-x / 10) + 'px');
  });
  // SCROLLS DOWN ON BUTTON LICK────────────────────────────────────────────────────

  $("#arrowIcon").click(function () {
    scrollToAbout()
  })

  $("#nav-about").click(function () {
    scrollToAbout()
  })

  $("#nav-contact").click(function () {
    scrollToContact()
  })

  $("#nav-portfolio").click(function () {
    scrollToPortfolio()
  })

  function scrollToPortfolio() {
    $('html,body').animate({
      scrollTop: $("#carouselDiv").offset().top
    },
      'slow');
  }


  function scrollToAbout() {
    $('html,body').animate({
      scrollTop: $(".subsectAbout").offset().top
    },
      'slow');
  }

  function scrollToContact() {
    $('html,body').animate({
      scrollTop: $(".sectThree").offset().top
    },
      'slow');
  }


  $("#secondArrow").click(function () {
    $('html,body').animate({
      scrollTop: $("#carouselExampleIndicators").offset().top
    },
      'slow');
  });

  // ─SETS HEIGHT OF DIV TO SCREEN SIZE────────────────────────────────────

  $('.cItem1Div').height($(window).height());
});

































// $('.sectThree').viewpoint(function() {
//   alert('you have scrolled to the h1!');
//  });








// var bg = $('#bg');
// $(window).scroll(function () {
//   // var x = $(this).scrollTop();
//   // bg.css('background-position', '0% ' + parseInt(-x / 10) + 'px');
//   if($(".sectTwo").scrollTop()) {
// alert("Hello")  }
// });
