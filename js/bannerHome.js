$(document).ready(function(){
    $('.single-item').slick({
        infinite : true,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots : true,
    });
    $('.spnb').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2500,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    });
  });