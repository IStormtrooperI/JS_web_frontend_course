function babayka() {
	document.forumachaka.rezl.value="";
	var j=false;
	var a = document.getElementsByName("rd");
	for(var i=0;i<a.length;i++)
	if(a[i].checked==true)
	j=true;
	
	if(j==true && document.forumachaka.nach.value!="" && document.forumachaka.konc.value!="")
	document.forumachaka.knopka.disabled=false;
	else
	document.forumachaka.knopka.disabled=true;
}

function clock() {
	
	/*if(document.forumachaka.nach.value.indexOf('.')!=-1)
	{
		var hello = document.forumachaka.nach.value.split('.');
		var gok = new Date(hello[2], hello[1], hello[0]);
		//console.log(gok);
		//console.log(parseInt(hello[0]));
		//console.log(gok.getMonth());
		if(parseInt(hello[0])!=gok.getDate() )
		{
		alert('Введена некорректная дата');
		return;
		}
	}
	if(document.forumachaka.nach.value.indexOf('/')!=-1)
	{
		var hello = document.forumachaka.nach.value.split('/');
		var gok = new Date(hello[2], hello[1], hello[0]);
		if(parseInt(hello[0])!=gok.getDate)
		{
		alert('Введена некорректная дата');
		return;
		}
	}
	if(document.forumachaka.nach.value.indexOf('-')!=-1)
	{
		var hello = document.forumachaka.nach.value.split('-');
		var gok = new Date(hello[0], hello[1], hello[2]);
		if(parseInt(hello[2])!=gok.getDate)
		{
		alert('Введена некорректная дата');
		return;
		}
	}*/
	
	var hello = document.forumachaka.nach.value.split('.');
	if(/((\d{4}|\d{2})\-(\d{1,2})\-(\d{1,2}))|((\d{1,2})[\.\/](\d{1,2})[\.\/](\d{4}|\d{2}))/.test(document.forumachaka.nach.value)==false)
	alert("Введите дату в правильном формате, шаблоны: \nYYYY-MM-DD\nDD.MM.YYYY\nDD/MM/YYYY");
	else
	{
		var s = /((\d{4}|\d{2})\-(\d{1,2})\-(\d{1,2}))|((\d{1,2})[\.\/](\d{1,2})[\.\/](\d{4}|\d{2}))/.exec(document.forumachaka.nach.value);
		var p = s[0];
		
		if(/((\d{1,2})[\.\/](\d{1,2})[\.\/](\d{4}|\d{2}))/.test(p)==true)
		p = p.replace(/(\d{1,2})[\.\/](\d{1,2})[\.\/](\d{4}|\d{2})/,'$3-$2-$1');
		
		var k = p.split('-');
		if(k[0].length == 2)
		k[0]="19"+k[0];
		if(k[1].length == 1)
		k[1]="0"+k[1];
		if(k[2].length == 1)
		k[2]="0"+k[2];
		p = k[0]+"-"+k[1]+"-"+k[2];
		
		var Nach = new Date(p);
		if(Nach.getDate()!=parseInt(k[2]))
		{
			alert('Введена некорректная дата');
			return;
		}
		var Konc = new Date(document.forumachaka.konc.value);
		//console.log(Nach);
		if(Nach>Konc)
		alert("Начальная дата больше конечной");
		else
		{//document.forumachaka.rezl.value
			var pauk = [-1,-1];
			if (document.getElementsByName("rd")[0].checked==true)
			{
				pauk[0] = (Konc - Nach)/86400000;
				pauk[1]=0;
			}	else
			if (document.getElementsByName("rd")[3].checked==true)
			{	
				var kuk=0;
				while((Konc-Nach)!=0)
				{
				var pek = Nach.getDay();
				var gek = new Date(Nach);
				gek.setDate(Nach.getDate()+6);
				if (pek==1 && gek.getDay()==0 && gek<Konc)
					kuk=kuk+1;
				Nach.setDate(Nach.getDate()+1);
				}
				pauk[0] = kuk;
				pauk[1]= 3;
			}	else
			if (document.getElementsByName("rd")[1].checked==true)
			{
				var kuk=0;
				while((Konc-Nach)!=0)
				{
				var pek = Nach.getDay();
				if ((pek==0 || pek==6) && Nach<=Konc)
					kuk=kuk+1;
				
				Nach.setDate(Nach.getDate()+1);
				}
				pauk[0] = kuk;
				pauk[1] = 1;
			}	else
			if (document.getElementsByName("rd")[2].checked==true)
			{
				var kuk=0;
				while((Konc-Nach)!=0)
				{
				var pek = Nach.getDay();
				if ((pek==1 || pek==2 || pek==3 || pek==4 || pek==5) && Nach<Konc)
					kuk=kuk+1;
				
				Nach.setDate(Nach.getDate()+1);
				}
				
				pauk[0] = kuk;
				pauk[1] = 2;
			}	else
			if (document.getElementsByName("rd")[4].checked==true)
			{
				var n =((Konc.getFullYear()*12) + (Konc.getMonth()+1)) - ((Nach.getFullYear()*12) + (Nach.getMonth()+1));
				pauk[0] = n;
				pauk[1] = 4;
			}
			
			pauk[0]= pauk[0]+"";
			var sv=pauk[0].charAt(pauk[0].length-1);
			
			if(pauk[1]==0 || pauk[1]==1 || pauk[1]==2)
			{
				if(sv == '0' || sv=='5' || sv=='6' || sv=='7' || sv=='8' || sv=='9')
				document.forumachaka.rezl.value= pauk[0]+" дней";
				else
				if (sv=='2' || sv=='3' || sv=='4')
				document.forumachaka.rezl.value= pauk[0]+" дня"; 
				else
				document.forumachaka.rezl.value= pauk[0]+" день"; 
			} else
			if(pauk[1]==3)
			{
				if(sv == '0' || sv=='5' || sv=='6' || sv=='7' || sv=='8' || sv=='9')
				document.forumachaka.rezl.value= pauk[0]+" недель";
				else
				if (sv=='2' || sv=='3' || sv=='4')
				document.forumachaka.rezl.value= pauk[0]+" недели"; 
				else
				document.forumachaka.rezl.value= pauk[0]+" неделя"; 
			} else
			if(pauk[1]==4)
			{
				if(sv == '0' || sv=='5' || sv=='6' || sv=='7' || sv=='8' || sv=='9')
				document.forumachaka.rezl.value= pauk[0]+" месяцев";
				else
				if (sv=='2' || sv=='3' || sv=='4')
				document.forumachaka.rezl.value= pauk[0]+" месяца"; 
				else
				document.forumachaka.rezl.value= pauk[0]+" месяц"; 
			}
		}
	}
}

function zing() {
	if ((event.keyCode < 45) || (event.keyCode > 57))
	event.returnValue = false;
}