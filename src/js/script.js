$(document).ready(function(){

    // change properties of navbar when scroll down 50px
    $(window).scroll(function(){
        if($(this).scrollTop()>=100){
            $("#navBar").addClass("noTransparrent");
        }
        else{
            $("#navBar").removeClass("noTransparrent");
        }
    });

    // to animate when travelling across the page
    $("a.scroll").on('click', function(event){
        var hash = this.hash;
        $('html, body').animate({scrollTop: $(hash).offset().top},800,function(){});
    });

    // animation
    var wow = new WOW({
        mobile:false
    });
    wow.init();

    // Hide navbar menu after click link (small monitor) 
    $(".navbar-nav li a").click(function(event) {
        $(".navbar-collapse").collapse('hide');
      });

    // to validate inputs
    $(function(){
        $("#contact-form").validate();
    });

    // toggle overlay of projects
    $('.project').hover(function(){
        $(this).find('.project-overlay').slideToggle();
        $(this).find('.category').slideToggle();
    });
    
});


