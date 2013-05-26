// JavaScript Document

$(document).ready( function() {
    $("h1 a,a#btnTwitter,a#btnFacebook,a.slideImg,ul a.paper img,h2.ftLogo")
    .fadeTo(1,1)
    .hover(
        function(){
            $(this).fadeTo(200, 0.5);
        },
        function(){
            $(this).fadeTo(500, 1);
        }
    )
		
		$("ul > li > a.paper").click(function(){
		var src = $(this).attr("href");
		$("#ex-img").fadeOut(
							 "slow",
							 function() {
			$(this).attr("src",src);
			$(this).fadeIn();
		});
		return false;	
    });
});