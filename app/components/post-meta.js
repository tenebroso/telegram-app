export default Ember.Component.extend({
	click: function() {
	    this.sendAction();
	  },
	isAuthor: function(){
		return this.get('user') === this.get('session').user;
	}.property('user')
});