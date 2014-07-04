export default Ember.Component.extend({

	isAuthor: function(){
		return this.get('user') === this.get('post.user');
	}.property('user', 'post.user'),

	actions: {
		delete: function() {
			this.sendAction('delete', this.get('param'));
			window.console.log('bubbled2');
		}
	}
});