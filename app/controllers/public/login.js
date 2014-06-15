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
			} else{
				loginError:true;
			}
		     
		});

    }

  }
  
});