export default Ember.Route.extend({
	renderTemplate: function() {
		this.render('user');
		this.render('topbar', {
			into: 'user',
			outlet: 'topbar'
		});
	}
});