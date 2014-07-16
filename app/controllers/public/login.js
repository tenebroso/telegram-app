export default Ember.ObjectController.extend({

	username: '',
	password: '',
	loginError: false,

	actions: {

		verifyLogin: function() {

			var username = this.get('username');
			var password = this.get('password');
			var promise = this.store.find('user', {
				username: username,
				password: password,
				operation: 'login'
			});
			var controller = this;


			var loginFail = function() {
					controller.setProperties({
						loginError:true
					});
				};

				promise.then(function(user){

					/*if (user.get('password') === password) {
						controller.get('session').set('user',user);
						controller.transitionToRoute('posts');
					} else {
						loginFail();
					}*/

					var loggedInUser = user.get('firstObject');
					window.console.log(loggedInUser);

					controller.get('session').set('user',loggedInUser);
					controller.transitionToRoute('posts');
				     
				}, function() {
					loginFail();
				});

		}

	}

});