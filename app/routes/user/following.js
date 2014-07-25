export default Ember.Route.extend({

	model:function(user){
		return this.store.find('user', {following: user.get("id")});
	}

});