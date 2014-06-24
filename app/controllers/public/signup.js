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
				controller = this,

				newUser = store.createRecord('user', {
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