export default Ember.Route.extend({
	model: function (params) {
		return this.store.find('user', params.user_id);
	},
	renderTemplate: function() {
		this.render('user');
		this.render('topbar', {
			into: 'user',
			outlet: 'topbar'
		});
	}
});