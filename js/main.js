$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger, .header__inner').toggleClass('active');
        $('body').toggleClass('lock');
    })
  });