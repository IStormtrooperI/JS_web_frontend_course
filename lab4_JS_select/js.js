

//onKeyPress ввод только цифр и точки
function peppa1() {
	if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode != 46))
	event.returnValue = false;
	
	var c = document.svinka1.svinka2.value;
	var v = c.indexOf(".");
	
	if ((v != -1) && (event.keyCode == 46))
	event.returnValue = false;
}

//onchange активация кнопки
function peppa2() {
	var s=document.svinka1.svinka7.value;
	var p=document.svinka1.svinka2.value;
	if ((s!="")&&(p!=""))
		document.svinka1.svinka3.disabled = false;
	else 
		document.svinka1.svinka3.disabled = true;
}


//onclick Посчитать
function peppa3() {
	
	var sel = document.svinka1.svinka5.selectedIndex;
	var s = document.svinka1.svinka5.options;
	var iz = s[sel].text;
	sel = document.svinka1.svinka6.selectedIndex;
	s = document.svinka1.svinka6.options;
	var v = s[sel].text;
	var kurs = parseFloat(document.svinka1.svinka7.value);
	var perevod = document.svinka1.svinka2.value;
	var sum = kurs * parseFloat(perevod);
	document.svinka1.svinka4.value="Перевод: "+iz+" - "+v+" по курсу "+kurs+ "\nК выдаче: "+sum.toFixed(2);
}


var g;
//onchange select ИЗ
function peppa4(x) {
	var c = document.svinka1.svinka5.options[x].text;
	document.svinka1.svinka6.options[x].disabled=true;
	if ((g != x) && (g != undefined))
	document.svinka1.svinka6.options[g].disabled=false;
	g = x;
	peppa6();
}

var j;
//onchange select В
function peppa5(x) {
	var c = document.svinka1.svinka6.options[x].text;
	document.svinka1.svinka5.options[x].disabled=true;
	if ((j != x) && (j != undefined))
	{	
		document.svinka1.svinka5.options[j].disabled=false;
	}
	j = x;
	peppa6();
}

// подстановка курса
function peppa6() {
	var val = ["Рубли","Евро","Доллар","Фунт стерлингов","Японская иена","Китайский юань","Украинская гривна"];
	var sel = document.svinka1.svinka5.selectedIndex;
	var s = document.svinka1.svinka5.options;
	var iz = s[sel].text;
	sel = document.svinka1.svinka6.selectedIndex;
	s = document.svinka1.svinka6.options;
	var v = s[sel].text;
	
	if (iz==val[0] && v==val[1]) document.svinka1.svinka7.value="0.012"; 
	if (iz==val[1] && v==val[0]) document.svinka1.svinka7.value="83.19"; 
	if (iz==val[0] && v==val[2]) document.svinka1.svinka7.value="0.013"; 
	if (iz==val[2] && v==val[0]) document.svinka1.svinka7.value="76.5"; 
	if (iz==val[0] && v==val[3]) document.svinka1.svinka7.value="0.011"; 
	if (iz==val[3] && v==val[0]) document.svinka1.svinka7.value="94.49"; 
	if (iz==val[0] && v==val[4]) document.svinka1.svinka7.value="1.41"; 
	if (iz==val[4] && v==val[0]) document.svinka1.svinka7.value="0.71"; 
	if (iz==val[0] && v==val[5]) document.svinka1.svinka7.value="0.093"; 
	if (iz==val[5] && v==val[0]) document.svinka1.svinka7.value="10.76"; 
	if (iz==val[0] && v==val[6]) document.svinka1.svinka7.value="0.36"; 
	if (iz==val[6] && v==val[0]) document.svinka1.svinka7.value="2.82"; 
	
	if (iz==val[1] && v==val[2]) document.svinka1.svinka7.value="1.09"; 
	if (iz==val[2] && v==val[1]) document.svinka1.svinka7.value="0.92"; 
	if (iz==val[1] && v==val[3]) document.svinka1.svinka7.value="0.88"; 
	if (iz==val[3] && v==val[1]) document.svinka1.svinka7.value="1.13"; 
	if (iz==val[1] && v==val[4]) document.svinka1.svinka7.value="116.28"; 
	if (iz==val[4] && v==val[1]) document.svinka1.svinka7.value="0.0086"; 
	if (iz==val[1] && v==val[5]) document.svinka1.svinka7.value="7.69"; 
	if (iz==val[5] && v==val[1]) document.svinka1.svinka7.value="0.13"; 
	if (iz==val[1] && v==val[6]) document.svinka1.svinka7.value="29.36"; 
	if (iz==val[6] && v==val[1]) document.svinka1.svinka7.value="0.034"; 
	
	if (iz==val[2] && v==val[3]) document.svinka1.svinka7.value="0.81"; 
	if (iz==val[3] && v==val[2]) document.svinka1.svinka7.value="1.24"; 
	if (iz==val[2] && v==val[4]) document.svinka1.svinka7.value="107.64"; 
	if (iz==val[4] && v==val[2]) document.svinka1.svinka7.value="0.0093"; 
	if (iz==val[2] && v==val[5]) document.svinka1.svinka7.value="7.09"; 
	if (iz==val[5] && v==val[2]) document.svinka1.svinka7.value="0.14"; 
	if (iz==val[2] && v==val[6]) document.svinka1.svinka7.value="27.08"; 
	if (iz==val[6] && v==val[2]) document.svinka1.svinka7.value="0.037"; 
	
	if (iz==val[3] && v==val[4]) document.svinka1.svinka7.value="133.05"; 
	if (iz==val[4] && v==val[3]) document.svinka1.svinka7.value="0.0075"; 
	if (iz==val[3] && v==val[5]) document.svinka1.svinka7.value="8.78"; 
	if (iz==val[5] && v==val[3]) document.svinka1.svinka7.value="0.11"; 
	if (iz==val[3] && v==val[6]) document.svinka1.svinka7.value="33.29"; 
	if (iz==val[6] && v==val[3]) document.svinka1.svinka7.value="0.03"; 
	
	if (iz==val[4] && v==val[5]) document.svinka1.svinka7.value="0.066"; 
	if (iz==val[5] && v==val[4]) document.svinka1.svinka7.value="15.15"; 
	if (iz==val[4] && v==val[6]) document.svinka1.svinka7.value="0.25"; 
	if (iz==val[6] && v==val[4]) document.svinka1.svinka7.value="3.97"; 
	
	if (iz==val[5] && v==val[6]) document.svinka1.svinka7.value="0.038"; 
	if (iz==val[6] && v==val[5]) document.svinka1.svinka7.value="26.2";
}

//onclick Переводимая сумма, проверка, выбраны ли валюты
function peppa7() {
	if (document.svinka1.svinka7.value=="")
	alert("Выберите валюты");
	else
	document.svinka1.svinka2.readOnly=false;
}

//onclick очистка формы
function peppa8() {
	var sel1 = document.svinka1.svinka5.selectedIndex;
	var sel2 = document.svinka1.svinka6.selectedIndex;
	var s = document.getElementsByClassName("opt1");
	s[0].selected=true;
	s[sel2].disabled=false;
	s = document.getElementsByClassName("opt2");
	s[0].selected=true;
	s[sel1].disabled=false;
}