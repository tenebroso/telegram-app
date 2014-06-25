export default Ember.Handlebars.makeBoundHelper(function() {
  if ($('.login').length()) { 
		$('body').addClass('blueBg');
	}
});