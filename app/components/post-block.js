export default Ember.Component.extend({
	actions: {
		delete: function() {
			this.sendAction();
			window.console.log('bubbled2');
		}
	}
});