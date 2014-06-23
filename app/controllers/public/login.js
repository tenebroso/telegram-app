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


				promise.then(function(user){

					if (user.get('password') === password) {
						controller.transitionToRoute('dashboard');
					} else {
						controller.setProperties({
							loginError:true
						});
						// Can I pull the error function below into this space in order to not repeat the same setProperty function?
					}
				     
				}, function(error) {
					controller.setProperties({
						loginError:true
					});
				});

    	}

  	}
  
});