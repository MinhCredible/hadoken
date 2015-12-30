$(document).ready(function(){
	var ryu = $('.ryu img')
	ryu.hover(function(){
		this.src = "img/ryuA.gif";
	}, function() {
		this.src = "img/ryuStill.png";
	});

	ryu.mousedown(function(){
		this.src = 'img/ryuThrow.png'
	});

	ryu.mousedown(function(){
		$('.hadouken').remove();
	});

	ryu.mousedown(function() {
		$('.ryu').append('<img class="hadouken" src="img/hado.gif">');
	});

	ryu.mousedown(function(){
		playHadouken();
		$('.hadouken').animate({
		'margin-left': "1200px"}, 1000, "linear", function(){
			this.remove();
		});
	});
	ryu.mouseup(function(){
		this.src = 'img/ryuStill.png';
	});

	function playHadouken () {
		$('.ryu-sound')[0],volume = 0.5;
		$('.ryu-sound')[0].load();
		$('.ryu-sound')[0].play();
	};
});