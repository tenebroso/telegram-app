export default Ember.Component.extend({
	actions: {
		delete: function() {
			this.sendAction('delete', {
				post: this.get('param')
			});
			window.console.log('bubbled2');
		}
	}
});