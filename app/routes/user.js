export default Ember.Route.extend({
  model: function () {
  	return this.store.find('user');
  },
  renderTemplate: function() {
		this.render('user');
		this.render('topbar', {
			into: 'user',
			outlet: 'topbar'
		});
	}
});