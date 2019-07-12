function ranking(){
	var elapsedTime;
	
	elapsedTime = localStorage.getItem("firstN");
	if(elapsedTime==null){
		elapsedTime = 3599999;
		localStorage.setItem("firstN",elapsedTime);
	}
	var m = Math.floor(elapsedTime / 60000);
    var s = Math.floor(elapsedTime % 60000 / 1000);
    var ms = elapsedTime % 1000;
    m = ('0' + m).slice(-2); 
    s = ('0' + s).slice(-2);
    ms = ('0' + ms).slice(-3);
	document.getElementById("firstN").textContent= m + ':' + s + ':' + ms;
	
	elapsedTime = localStorage.getItem("secondN");
	if(elapsedTime==null){
		elapsedTime = 3599999;
		localStorage.setItem("secondN",elapsedTime);
	}
	var m = Math.floor(elapsedTime / 60000);
    var s = Math.floor(elapsedTime % 60000 / 1000);
    var ms = elapsedTime % 1000;
    m = ('0' + m).slice(-2); 
    s = ('0' + s).slice(-2);
    ms = ('0' + ms).slice(-3);
	document.getElementById("secondN").textContent= m + ':' + s + ':' + ms;
	
	elapsedTime = localStorage.getItem("thirdN");
	if(elapsedTime==null){
		elapsedTime = 3599999;
		localStorage.setItem("thirdN",elapsedTime);
	}
	var m = Math.floor(elapsedTime / 60000);
    var s = Math.floor(elapsedTime % 60000 / 1000);
    var ms = elapsedTime % 1000;
    m = ('0' + m).slice(-2); 
    s = ('0' + s).slice(-2);
    ms = ('0' + ms).slice(-3);
	document.getElementById("thirdN").textContent= m + ':' + s + ':' + ms;
	
	elapsedTime = localStorage.getItem("fourthN");
	if(elapsedTime==null){
		elapsedTime = 3599999;
		localStorage.setItem("fourthN",elapsedTime);
	}
	var m = Math.floor(elapsedTime / 60000);
    var s = Math.floor(elapsedTime % 60000 / 1000);
    var ms = elapsedTime % 1000;
    m = ('0' + m).slice(-2); 
    s = ('0' + s).slice(-2);
    ms = ('0' + ms).slice(-3);
	document.getElementById("fourthN").textContent= m + ':' + s + ':' + ms;
	
	elapsedTime = localStorage.getItem("fifthN");
	if(elapsedTime==null){
		elapsedTime = 3599999;
		localStorage.setItem("fifthN",elapsedTime);
	}
	var m = Math.floor(elapsedTime / 60000);
    var s = Math.floor(elapsedTime % 60000 / 1000);
    var ms = elapsedTime % 1000;
    m = ('0' + m).slice(-2); 
    s = ('0' + s).slice(-2);
    ms = ('0' + ms).slice(-3);
	document.getElementById("fifthN").textContent= m + ':' + s + ':' + ms;
	
	elapsedTime = localStorage.getItem("newN");
	if(elapsedTime==null){
		elapsedTime = 3599999;
		localStorage.setItem("newN",elapsedTime);
	}
	var m = Math.floor(elapsedTime / 60000);
    var s = Math.floor(elapsedTime % 60000 / 1000);
    var ms = elapsedTime % 1000;
    m = ('0' + m).slice(-2); 
    s = ('0' + s).slice(-2);
    ms = ('0' + ms).slice(-3);
	document.getElementById("newN").textContent= m + ':' + s + ':' + ms;
	
	if(localStorage.getItem("firstplayerN")==null){
		localStorage.setItem("firstplayerN","NONAME")
	}
	if(localStorage.getItem("secondplayerN")==null){
		localStorage.setItem("secondplayerN","NONAME")
	}
	if(localStorage.getItem("thirdplayerN")==null){
		localStorage.setItem("thirdplayerN","NONAME")
	}
	if(localStorage.getItem("fourthplayerN")==null){
		localStorage.setItem("fourthplayerN","NONAME")
	}
	if(localStorage.getItem("fifthplayerN")==null){
		localStorage.setItem("fifthplayerN","NONAME")
	}
	if(localStorage.getItem("newplayerN")==null){
		localStorage.setItem("newplayerN","NONAME")
	}
	document.getElementById("firstplayerN").textContent= localStorage.getItem("firstplayerN");
	document.getElementById("secondplayerN").textContent= localStorage.getItem("secondplayerN");
	document.getElementById("thirdplayerN").textContent= localStorage.getItem("thirdplayerN");
	document.getElementById("fourthplayerN").textContent= localStorage.getItem("fourthplayerN");
	document.getElementById("fifthplayerN").textContent= localStorage.getItem("fifthplayerN");
	document.getElementById("newplayerN").textContent= localStorage.getItem("newplayerN");
	
	elapsedTime = localStorage.getItem("firstE");
	if(elapsedTime==null){
		elapsedTime = 3599999;
		localStorage.setItem("firstE",elapsedTime);
	}
	var m = Math.floor(elapsedTime / 60000);
    var s = Math.floor(elapsedTime % 60000 / 1000);
    var ms = elapsedTime % 1000;
    m = ('0' + m).slice(-2); 
    s = ('0' + s).slice(-2);
    ms = ('0' + ms).slice(-3);
	document.getElementById("firstE").textContent= m + ':' + s + ':' + ms;
	
	elapsedTime = localStorage.getItem("secondE");
	if(elapsedTime==null){
		elapsedTime = 3599999;
		localStorage.setItem("secondE",elapsedTime);
	}
	var m = Math.floor(elapsedTime / 60000);
    var s = Math.floor(elapsedTime % 60000 / 1000);
    var ms = elapsedTime % 1000;
    m = ('0' + m).slice(-2); 
    s = ('0' + s).slice(-2);
    ms = ('0' + ms).slice(-3);
	document.getElementById("secondE").textContent= m + ':' + s + ':' + ms;
	
	elapsedTime = localStorage.getItem("thirdE");
	if(elapsedTime==null){
		elapsedTime = 3599999;
		localStorage.setItem("thirdE",elapsedTime);
	}
	var m = Math.floor(elapsedTime / 60000);
    var s = Math.floor(elapsedTime % 60000 / 1000);
    var ms = elapsedTime % 1000;
    m = ('0' + m).slice(-2); 
    s = ('0' + s).slice(-2);
    ms = ('0' + ms).slice(-3);
	document.getElementById("thirdE").textContent= m + ':' + s + ':' + ms;
	
	elapsedTime = localStorage.getItem("fourthE");
	if(elapsedTime==null){
		elapsedTime = 3599999;
		localStorage.setItem("fourthE",elapsedTime);
	}
	var m = Math.floor(elapsedTime / 60000);
    var s = Math.floor(elapsedTime % 60000 / 1000);
    var ms = elapsedTime % 1000;
    m = ('0' + m).slice(-2); 
    s = ('0' + s).slice(-2);
    ms = ('0' + ms).slice(-3);
	document.getElementById("fourthE").textContent= m + ':' + s + ':' + ms;
	
	elapsedTime = localStorage.getItem("fifthE");
	if(elapsedTime==null){
		elapsedTime = 3599999;
		localStorage.setItem("fifthE",elapsedTime);
	}
	var m = Math.floor(elapsedTime / 60000);
    var s = Math.floor(elapsedTime % 60000 / 1000);
    var ms = elapsedTime % 1000;
    m = ('0' + m).slice(-2); 
    s = ('0' + s).slice(-2);
    ms = ('0' + ms).slice(-3);
	document.getElementById("fifthE").textContent= m + ':' + s + ':' + ms;
	
	elapsedTime = localStorage.getItem("newE");
	if(elapsedTime==null){
		elapsedTime = 3599999;
		localStorage.setItem("newE",elapsedTime);
	}
	var m = Math.floor(elapsedTime / 60000);
    var s = Math.floor(elapsedTime % 60000 / 1000);
    var ms = elapsedTime % 1000;
    m = ('0' + m).slice(-2); 
    s = ('0' + s).slice(-2);
    ms = ('0' + ms).slice(-3);
	document.getElementById("newE").textContent= m + ':' + s + ':' + ms;
	
	if(localStorage.getItem("firstplayerE")==null){
		localStorage.setItem("firstplayerE","NONAME")
	}
	if(localStorage.getItem("secondplayerE")==null){
		localStorage.setItem("secondplayerE","NONAME")
	}
	if(localStorage.getItem("thirdplayerE")==null){
		localStorage.setItem("thirdplayerE","NONAME")
	}
	if(localStorage.getItem("fourthplayerE")==null){
		localStorage.setItem("fourthplayerE","NONAME")
	}
	if(localStorage.getItem("fifthplayerE")==null){
		localStorage.setItem("fifthplayerE","NONAME")
	}
	if(localStorage.getItem("newplayerE")==null){
		localStorage.setItem("newplayerE","NONAME")
	}
	document.getElementById("firstplayerE").textContent= localStorage.getItem("firstplayerE");
	document.getElementById("secondplayerE").textContent= localStorage.getItem("secondplayerE");
	document.getElementById("thirdplayerE").textContent= localStorage.getItem("thirdplayerE");
	document.getElementById("fourthplayerE").textContent= localStorage.getItem("fourthplayerE");
	document.getElementById("fifthplayerE").textContent= localStorage.getItem("fifthplayerE");
	document.getElementById("newplayerE").textContent= localStorage.getItem("newplayerE");
	
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