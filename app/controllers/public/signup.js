export default Ember.ObjectController.extend({

	name: '',
	username: '',
	email: '',
	password: '',
	signupError: false,


	actions: {
	    
	    signup: function() {

			var name = this.get('name');
			var	username = this.get('username');
			var	email = this.get('email');
			var	password = this.get('password');
			var	store = this.store;
			var	controller = this;

			var	newUser = store.createRecord('user', {
					id: username,
					name: name,
					email: email,
					password: password
				});

			var userCreated = function() {
				controller.get('session').set('user',newUser);
				controller.transitionToRoute('posts');
			};

			var userFail = function() {
				controller.setProperties({
					signupError:true
				});
			};


				newUser.save().then(function(user){

					userCreated();
				     
				}, function(error) {

					userFail();

				});

		}

	}

});