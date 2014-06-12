export default Ember.ObjectController.extend({

	isLoggedIn: false,

	actions: {
		verifyLogin: function() {
			this.store.find('user',username);

			//get the username that was entered in the form, 
			//search for the user object that has that username 
			//check to see if the passwords match.
		}
	}

});