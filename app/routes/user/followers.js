export default Ember.Route.extend({

	model:function(){
		return this.store.find("user", {showFollowers: this.modelFor('user').get("id")});
	}

});