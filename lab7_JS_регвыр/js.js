

//Проверка заполнены ли все поля
function kek() {
	var a = document.getElementsByName("rdpol");
	var j=false;
	for(var i=0;i<a.length;i++)
		if(a[i].checked==true)
			j=true;
		
	if(document.moyaformochka.familiya.value!="" && document.moyaformochka.logine.value!="" && document.moyaformochka.parol1.value!="" && document.moyaformochka.parol2.value!="" && document.moyaformochka.data.value!="" && document.moyaformochka.telefon.value!="" && document.moyaformochka.inn.value!="" && j == true) 
	{
		if(document.moyaformochka.familiya.style.borderColor !="red" && document.moyaformochka.logine.style.borderColor !="red" && document.moyaformochka.parol1.style.borderColor !="red" && document.moyaformochka.parol2.style.borderColor !="red" && document.moyaformochka.telefon.style.borderColor !="red" && document.moyaformochka.inn.style.borderColor !="red")
		document.moyaformochka.sub.disabled=false;
		else 
		document.moyaformochka.sub.disabled=true;
	} else
	document.moyaformochka.sub.disabled=true;
}


//onkeypress Фамилия
function DaviF(x) {
	//event.returnValue = false;
	var k1 = /[а-я]/.test(event.key);
	var k2 = /[А-Я]/.test(event.key);
	
	if(k1 == false && k2 == false)
	event.returnValue = false;
	
	if(x!="" && k2 == true)
	event.returnValue = false;
	
	if(x=="" && k1 == true)
	event.returnValue = false;
	
	if(x.length >= 20)
	event.returnValue = false;
}

//onchange Фамилия
function changeF(x) {
	if(x.length<3) {
		alert("В текстовом поле \"Фамилия\" должно быть 3-20 символов");
		document.moyaformochka.familiya.style.borderColor ="red";
	}
	else
	document.moyaformochka.familiya.style.borderColor ="";

	kek();
}

//onkeypress Логин
function DaviL(x) {
	var l1 = /[0-9]|[a-z]|[A-Z]/.test(event.key);
	if(l1 == false)
	event.returnValue = false;
	
	if(x.length >= 10)
	event.returnValue = false;
}

//onchange Логин
function changeL(x) {
	if(x.length<3) {
		alert("В текстовом поле \"Логин\" должно быть 3-10 символов");
		document.moyaformochka.logine.style.borderColor ="red";
	}
	else
	document.moyaformochka.logine.style.borderColor ="";
	
	
	kek();
}

//onchange Пароль
function changeP1(x) {
	var b = false,
	B = false,
	cifra = false;
	if(x.length>=8) {
		for(var i=0; i<=x.length;i++) {
			
			if(b!=true)
			b = /[a-z]|[а-я]/.test(x[i]);
			
			if(B!=true)
			B = /[A-Z]|[А-Я]/.test(x[i]);
			
			if(cifra!=true)
			cifra = /[0-9]/.test(x[i]);
		} 
		document.moyaformochka.parol1.style.borderColor ="";
	}
	else 
	{
		alert("В текстовом поле \"Пароль\" должно быть от 8 символов");
		document.moyaformochka.parol1.style.borderColor ="red";
	}
	
	if(b != true || B != true || cifra != true) 
	{
		alert("В текстовом поле \"Пароль\" не соблюдены ограничения: \n * Должна быть хотя бы одна цифра \n * Должна быть хотя бы одна прописная буква \n * Должна быть хотя бы одна заглавная буква");
		document.moyaformochka.parol1.style.borderColor ="red";
	} else
	{
		document.moyaformochka.parol1.style.borderColor ="";
	}
	
	if(x != document.moyaformochka.parol2.value)
	document.moyaformochka.parol2.style.borderColor ="red";
	else
	document.moyaformochka.parol2.style.borderColor ="";
	
	kek();
}

//onchange Подвердите пароль
function changeP2(x) {
	if(x!= document.moyaformochka.parol1.value)
	{
		alert("Значение в текстовом поле \"Подтвердите пароль\" не равно значению в текстовом поле \"Пароль\"");
		document.moyaformochka.parol2.style.borderColor ="red";
	}		
	else
	{
		document.moyaformochka.parol2.style.borderColor ="";
	}
	
	kek();
}

//onchange Телефон
function changeT(x) {
	var k;
	k = /\(\d{3}\)\s?((\d{3}\-\d{4})|(\d{2}\-\d{2}\-\d{2}))/;
	if(k.test(x) == false)
	{
		alert("В текстовом поле \"Телефон\" данные введены в не правильном формате \nНеобходимые форматы: \n (nnn) nnn-nnnn \n (nnn) nn-nn-nn");
		document.moyaformochka.telefon.style.borderColor ="red";
	} else
	document.moyaformochka.telefon.style.borderColor ="";

	kek();
}

//onkeypress ИНН
function DaviI() {
	if (/[0-9]/.test(event.key) == false)
	event.returnValue = false;
}

//onchange ИНН 
function changeI(x) {
	if(x.length == 10) {
		var sum = x[0]*2 + x[1]*4 + x[2]*10 + x[3]*3 + x[4]*5 + x[5]*9 + x[6]*4 + x[7]*6 + x[8]*8;
		var ost = sum % 11;
		if(ost == x[9] || (ost == 10 && x[9] == 0 ))
		document.moyaformochka.inn.style.borderColor ="";
		else
		{
			alert("Введено не правильное значение ИНН \nПроверьте все цифры на корректность ввода");
			document.moyaformochka.inn.style.borderColor ="red";
		}
	} else
	if(x.length == 12) {
		var sum1 = x[0]*7 + x[1]*2 + x[2]*4 + x[3]*10 + x[4]*3 + x[5]*5 + x[6]*9 + x[7]*4 + x[8]*6 + x[9]*8;
		var sum2 = x[0]*3 + x[1]*7 + x[2]*2 + x[3]*4 + x[4]*10 + x[5]*3 +x[6]*5 + x[7]*9 + x[8]*4 + x[9]*6 + x[10]*8;
		var ost1 = sum1 % 11;
		var ost2 = sum2 % 11;
		if((ost1 == x[10] && ost2 == x[11]) || (ost1 == 10 && x[10] == 0 && ost2 == x[11]) || (ost1 == x[10] && ost2 == 10 && x[11] == 0) || (ost1 == 10 && x[10] == 0 && ost2 == 10 && x[11] == 0))
		document.moyaformochka.inn.style.borderColor ="";
		else 
		{
			alert("Введено не правильное значение ИНН \nПроверьте все цифры на корректность ввода");
			document.moyaformochka.inn.style.borderColor ="red";
		}
	} else
	alert("В текстовом поле \"ИНН\" данные введены в не правильном формате \nНеобходимо чтобы в данном поле было 12 или 10 цифр");
	
	
	kek();
}

//onclick Отправить
function clock() {
	alert("Данные были отправлены");
}
