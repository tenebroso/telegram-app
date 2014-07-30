export default Ember.ObjectController.extend({
	actions: {
		logout: function(){

			var route = this;

			function transitionToHome() {
				route.transitionTo('/');
			}

			$.get('/api/logout').done(function(){
				window.console.log('logged out');
				transitionToHome();
			}).fail(function(){
				window.console.log('error');
			}).always(function(){
				window.console.log('complete');
			});
		}
	}
});