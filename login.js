jQuery(document).ready(function(){

	$("#ddlCitizenship option[value='FR']").attr('selected','selected');
	$('#emailAddress')[0].value = "email@domain.com"
	$('#password')[0].value = "password"; 
	$('#chkPrivacy').prop('checked', true);
	$("#bttn_save").trigger('click');



});
