
//При наведении на картинку OnMouseOver
function navodkart(x) {
	var it = x.src.indexOf("images/"),
		j = x.src.substr(it),
		nazv = ["Red","Jaguar E-Type 1961",
				"Gray","Aston Martin DB5 1963",
				"Blue","Rolls-Royce Silver Shadow 1965",
				"Orange","Lotus Esprit 1976"];
		
		j = j.replace("images/","");
		j = j.replace(".png","");
		
		for(var i=0;i<nazv.length;i+=2)
		{
			if(nazv[i]==j)
			{
				document.forma.nazvanie.value=nazv[i+1];
			}
		}
}

//При убирании с картинки курсора OnMouseOut
function ecler() {
	document.forma.nazvanie.value="";
}



var s = "";
//Запуск
function clock1() {
	document.forma.knop1.disabled = true;
	document.forma.knop2.disabled = false;
	document.forma.knop3.disabled = true;
	s = window.setInterval(gek,1000);
	
	//var j = document.getElementsByTagName("img");
	//console.log(j.length);
}

//Это ОНО
function gek() {
	
	var s = document.getElementsByTagName("img"),
	g = "";
	
	for(var i=0;i<s.length-1;i++)
	{
		g = s[i+1].src;
		s[i+1].src = s[i].src;
		s[i].src = g;
	}
}

//Остановка
function clock2 () {
	document.forma.knop1.disabled = false;
	document.forma.knop2.disabled = true;
	document.forma.knop3.disabled = false;
	window.clearInterval(s);
}