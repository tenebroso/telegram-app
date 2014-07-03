export default Ember.Component.extend({
	click: function() {
		this.sendAction('delete');
		//window.console.log('clicked');
	}
});