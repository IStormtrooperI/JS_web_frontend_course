
//Только цифры при записе длины массива
function keyp() 
{
	
	if ((event.keyCode < 48) || (event.keyCode > 57))
	event.returnValue = false;
}	


var mas =[];

//onchange изменение длины массива
function dis(x) {
	
	if (x!="") {
		mas = [];
		for(var i=0;i<parseInt(x);i++)
		mas[i]=Math.floor(Math.random()*200-100);
		document.main.sozdmas.disabled=false;
	}
	else
	document.main.sozdmas.disabled=true;
	
	var proverka = document.main.ishmas.value.split(", ");
	if(mas.length!=proverka.length)
	document.main.vbich.disabled=true;
	else
	document.main.vbich.disabled=false;
}

//onclick кнопка - создать массив
function clock() {
	
	document.main.txtmin.value="";
	document.main.txtmax.value="";
	document.main.txtotrc.value="";
	document.main.txtneotrc.value="";
	document.main.txtsum.value="";
	document.main.sortirovka.value="";
	document.main.min.checked=false;
	document.main.max.checked=false;
	document.main.otrc.checked=false;
	document.main.neotrc.checked=false;
	document.main.sum.checked=false;
	
	document.main.ishmas.value="";
	
	for(var i=0;i<mas.length;i++)
	if (document.main.ishmas.value=="")
	document.main.ishmas.value = document.main.ishmas.value + mas[i];
	else
	document.main.ishmas.value = document.main.ishmas.value + ", " + mas[i];
	
	if (document.main.ishmas.value!="")
	document.main.vbich.disabled=false;
	else
	document.main.vbich.disabled=true;
}

function vbichislenie() {
	var min=200,
	max=-200,
	sum=0,
	otrc=0,
	neotrc=0;
	
	
	for(var i=0;i<mas.length;i++)
	{
		sum=sum+mas[i];
		
		if(mas[i]>max)
		max=mas[i];
		
		if(mas[i]<min)
		min=mas[i];
		
		if(mas[i]<0)
		otrc++;
		
		if(mas[i]>-1)
		neotrc++;
	}
	
	if(document.main.min.checked==true)
	document.main.txtmin.value=min;
	else
	document.main.txtmin.value="";
	
	if(document.main.max.checked==true)
	document.main.txtmax.value=max;
	else
	document.main.txtmax.value="";
	
	if(document.main.sum.checked==true)
	document.main.txtsum.value=sum;
	else
	document.main.txtsum.value="";
	
	if(document.main.otrc.checked==true)
	document.main.txtotrc.value=otrc;
	else
	document.main.txtotrc.value="";
	
	if(document.main.neotrc.checked==true)
	document.main.txtneotrc.value=neotrc;
	else
	document.main.txtneotrc.value="";
	
	if(document.main.rad[2].checked==true)
	document.main.sortirovka.value=document.main.ishmas.value;
	else
	{
		var masSort = mas;
		masSort.sort(
			function (a, b) {
				if (a > b) return 1;
				if (a == b) return 0;
				if (a < b) return -1; });
		
		if(document.main.rad[1].checked==true)
		masSort.reverse();
		
		document.main.sortirovka.value="";
		
		for(var i=0;i<masSort.length;i++)
		if (document.main.sortirovka.value=="")
		document.main.sortirovka.value = document.main.sortirovka.value + masSort[i];
		else
		document.main.sortirovka.value = document.main.sortirovka.value + ", " + masSort[i];
	}
}

//onchange изменение checkbox
function prv(x) {
	if(x.checked!=true)
	{
		if(x.name=="min")
		document.main.txtmin.value="";
		else
		if(x.name=="max")
		document.main.txtmax.value="";
		else
		if(x.name=="sum")
		document.main.txtsum.value="";
		else
		if(x.name=="otrc")
		document.main.txtotrc.value="";
		else
		if(x.name=="neotrc")
		document.main.txtneotrc.value="";
	}
}