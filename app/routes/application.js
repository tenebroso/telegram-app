export default Ember.Route.extend({
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
				window.console.log('logout complete');
				//controller.transitionToRoute('auth.login');
			}).fail(function(){
				window.console.log('logout failed');
			}).always(function(){
				window.console.log('logout always');
			});
		}
	}
});