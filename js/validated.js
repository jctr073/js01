function isValid() {
	return false;
}

$('input').change( function () {
	alert('change event has executed');

	if (!isValid()) {
		$(this).closest('div.form-group').addClass('has-error');
	} else {
		$(this).closest('div.form-group').removeClass('has-error');

	}
});
