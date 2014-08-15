export default Ember.Route.extend({

	model:function(){
		return this.store.find("user", {showFollowing: this.modelFor('user').get("id")});
	}

});