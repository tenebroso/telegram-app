export default Ember.Component.extend({
	click: function() {
		this.sendAction('delete');
		window.console.log('bubbled');
	},
	isAuthor: function(){
		return this.get('user') === this.get('session').user;
	}.property('user')
});