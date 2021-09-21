// $(function (){
//   $('.box1').slideDown(1500, function (){
//     $('.box1').css({
//       'background-color': '#0000FF',
//       'width': '200px',
//       'height': '100px'
//     }).slideUp(2000);
//   });
// });

// js-4章 スライドUP・DOWN
// cssにて、 display: none;をONにする
  // $(function () {
  //   $('.box1').slideDown(1500, function () {
  //     $('.box1').css({
  //       'background-color': '#0000FF',
  //       'width': '200px',
  //       'height': '100px'
  //     }).slideUp(2000);
  //   });
  // });


// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').css({'background-color': '#0000FF'});
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').css({'background-color': '#FF0000'});
//   });
// });

$(function(){
  $('.box1').mouseover(function(){
    $('.box1').addClass('box1-ext');
  });
  $('.box1').mouseout(function(){
    $('.box1').removeClass('box1-ext');
  });
});
