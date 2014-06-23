export default Ember.ObjectController.extend({

	name: '',
	username: '',
	email: '',
	password: '',
	signupError: false,

	actions: {
	    
	    signup: function() {

	    	var name = this.get('name'),
	    		username = this.get('username'),
	    		email = this.get('email'),
				password = this.get('password'),
				store = this.store,

				newUser = store.createRecord('user', {
					id: username,
					name: name,
					email: email,
					password: password
				});
				
				newUser.set('name',name);
				newUser.set('id',username);


			}

    	}
  
});