$(function() {
	$.ajax({
		url: '/api/articles',
		success: function(data) {
			console.log(data);
		}
	})
});