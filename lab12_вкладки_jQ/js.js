

var txt,
num,
k  = ["JavaScript",0,"Jquery",0,"DOM",0,"CSS",0];

//нажатие на верхние кнопки
$(".verh").click(function() {
	
	$('.heh').css('background-color','#f6f6f6');
	$('.heh').css('color','black');
	$('.heh').css('border-color','#dadada');
	$('.keh').css('display','none');
	
	$('.heh').css('display','none');	
	
	$('.verh').css('background-color','#f5f3f0');
	$('.verh').css('color','black');
	
	$(this).css('background-color','#409d36');
	$(this).css('color','white');
	
	txt = new RegExp(this.innerText,'i');
	num = this.innerText.length;
	var block2 = document.getElementsByClassName('heh'),
	b = document.getElementsByClassName('keh');
	
	for(var i=0;i<block2.length;i++)
		if(txt.test(block2[i].innerText)==true)
			$(block2[i]).css('display','block');
	
	for(var i=0;i<k.length;i=i+2)
	{
		if(k[i+1]==1 && txt.test(k[i])==true)
		{
			$(b[i/2]).css('display','block');
			$(block2[i/2]).css('background-color','#007fff');
			$(block2[i/2]).css('color','white');
			$(block2[i/2]).css('border-color','#0056ff');
		}
	}
});


//нажатие на всплывающую кнопку
$(".heh").click(function() {
	
	$('.heh').css('background-color','#f6f6f6');
	$('.heh').css('color','black');
	$('.heh').css('border-color','#dadada');
	
	$(this).css('background-color','#007fff');
	$(this).css('color','white');
	$(this).css('border-color','#0056ff');
	
	var b = document.getElementsByClassName('keh');
	
	for(var i=0;i<b.length;i++)
		if(txt.test(b[i].innerText.substring(5,5+num))==true)
		{
			$(b[i]).css('display','block');
			
			for(var i=0;i<k.length;i=i+2)
			if(k[i+1]==0 && txt.test(k[i])==true)
			{
				k[i+1]=1;
			} else
			if(k[i+1]==1 && txt.test(k[i])==true)
			{	
				k[i+1]=0;
			}
		}
});

