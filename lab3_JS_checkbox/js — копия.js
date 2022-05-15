
var masiv = [];

//onClick checkboxbI
function  funkciya(x, y) {
	var sum=0;
	masiv = [];
	for (var i=0;i<document.doit.ch.length;i++) {
		if (document.doit.ch[i].checked==true) {
			sum=sum + parseInt(document.doit.ch[i].value);
			v=document.doit.ch[i].value.substring(4)+" "+document.doit.ch[i].value.substring(0,4)+" руб.";
			masiv.push(v);
		}
	}
	
	switch (x.substring(4)) {
		case "Фаршированная форель" : document.getElementById("eda").src="images/forel.jpg"; break;
		case "Телятина под соусом" : document.getElementById("eda").src= "images/telyatina.jpg"; break;
		case "Крем-суп из шампиньонов" : document.getElementById("eda").src= "images/sup4ik.jpg"; break;
		case "Рулет со шпинатом" : document.getElementById("eda").src= "images/rulet.jpg"; break;
		case "Пицца Гавайская" : document.getElementById("eda").src= "images/pizza.png"; break;
		case "Ванильный коктейль" : document.getElementById("eda").src= "images/koktel.png"; break;
		case "Напиток Грейпфрут" : document.getElementById("eda").src= "images/grepfrut.png"; break;
	} 
	
	if (sum==0) 
	document.doit.text.value="";
	else 
	document.doit.text.value=sum+" руб.";
}

//onClick Zakaz
function f() {
	var sum=0, v="Заказ принят!\n";
	for (var i=0;i<document.doit.ch.length;i++) {
		if (document.doit.ch[i].checked==true) {
			sum=sum + parseInt(document.doit.ch[i].value);
		}
		}
		
		if (sum==0)
		alert("Выберите блюда");
		else {
		for(var i=0; i<masiv.length; i++)
		{
		v=v+masiv[i]+"\n";
		}
		v=v+"В сумме "+sum+" руб."
		alert(v);
		}
		}				