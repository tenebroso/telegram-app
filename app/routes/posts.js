export default Ember.Route.extend({
	beforeModel: function() {
		var loggedIn = this.get('session.isAuthenticated');
		if (!loggedIn) {
			this.transitionTo('public');
			window.console.log('not logged in');
		}
	},
	model: function() {
		return this.store.find('post');
	},
	//http://emberjs.com/guides/routing/rendering-a-template/
	renderTemplate: function() {
		this.render('posts');
		this.render('topbar', {
			into: 'posts',
			outlet: 'topbar'
		});
	}
});