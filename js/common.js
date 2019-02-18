$(document).ready(function(){
	$('#sidebar-btn').click(function(){
		$('#sidebar').toggleClass('visible');
	});
});

$(document).ready(function(){
	$('#butmenu').click(function(){
		$('#topmenu').toggleClass('menuup');

	});
});

$(document).ready(function(){
  $('.time').iCheck({
    checkboxClass: 'icheckbox_square-blue'    
  });
});

$(document).ready(function(){
  $('.time_two').iCheck({
    checkboxClass: 'icheckbox_square-blue_two'    
  });
});