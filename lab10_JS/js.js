
//onclick закрытие меню
function zakrit() {
	document.getElementById("red").remove();
}

//выбор фона
function izb(x) {
	document.body.style.backgroundImage = 'url('+x.src+')';
}

//выравнивание заголовка
function VbIrZ(x) {
	var s= x.textContent;
	if(/справа/.test(s)==true)
		document.getElementById('eco').style.textAlign = "right";
	else
	if(/по центру/.test(s)==true)
		document.getElementById('eco').style.textAlign = "center";
	else
		document.getElementById('eco').style.textAlign = "left";
}

//цвет заголовка
function cvet(x) {
	//x.style.backgroundColor;
	document.getElementById('eco').style.color = x.textContent;
}

//шрифт заголовка
function szhri(x) {
	document.getElementById('eco').style.fontFamily = x.id;
}

//размер текста
function razm(x) {
	var s = x.selectedIndex,
	g = x.options[s].value +"pt",
	sd = document.getElementsByClassName('ra').length;
	for(var i=0;i<sd;i++)
		document.getElementsByClassName('ra')[i].style.fontSize = g;
}

//нельзя вводить не цифры
function zapret() {
	if ((event.keyCode < 48) || (event.keyCode > 57))
	event.returnValue = false;
}

//ширина картинки
function shiri(x) {
	document.getElementById('kart').style.width = x.value+"px";
}

//выравнивание картинки
function flote(x) {
	if(/справа/.test(x.textContent)==true)
		document.getElementById('kart').style.float = "right";
	else
		document.getElementById('kart').style.float = "left";
}

//кнопка
function knopka() {
	document.getElementById('zzz').style.display = "block";
}

var gek=0;
//изменение заголовка
function da(x) {
	if(x.value!="")
	{
		document.getElementById('eco').textContent = x.value;
		gek=1;
	}
}

function net(x) {
	if(gek==1)
	{
		x.style.display = "none";
		gek=0;
	}
}