
var prov = /[^0-9]+/;
function haha(x) {
	if(prov.test(x) == true)
	alert("Некорректные данные!");

	gekk();
}

var sum = 0.00;
function gekk() {
	
	sum = 0.00;
	var v1 = parseInt(document.forma.vp1.value),
	v2 = document.forma.vp2,
	v3 = document.forma.vp3.value,
	v4 = document.forma.vp4.selectedIndex;
	
	if(v1==v1) //Проверка на NaN
		sum += v1;
	
	for(var i=0;i<v2.length;i++)
		if(v2[i].checked == true)
			sum += parseInt(v2[i].value);
	
	
	
	/*регулярка используется чтобы исключить случай
		"80asdw"
	  когда после правильного ответа
	  или любой цифры идет другой символ
	*/
	
	if(prov.test(v3) == false && v3 == 80) 
		sum++;
	
	if(v4!=0)
		sum/=2;
	
	
	document.forma.rez.value = sum;
}

function clock() {
	if(sum<=3)
		alert("Неудовлетворительно");
	else
	if(sum>=4 && sum<=5)
		alert("Хорошо");
	if(sum>=6)
		alert("Отлично");
}