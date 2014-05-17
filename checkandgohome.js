jQuery(document).ready(function(){
	 
	$("#form1 input:checkbox").each(function() {
	    $(this).attr('checked', 'checked'); // do your staff with each checkbox
	});
	$("#bttn_validate_next").trigger('click');
});