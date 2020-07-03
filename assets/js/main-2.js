jQuery(document).ready(function($) {
	$(".menu-button").click(function(event) {
		$(".navigation").css("top","0px");
		setTimeout(function(){
			$(".navigation").children("div").css('opacity','1');
			$(".menu-full").children("a").eq(0).delay(70).queue(function(next){$(this).css('opacity','1');next();});
			$(".menu-full").children("a").eq(1).delay(140).queue(function(next){$(this).css('opacity','1');next();});
			$(".menu-full").children("a").eq(2).delay(210).queue(function(next){$(this).css('opacity','1');next();});
			$(".menu-full").children("a").eq(3).delay(280).queue(function(next){$(this).css('opacity','1');next();});
			$(".menu-full").children("a").eq(4).delay(350).queue(function(next){$(this).css('opacity','1');next();});
			$(".menu-full").children("a").eq(5).delay(420).queue(function(next){$(this).css('opacity','1');next();});
			$(".menu-full").children("a").eq(6).delay(490).queue(function(next){$(this).css('opacity','1');next();});
		},650);
	});
	$(".cross").click(function(event) {
		$(".navigation").children("div").css('opacity','0');
		$(".menu-full").children("a").css('opacity','0');
		setTimeout(function(){$(".navigation").css("top","-360%");},250);
	});
	$(".menu-full").children("a").click(function(event) {
    	var href = $(this).not('.newtab').attr('href');
    	if(href!=null){
    		event.preventDefault();
			setTimeout(function(){
				window.location = href;
			},1000);
		}
		$(".navigation").children("div").css('opacity','0');
		$(".menu-full").children("a").css('opacity','0');
		setTimeout(function(){$(".navigation").css("top","-360%");},250);
	});
	$(".mail").mouseenter(function(){
		$(this).parent().siblings('.mail_show').addClass('show');
	});
	$(".mail").mouseleave(function(){
		$(this).parent().siblings('.mail_show').removeClass('show');
	});
	$(".phone").mouseenter(function(){
		$(this).parent().siblings('.phone_show').addClass('show');
	});
	$(".phone").mouseleave(function(){
		$(this).parent().siblings('.phone_show').removeClass('show');
	});


	$('.thumbnail').waypoint(function() {
		$(this['element']).addClass('block_reveal');
	},{offset:'50%'});
	$('.alumnus').waypoint(function() {
		$(this['element']).addClass('alumnus_reveal');
	},{offset:'50%'});
	$('.contact').waypoint(function() {
		$(this['element']).addClass('contact_reveal');
	},{offset:'70%'});
	$('.detail').waypoint(function(){
		$(this['element']).addClass('detail_reveal');
	},{offset:'50%'});
	$('.ctm').waypoint(function(){
		$(this['element']).addClass('bottom_reveal');
	},{offset:'75%'});
	$('.ctm').not('.col-md-offset-2').waypoint(function(){
		$(this['element']).addClass('bottom_reveal');
	},{offset:'90%'});

	$(".img_thumbnail").tilt({
		maxTilt:        10,
		perspective:   	600,   // Transform perspective, the lower the more extreme the tilt gets.
		easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
		scale:          1,      // 2 = 200%, 1.5 = 150%, etc..
		speed:          600,    // Speed of the enter/exit transition.
		transition:     true,   // Set a transition on enter/exit.
		disableAxis:    null,   // What axis should be disabled. Can be X or Y.
		reset:          true,   // If the tilt effect has to be reset on exit.
	});
});