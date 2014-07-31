export default Ember.Route.extend({
	beforeModel: function() {
		var route = this;
		var promise = this.store.find('user', {isAuthenticated: true});
		promise.then(function(users) {
			if (users && users.get('length') > 0) {
				var user = users.get('firstObject');
				route.set('session.user', user);
			}
			return user;
		});
	},
	actions: {
		deletePost: function(post) {

			//debugger;

				post.deleteRecord();
				post.get('isDeleted');
				post.save().then(function(){
					window.console.log('deleted post!');
					//alert("test!");
				});
		},
		logout: function(){

			$.get('/api/logout').done(function(){
				window.console.log('logged out');
			}).fail(function(){
				window.console.log('error');
			}).always(function(){
				window.console.log('complete');
			});

			this.transitionTo('public');
		}
	}
});