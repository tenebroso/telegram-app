export default {
	name: 'session',

  initialize: function(container, app){
    /* Here we define the class for the session object. */
    var Session = Ember.Object.extend({
      user: null,

      isAuthenticated: function(){
        //window.console.log('success!');
        return this.get('user') != null;
      }.property('user')
    });
    
    /* http://emberjs.com/api/classes/Ember.Application.html#method_register */
    app.register('session:main', Session);
    
    /* http://emberjs.com/api/classes/Ember.Application.html#method_inject */
    app.inject('route', 'session', 'session:main');
    app.inject('controller', 'session', 'session:main');
    app.inject('component', 'session', 'session:main');
  }
};