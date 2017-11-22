// ────ALLOWS ME TO ADD AND REMOVE CLASSES WHENS SCROLL──────────────────────

$(document).ready(function () {
$(function(){
  $(window).scroll(function() {
     if($(window).scrollTop() >= 100) {
       $('nav').addClass('scrolled');
     }
    else {
      $('nav').removeClass('scrolled');
      $('nav').addClass('scrolled2');
    }
  });
});


var element_position = $('.sectThree').offset().top;

$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = element_position;
    console.log(y_scroll_pos);

    if(y_scroll_pos > scroll_pos_test - 30) {
      $('nav').addClass('displayMore');
      $('#name-li').addClass('guzman animate bounceInLeft');
    } else {
        $('nav').removeClass('displayMore');
        $('#name-li').removeClass('guzman');
      }
});

// ──────THESE ANIMATE TITLE IN CAROUSEL───────────────────

function moveElements (element,animation) {
  element.addClass('animated ' + animation);        
  //wait for animation to finish before removing classes
  window.setTimeout( function(){
      element.removeClass('animated ' + animation);
  }, 2000);         
};


$("#oneSpanNext").on("click", function () {
var element = $('#twoImgH3')
var animation = "bounceInLeft";
moveElements(element,animation)
});



$("#twoSpanNext").on("click", function () {
var element = $('#threeImgH3')
var animation = "bounceInLeft";
moveElements(element,animation);
});


$("#threeSpanNext").on("click", function () {
var element = $('#fourImgH3')
var animation = "bounceInLeft";
moveElements(element,animation);
});


$("#fourSpanNext").on("click", function () {
var element = $('#oneImgH3')
var animation = "bounceInLeft";
moveElements(element,animation);
});


$("#oneSpanPrev").on("click", function () {
var element = $('#fourImgH3')
var animation = "bounceInRight";
moveElements(element,animation);
});


$("#twoSpanPrev").on("click", function () {
var element = $('#oneImgH3')
var animation = "bounceInRight";
moveElements(element,animation);
});

$("#threeSpanPrev").on("click", function () {
var element = $('#twoImgH3')
var animation = "bounceInRight";
moveElements(element,animation);
});

$("#fourSpanPrev").on("click", function () {
var element = $('#threeImgH3')
var animation = "bounceInRight";
moveElements(element,animation);
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
$('html,body').animate({
scrollTop: $(".subsectAbout").offset().top
},
'slow');
})
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
