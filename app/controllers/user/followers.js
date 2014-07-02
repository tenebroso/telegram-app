export default Ember.ArrayController.extend({

	followedByCurrentUser: false,

	actions: {

		followUser: function() {

				followedByCurrentUser: true;
				window.console.log('followed!');

		}
	}

});