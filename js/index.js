$(document).ready(function() {
    $(".img_overlay").mouseover(function(){
        $(this).animate({
        	opacity: 0.9
        },300); 

    });
    $(".img_overlay").mouseout(function(){
    	$(this).animate({
        	opacity: 0
        },300); 
    });
});

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});