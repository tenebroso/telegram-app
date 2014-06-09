var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
	this.resource('telegram', { path: '/' }, function () { 
		this.route('login');
		this.route('resetPassword');
		this.route('resetPasswordConfirm');
	});
	this.route('home');
	this.resource('user', {path: '/user/:user_id'}, function () { 
		this.route('posts');
		this.route('following');
		this.route('followers');
	});
});

export default Router;
