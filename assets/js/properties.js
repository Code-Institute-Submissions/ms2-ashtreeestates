$(document).ready(function () {
	$('button').on('click', function() {
    $('button').removeClass('selected');
    $(this).addClass('selected');
    });
  

    $("#2-bed-btn").on('click', function(){
    $(".2-bed-props").removeClass("hidden");
    $(".3-bed-props").addClass("hidden");
    $(".4-bed-props").addClass("hidden");
    $(".5-bed-props").addClass("hidden");
    $(".6-bed-props").addClass("hidden");
    $(".7-bed-props").addClass("hidden")
    });

    $("#3-bed-btn").on('click', function(){
    $(".3-bed-props").removeClass("hidden");
    $(".2-bed-props").addClass("hidden");
    $(".4-bed-props").addClass("hidden");
    $(".5-bed-props").addClass("hidden");
    $(".6-bed-props").addClass("hidden");
    $(".7-bed-props").addClass("hidden")
    });

    $("#4-bed-btn").on('click', function(){
    $(".4-bed-props").removeClass("hidden");
    $(".2-bed-props").addClass("hidden");
    $(".3-bed-props").addClass("hidden");
    $(".5-bed-props").addClass("hidden");
    $(".6-bed-props").addClass("hidden");
    $(".7-bed-props").addClass("hidden")
    });

    $("#5-bed-btn").on('click', function(){
    $(".5-bed-props").removeClass("hidden");
    $(".2-bed-props").addClass("hidden");
    $(".3-bed-props").addClass("hidden");
    $(".4-bed-props").addClass("hidden");
    $(".6-bed-props").addClass("hidden");
    $(".7-bed-props").addClass("hidden")
    });

    $("#6-bed-btn").on('click', function(){
    $(".6-bed-props").removeClass("hidden");
    $(".2-bed-props").addClass("hidden");
    $(".3-bed-props").addClass("hidden");
    $(".4-bed-props").addClass("hidden");
    $(".5-bed-props").addClass("hidden");
    $(".7-bed-props").addClass("hidden")
    });

    $("#7-bed-btn").on('click', function(){
    $(".7-bed-props").removeClass("hidden");
    $(".2-bed-props").addClass("hidden");
    $(".3-bed-props").addClass("hidden");
    $(".4-bed-props").addClass("hidden");
    $(".5-bed-props").addClass("hidden");
    $(".6-bed-props").addClass("hidden")
    });

    
});
