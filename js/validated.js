var rules = {
	userName: 
}
function validateInput(newValue, checkExpr) {
	return false;
}

$(document).ready(function(){
	$('input.form-control').change( function () {

		// $(this).closest('div.form-group').addClass('has-error');
		//console.log(validateInput());


		if (!validateInput()) {
			$(this).closest('div.form-group').addClass('has-error');
		} else {
			$(this).closest('div.form-group').removeClass('has-error');
		}

	});

});