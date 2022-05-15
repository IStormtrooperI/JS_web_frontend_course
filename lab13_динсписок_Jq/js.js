
var gg = new RegExp("[А-ЯЁ]{1}[а-яё]{2,50}\ {1}\8[0-9]{10}\ {1}[a-zA-Z]{1,12}\@[a-z]{1,8}(\.){1}[a-z]{2}");
var gg2 = /[a-zA-Z]{1,12}\@[a-z]{1,8}(\.){1}[a-z]{2}/;
var k = 0;
var j = "";


//удаление контакта
$("table").on('click','img',function() {
	$(this).parents('tr').remove();
});

//важный контакт
$("table").on('click','input.vert',function() {
	$(this).parent().css('color','red');
	$(this).parent().css('text-decoration','underline');
	$(this).remove();
});

//редактирование контакта(даблклик)
$("table").on('dblclick','span.vert', function() {
	
	if( k == 1)
	return;
	k = 1;
	
	var s = $('<input>', {
		'type': 'text',
	'class': 'newc wg'});
	
	s.val($(this).text());
	j = $(this).text();
	$(this).text("");
	
	
	$(this).siblings().css('display','none');
	$(this).after(s);
	$(this).css('display','none');
});


//редактирование(enter)
$("table").on('keypress','input.wg',function(e) {
	if(e.which == 13) 
	{
		var c = 0,
		ds = $(this).val();
		$('span').each(function(i, item) {
			if(ds==$(item).text())
			{
				alert("Контакт уже существует");
				c = 1;
				return;
			}
		});
		
		if(c==1) 
		{
			$(this).siblings().css('display','inline');
			$(this).siblings("span").text(j);
			$(this).remove();
			k = 0;
			return;
		}
		
		$(this).siblings().css('display','inline');
		$(this).siblings('span').text($(this).val());
		$(this).remove();
		
		k = 0;
	}
});


//новый контакт(enter)
$("table").on('keypress','input#heh',function(e) {
	if(e.which == 13) 
	{
		if(gg.test($(this).val()) == false || gg2.test($(this).val()) == false) {
			alert("Не правильный формат данных");
		} else
		{
			var c = 0,
			ds = $(this).val();
			$('span').each(function(i, item) {
				if(ds==$(item).text())
				{
					alert("Контакт уже существует");
					c = 1;
					return;
				}
			});
			if(c == 1)
			return;
			
			var s = $('<tr>'),
			s1 = $('<td>', {
			'class': 'tball'}),
			s2 = $('<input>', {
				'type': 'checkbox',
			'class': 'vert'});
			
			s1.append(s2);
			
			s2 = $('<span>', {
			'class': 'vert'});
			s2.text($(this).val());
			s1.append(s2);
			
			s2 = $('<img>', {
			'src': 'images/udoli.jpg'});
			s1.append(s2);
			
			s.append(s1);
			
			$(this).val("");
			$('table').append(s);
		}
	}
});