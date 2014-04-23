(function($) {

	var $elem, timer, timeInSec = 0;

	function start(time){
		console.log("STARTING");
		timeInSec = minutesToSeconds(time);
		
		update();
		timer = setInterval(loop, 1000);
	}

	function update(){
		$elem.html( formatSeconds(timeInSec) );
	}

	function finish(){
		console.log("FINISH");
	}

	function loop(){
		if(timeInSec > 0){
			timeInSec--;
			update();
		} else {
			finish();
		}
	}

	function minutesToSeconds(min){
		return min * 60;
	}

	function formatSeconds(seconds){
		var min = Math.floor(seconds / 60);
		var sec = seconds % 60;

		return leading(min) + ":" + leading(sec);
	}

	function leading(number){
		if(number < 9 ){
			return "0"+number;
		}

		return number;
	}

	$.fn.pomodoro = function(param){
		$elem = this;
		if( typeof(param) === "number" ){
			start(param);
		}
	}
})(jQuery);
