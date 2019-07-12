function ranking(){
	var elapsedTime;
	
	elapsedTime = localStorage.getItem("first");
	if(elapsedTime==null){
		elapsedTime = 3599999;
		localStorage.setItem("first",elapsedTime);
	}
	var m = Math.floor(elapsedTime / 60000);
    var s = Math.floor(elapsedTime % 60000 / 1000);
    var ms = elapsedTime % 1000;
    m = ('0' + m).slice(-2); 
    s = ('0' + s).slice(-2);
    ms = ('0' + ms).slice(-3);
	document.getElementById("first").textContent= m + ':' + s + ':' + ms;
	
	elapsedTime = localStorage.getItem("second");
	if(elapsedTime==null){
		elapsedTime = 3599999;
		localStorage.setItem("second",elapsedTime);
	}
	var m = Math.floor(elapsedTime / 60000);
    var s = Math.floor(elapsedTime % 60000 / 1000);
    var ms = elapsedTime % 1000;
    m = ('0' + m).slice(-2); 
    s = ('0' + s).slice(-2);
    ms = ('0' + ms).slice(-3);
	document.getElementById("second").textContent= m + ':' + s + ':' + ms;
	
	elapsedTime = localStorage.getItem("third");
	if(elapsedTime==null){
		elapsedTime = 3599999;
		localStorage.setItem("third",elapsedTime);
	}
	var m = Math.floor(elapsedTime / 60000);
    var s = Math.floor(elapsedTime % 60000 / 1000);
    var ms = elapsedTime % 1000;
    m = ('0' + m).slice(-2); 
    s = ('0' + s).slice(-2);
    ms = ('0' + ms).slice(-3);
	document.getElementById("third").textContent= m + ':' + s + ':' + ms;
	
	elapsedTime = localStorage.getItem("fourth");
	if(elapsedTime==null){
		elapsedTime = 3599999;
		localStorage.setItem("fourth",elapsedTime);
	}
	var m = Math.floor(elapsedTime / 60000);
    var s = Math.floor(elapsedTime % 60000 / 1000);
    var ms = elapsedTime % 1000;
    m = ('0' + m).slice(-2); 
    s = ('0' + s).slice(-2);
    ms = ('0' + ms).slice(-3);
	document.getElementById("fourth").textContent= m + ':' + s + ':' + ms;
	
	elapsedTime = localStorage.getItem("fifth");
	if(elapsedTime==null){
		elapsedTime = 3599999;
		localStorage.setItem("fifth",elapsedTime);
	}
	var m = Math.floor(elapsedTime / 60000);
    var s = Math.floor(elapsedTime % 60000 / 1000);
    var ms = elapsedTime % 1000;
    m = ('0' + m).slice(-2); 
    s = ('0' + s).slice(-2);
    ms = ('0' + ms).slice(-3);
	document.getElementById("fifth").textContent= m + ':' + s + ':' + ms;
	
	elapsedTime = localStorage.getItem("new");
	if(elapsedTime==null){
		elapsedTime = 3599999;
		localStorage.setItem("new",elapsedTime);
	}
	var m = Math.floor(elapsedTime / 60000);
    var s = Math.floor(elapsedTime % 60000 / 1000);
    var ms = elapsedTime % 1000;
    m = ('0' + m).slice(-2); 
    s = ('0' + s).slice(-2);
    ms = ('0' + ms).slice(-3);
	document.getElementById("new").textContent= m + ':' + s + ':' + ms;
	
	if(localStorage.getItem("firstplayer")==null){
		localStorage.setItem("firstplayer","NONAME")
	}
	if(localStorage.getItem("secondplayer")==null){
		localStorage.setItem("secondplayer","NONAME")
	}
	if(localStorage.getItem("thirdplayer")==null){
		localStorage.setItem("thirdplayer","NONAME")
	}
	if(localStorage.getItem("fourthplayer")==null){
		localStorage.setItem("fourthplayer","NONAME")
	}
	if(localStorage.getItem("fifthplayer")==null){
		localStorage.setItem("fifthplayer","NONAME")
	}
	if(localStorage.getItem("newplayer")==null){
		localStorage.setItem("newplayer","NONAME")
	}
	document.getElementById("firstplayer").textContent= localStorage.getItem("firstplayer");
	document.getElementById("secondplayer").textContent= localStorage.getItem("secondplayer");
	document.getElementById("thirdplayer").textContent= localStorage.getItem("thirdplayer");
	document.getElementById("fourthplayer").textContent= localStorage.getItem("fourthplayer");
	document.getElementById("fifthplayer").textContent= localStorage.getItem("fifthplayer");
	document.getElementById("newplayer").textContent= localStorage.getItem("newplayer");
}