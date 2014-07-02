export default Ember.ObjectController.extend({
	//http://emberjs.com/guides/getting-started/marking-a-model-as-complete-incomplete/
	//http://stackoverflow.com/questions/23867677/how-to-display-posts-delete-button-for-only-posts-author-in-ember-js
	isAuthor: function(){
		return this.get('user') === this.get('session').user;
	}.property('user')
});