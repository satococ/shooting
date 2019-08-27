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
	
}
