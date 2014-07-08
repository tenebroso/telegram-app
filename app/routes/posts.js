export default Ember.Route.extend({
	redirectToLogin: function() {
		if (!session.isAuthenticated) {
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