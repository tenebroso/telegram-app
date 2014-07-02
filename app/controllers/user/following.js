export default Ember.ArrayController.extend({

	followUser: true,

	actions: {

		unFollowUser: function() {

				followUser: false;
				window.console.log('unfollowed!');

		}
	}

});