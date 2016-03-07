$(function() {
	$.ajax({
		url: '/api/articles',
		success: function(data) {

			var source   = $("#entry-template").html();
			var template = Handlebars.compile(source);
			var html = template({articles: data});
			$("#entry-template").after(html);

		}
	})
});