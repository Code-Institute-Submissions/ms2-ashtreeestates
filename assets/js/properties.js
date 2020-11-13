$(document).ready(function () {
	$('button').on('click', function() {
    $('button').removeClass('selected');
    $(this).addClass('selected');
    });

    $("#list-view-btn").on('click', function(){
    $(".list-view").removeClass("hidden");
    $(".map-view").addClass("hidden")
    });

    $("#map-view-btn").on('click', function(){
    $(".map-view").removeClass("hidden");
    $(".list-view").addClass("hidden")
    });


    $("#2-bed-btn").on('click', function(){
    $(".2-bed-props").removeClass("hidden");
    $(".3-bed-props").addClass("hidden");
    $(".4-bed-props").addClass("hidden");
    $(".5-bed-props").addClass("hidden")
    $(".6-bed-props").addClass("hidden")
    });

    $("#3-bed-btn").on('click', function(){
    $(".3-bed-props").removeClass("hidden");
    $(".2-bed-props").addClass("hidden");
    $(".4-bed-props").addClass("hidden");
    $(".5-bed-props").addClass("hidden")
    $(".6-bed-props").addClass("hidden")
    });

    $("#4-bed-btn").on('click', function(){
    $(".4-bed-props").removeClass("hidden");
    $(".2-bed-props").addClass("hidden");
    $(".3-bed-props").addClass("hidden");
    $(".5-bed-props").addClass("hidden")
    $(".6-bed-props").addClass("hidden")
    });

    $("#5-bed-btn").on('click', function(){
    $(".5-bed-props").removeClass("hidden");
    $(".2-bed-props").addClass("hidden");
    $(".3-bed-props").addClass("hidden");
    $(".4-bed-props").addClass("hidden")
    $(".6-bed-props").addClass("hidden")
    });

    $("#6-bed-btn").on('click', function(){
    $(".6-bed-props").removeClass("hidden");
    $(".2-bed-props").addClass("hidden");
    $(".3-bed-props").addClass("hidden");
    $(".4-bed-props").addClass("hidden")
    $(".5-bed-props").addClass("hidden")
    });


    

 
});
