$(window).on('scroll', function(){
    $('#backToTop').show();

  var scrollSize = $(window).scrollTop()
    console.log(scrollSize)

  if (scrollSize > 700) {
     $('#backToTop').css({
        bottom: '40px',
        opacity:1
     });
  } else {
     $('#backToTop').css({
        bottom: '500px',
        opacity:0
     });
  }


 })
 $('#backToTop').on('click', function (){
    $('html, body').animate({
       scrollTop:0,
    },1000)
 }) 