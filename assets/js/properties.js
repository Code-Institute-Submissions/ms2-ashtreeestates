$(document).ready(function () {
	$('button').on('click', function() {
    $('button').removeClass('active');
    $(this).addClass('active');
  });

    $("#2-bed-btn").on('click', function(){
    $(".2-bed-props").removeClass("hidden");
    $(".3-bed-props").addClass("hidden")
    });

    $("#3-bed-btn").on('click', function(){
    $(".3-bed-props").removeClass("hidden");
    $(".2-bed-props").addClass("hidden")
    });


    

 
});
