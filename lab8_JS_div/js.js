

//onload form
function funtik() {
	document.forma.pokaz.style.backgroundColor='#2c3e507d';
}

//onclick Сбросить
function skip() {
	document.forma.pokaz.style.backgroundColor='#2c3e507d';
	document.forma.pokaz.disabled = true;
}

//onchange проверка изменения
function prov() {
	var zagolovok = document.forma.zgol.value,
	kartinki = document.getElementsByClassName("kartinka"),
	podpis = document.forma.npod.value,
	cvett = document.forma.coltxt,
	t = 0, k = 0;
	
	
	for(var i=0;i<kartinki.length;i++)
	if(kartinki[i].checked==true)
	t++;

	
	
	
	if(t>0 && cvett.value!="" && zagolovok!="" && podpis!="")
	{
		document.forma.pokaz.style.backgroundColor='#2c3e50';
		document.forma.pokaz.disabled = false;
	}
}

//onclick Показать
var guk;
function knopochkamoya() {
	if(guk==1) {
		Win.close();
		guk=0;
	}
	
	var g = 0,
	kartinki = document.getElementsByClassName("kartinka");
	for(var i=0;i<kartinki.length;i++)
	if(kartinki[i].checked==true)
		g++;
	
	if(g>1)
	{
		alert("Выберете только одну картинку");
		return;
	}
	
	if(window.document.forma.coltxt.value == window.document.forma.sel.value)
	{
		alert("цвет текста и цвет фона нового окна одинаковые\nПожалуйста измените один из цветов");
		return;
	}
	
	
	
	Win = open("", "NewWin",
	"width=500,height=450,left=1000");
	Win.document.title="Апельсин";
	Win.document.body.style.backgroundColor = window.document.forma.sel.value;
	Win.document.body.style.color = window.document.forma.coltxt.value;
	
	
	var NewElem = Win.document.createElement("div");
	NewElem.style.position ="absolute";
	NewElem.style.width = "470px";
	NewElem.style.height = "420px";
	
	
	var h = Win.document.createElement("h1");
	h.innerText = window.document.forma.zgol.value;
	h.style.fontSize="13pt";
	h.style.position ="absolute";
	h.style.top ="-15px";
	h.style.right ="30px";
	NewElem.appendChild(h);
	
	var kartinki = window.document.getElementsByClassName("kartinka"),
	c;
	for(var i=0;i<kartinki.length;i++)
	if(kartinki[i].checked==true)
	c = kartinki[i].value;
	
	
	
	var kart = Win.document.createElement("img");
	kart.setAttribute("src", c);
	kart.style.width="400px";
	kart.style.marginLeft="40px";
	kart.style.marginTop="30px";
	NewElem.appendChild(kart);
	
	
	
	var pd = Win.document.createElement("h2");
	pd.innerText = window.document.forma.npod.value;
	pd.style.fontSize="13pt";
	pd.style.textAlign="center";
	NewElem.appendChild(pd);
	
	
	var knop = Win.document.createElement("button");
	knop.innerText="закрыть";
	knop.onclick = function kek() { Win.close(); }
	NewElem.appendChild(knop);
	
	
	Win.document.body.appendChild(NewElem);
	
	
	
	guk = 1;
	//_____________________________________________________________________________________
	//_____________________________________________________________________________________
	//_____________________________________________________________________________________
	
	//console.log(window.document.body.querySelectorAll(selectors).length);
	
	if(window.document.getElementById("NewDiv")!=null)
		window.document.getElementById("NewDiv").remove();
	
	var NewElem = window.document.createElement("div");
	NewElem.style.position ="absolute";
	NewElem.style.width = "500px";
	NewElem.style.height = "450px";
	NewElem.style.top = "550px";
	NewElem.style.backgroundColor =  window.document.forma.sel.value;
	NewElem.style.color =  window.document.forma.coltxt.value;
	NewElem.setAttribute("id","NewDiv");
	
	var h = window.document.createElement("h1");
	h.innerText = window.document.forma.zgol.value;
	h.style.fontSize="13pt";
	h.style.position ="absolute";
	h.style.top ="-10px";
	h.style.right ="60px";
	NewElem.appendChild(h);
	
	var kartinki = window.document.getElementsByClassName("kartinka"),
	c;
	for(var i=0;i<kartinki.length;i++)
	if(kartinki[i].checked==true)
	c = kartinki[i].value;
	
	
	
	var kart = window.document.createElement("img");
	kart.setAttribute("src", c);
	kart.style.width="400px";
	kart.style.marginLeft="40px";
	kart.style.marginTop="30px";
	NewElem.appendChild(kart);
	
	
	
	var pd = window.document.createElement("h2");
	pd.innerText = window.document.forma.npod.value;
	pd.style.fontSize="13pt";
	pd.style.textAlign="center";
	NewElem.appendChild(pd);
	
	
	window.document.body.appendChild(NewElem);
	
	

}


function ver() {
	alert("123");
	guk = 0;
}
