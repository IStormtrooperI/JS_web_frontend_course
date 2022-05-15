
//onkeypress
function PressOnBukovku() {
	if ((event.keyCode < 48) || (event.keyCode > 57))
	event.returnValue = false;
}

//onClick
function clock() {
	
	var c=0, v=document.formachka_moya.kol.value;
	for (var i=0; i<document.formachka_moya.r1.length; i++) {
		if (document.formachka_moya.r1[i].checked) {
			c=parseFloat(document.formachka_moya.r1[i].value);
		}
	}
	
	if (c==0) {
		alert("Отметьте нужный формат");
	} 
	else
	{
		if (parseInt(document.formachka_moya.kol.value)!=parseInt(document.formachka_moya.kol.value)) 
		{
			alert("Введите количество фотографий") 
		} 
		else if (document.formachka_moya.kol.value=="0") {
			alert("Введите количество фотографий не равное нулю");
		} else
		{
			if (document.formachka_moya.r2[1].checked) c+=1.5;
			var h=v*c;
			document.formachka_moya.text.value="Цена фотографии:"+c.toFixed(2)+"р.\nКоличество "+v+"шт.\nСумма заказа "+h.toFixed(2)+"р.";
		}
	}	
}	


//onchange radio|inpuTbI
function perchatka () {
	document.formachka_moya.text.value="";
}