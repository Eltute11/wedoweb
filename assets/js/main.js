jQuery(function($){

  new WOW().init();

  showSectionByUrlParameter();

  var ancho = $(window).width();

  if(ancho < 992){
    if ($('.slick-center').length > 0) {
      $('.slick-center').slick({
        arrows: false,
        centerMode: true,
        centerPadding: '120px',
        slidesToShow: 1,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              centerPadding: '260px',
            }
          },
          {
            breakpoint: 769,
            settings: {
              centerPadding: '170px',
            }
          },
          {
            breakpoint: 576,
            settings: {
              centerPadding: '40px',
            }
          }
        ]
      });
    }
  }

  if($(".slick-linear").length > 0){
    $(".slick-linear").slick({
      speed: 5000,
      autoplay: true,
      autoplaySpeed: 1,
      cssEase: 'linear',
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      swipeToSlide: true,
      focusOnSelect: true,
      dots: false,
      arrows: false,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });  
  }

  $("a.to-scroll").on('click',function(e) {
    var url = e.target.href;
    var hash = url.substring(url.indexOf("#")+1);
    
    if(window.location.pathname == '/home/'){
      e.preventDefault();
    }else{
      return;
    }
    showSection(hash);
    return false;
  });
  
  function showSection(id, self, event){
    var $this = $(self);
    var box = $('#'+id);

    if (box.length) {

      var destination = box.offset().top;
      $("html, body").animate({
        scrollTop: destination
      }, 1000, function () {
        window.location.hash = id;
      });

    }
  
  }
  
  function showSectionByUrlParameter(){
  
    if (window.location.hash){
      var hash = window.location.hash.substr(1).toLowerCase();

      setTimeout(function(){
        $('html, body').scrollTop(0).show();

        if (hash.length)
          showSection(hash);

      },100);
    }else {
      $('html, body').show();
    }
  
  }
  

});