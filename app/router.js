var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {

	this.resource('public', { path: '/' }, function () { 
		this.route('login');
		this.route('signup', { path: '/'});
		this.route('password');
		this.route('passwordconfirm', { path: '/password/confirm'});
	});

	this.route('posts');

	this.resource('user', {path: '/users/:user_id'}, function() {
		this.route('following');
		this.route('followers');
	});
});

export default Router;
