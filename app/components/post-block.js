export default Ember.Component.extend({
	delete: function() {
		this.sendAction('delete');
		window.console.log('bubbled2');
	}
});