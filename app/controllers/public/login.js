export default Ember.ObjectController.extend({

	username: '',
	password: '',
	loginError: false,

	actions: {
	    
	    verifyLogin: function() {

			var username = this.get('username'),
				password = this.get('password'),
				promise = this.store.find('user', username),
				controller = this;


			var	loginFail = function() {
					controller.setProperties({
						loginError:true
					});
				};

				promise.then(function(user){

					if (user.get('password') === password) {
						controller.get('session').set('user',user);
						controller.transitionToRoute('posts');
					} else {
						loginFail();
					}
				     
				}, function(error) {
					loginFail();
				});

    	}

  	}
  
});