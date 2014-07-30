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


			var controller = this;

			$.get('/api/logout').done(function(){
				window.console.log('logged out');
				controller.transitionToRoute('public');
			}).fail(function(){
				window.console.log('error');
			}).always(function(){
				window.console.log('complete');
			});
		}
	}
});