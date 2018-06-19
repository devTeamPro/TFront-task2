// The loading screen

$(window).on("load", function(){
    $("body").css("overflow","auto"); // show the scroll bar
    $(".loading-overlay").fadeOut(1000); // hide the div 'loading-overlay'
});

// Dropdown Services Item

$(document).ready(function(){
    $('.dropdown').mouseenter(function(){
        $('.sub-ul').css('display','block').animate({top: '75px'},'slow');
    });
    $('.dropdown').mouseleave(function(){
        //$('.sub-ul').css('display','none').animate({top: '70px'},'slow');
        $(this).find('.sub-ul').css('display','none');
        
    });

});