$(document).ready( function () {
	setTimeout(function() {
		document.getElementById("shawlispeech").innerHTML ="my ultimate goal in life is to have cool things turn up when people google my name!<br><br>(you can move me by pressing the left and right keys)";
		setTimeout(function() {
			document.getElementById("shawlispeech").innerHTML = "please click the links above to find out more about me.<br><br>(you can move me by pressing the left and right keys) ";
			setTimeout(function() {
				document.getElementById("shawlispeech").innerHTML =  "about this page: <br>frontend - html5/css/javascript;<br>backend - python;<br>hosted on google app engine.<br>this page is best viewed on chrome.<br><br>(you can move me by pressing the left and right keys)";
			}, 8000);
		}, 8000);
	}, 10000);
});
