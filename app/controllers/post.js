export default Ember.ObjectController.extend({
	isAuthor: function(){
		return this.get('user') === this.get('session').user;
	}.property('user')
});