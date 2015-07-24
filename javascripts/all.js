
$(document).ready(function(){
  $("#nav-contact").click(function(e){
    e.preventDefault();
    $("#contact-info").fadeToggle("fast", function () {});
  });


  $(".jumper").on("click", function(e) {
    e.preventDefault();
    $("body, html").animate({
      scrollTop: $( $(this).attr('href') ).offset().top
    },600);
  });


  setTimeout(function() {
    $("#hello").addClass('underline');
    $(".intro").toggle('slow') ;
  }, 500);


// -webkit-transform: scaleX(0);
//         -ms-transform: scaleX(0);
//         transform: scaleX(0);

  $(".project-pic").mouseover(function(){
    // $(this).css("box-shadow", "0 2px 5px 0 rgba(0, 0, 0, 0.26)");
    $(this).parent().siblings().animate({
      opacity: .5
    },200
    );
  });
  $(".project-pic").mouseout(function(){
    // $(this).css("box-shadow", "0 2px 5px 0 rgba(0, 0, 0, 0.26)");
    $(this).parent().siblings().animate({
      opacity: 1
    },200
    );
  });

});
