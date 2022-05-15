function hello(x) {
	var y=parseInt(x);
	document.dacha.p4.value="";
	if (y!=y) {
		alert("В первые три поля необходимо ввести цифры");
	}
	if ((parseInt(document.dacha.p1.value)==parseInt(document.dacha.p1.value))&&
		(parseInt(document.dacha.p2.value)==parseInt(document.dacha.p2.value))&&
		(parseInt(document.dacha.p3.value)==parseInt(document.dacha.p3.value))) {
		document.dacha.p5.disabled=false;
	}
	else {
		document.dacha.p5.disabled=true;
	}
}
function clock() {
	document.dacha.p4.value=(parseInt(document.dacha.p1.value)/100)*parseInt(document.dacha.p3.value)*parseInt(document.dacha.p2.value);
}