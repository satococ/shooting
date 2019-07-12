function ranking(){
	var elapsedTime;
	
	elapsedTime = localStorage.getItem("first");
	var m = Math.floor(elapsedTime / 60000);
    var s = Math.floor(elapsedTime % 60000 / 1000);
    var ms = elapsedTime % 1000;
    m = ('0' + m).slice(-2); 
    s = ('0' + s).slice(-2);
    ms = ('0' + ms).slice(-3);
	document.getElementById("first").textContent=m + ':' + s + ':' + ms;
	
	elapsedTime = localStorage.getItem("second");
	var m = Math.floor(elapsedTime / 60000);
    var s = Math.floor(elapsedTime % 60000 / 1000);
    var ms = elapsedTime % 1000;
    m = ('0' + m).slice(-2); 
    s = ('0' + s).slice(-2);
    ms = ('0' + ms).slice(-3);
	document.getElementById("second").textContent=m + ':' + s + ':' + ms;
	
	elapsedTime = localStorage.getItem("third");
	var m = Math.floor(elapsedTime / 60000);
    var s = Math.floor(elapsedTime % 60000 / 1000);
    var ms = elapsedTime % 1000;
    m = ('0' + m).slice(-2); 
    s = ('0' + s).slice(-2);
    ms = ('0' + ms).slice(-3);
	document.getElementById("third").textContent=m + ':' + s + ':' + ms;
	
	elapsedTime = localStorage.getItem("fourth");
	var m = Math.floor(elapsedTime / 60000);
    var s = Math.floor(elapsedTime % 60000 / 1000);
    var ms = elapsedTime % 1000;
    m = ('0' + m).slice(-2); 
    s = ('0' + s).slice(-2);
    ms = ('0' + ms).slice(-3);
	document.getElementById("fourth").textContent=m + ':' + s + ':' + ms;
	
	elapsedTime = localStorage.getItem("fifth");
	var m = Math.floor(elapsedTime / 60000);
    var s = Math.floor(elapsedTime % 60000 / 1000);
    var ms = elapsedTime % 1000;
    m = ('0' + m).slice(-2); 
    s = ('0' + s).slice(-2);
    ms = ('0' + ms).slice(-3);
	document.getElementById("fifth").textContent=m + ':' + s + ':' + ms;
	
	elapsedTime = localStorage.getItem("new");
	var m = Math.floor(elapsedTime / 60000);
    var s = Math.floor(elapsedTime % 60000 / 1000);
    var ms = elapsedTime % 1000;
    m = ('0' + m).slice(-2); 
    s = ('0' + s).slice(-2);
    ms = ('0' + ms).slice(-3);
	document.getElementById("new").textContent=m + ':' + s + ':' + ms;
	document.getElementById("firstplayer").textContent= localStorage.getItem("firstplayer");
	document.getElementById("secondplayer").textContent= localStorage.getItem("secondplayer");
	document.getElementById("thirdplayer").textContent= localStorage.getItem("thirdplayer");
	document.getElementById("fourthplayer").textContent= localStorage.getItem("fourthplayer");
	document.getElementById("fifthplayer").textContent= localStorage.getItem("fifthplayer");
	document.getElementById("newplayer").textContent= localStorage.getItem("newplayer");
}