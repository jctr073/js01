function isValid() {
	return false;
}

$('input').change( function () {
	alert('change');

	if (!isValid()) {
		$(this).closest('div.form-group').addClass('has-error');
	} else {
		$(this).closest('div.form-group').removeClass('has-error');

	}
});


// $(document).ready(function(){
// 	$('input.form-control').change( function () {

// 		// $(this).closest('div.form-group').addClass('has-error');
// 		//console.log(validateInput());


// 		if (!isValid()) {
// 			$(this).closest('div.form-group').addClass('has-error');
// 		} else {
// 			$(this).closest('div.form-group').removeClass('has-error');
// 		}

// 	});

// });