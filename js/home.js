$(window).ready(function(){

	$('.top ul a').click(function(){
		var parent = $(this).parent();
		parent.find('a').removeClass('active');
		$(this).addClass('active'); 
	});

			
});