export default Ember.ArrayController.extend({

	postTextArea: '',

	actions: {

	    createPost: function() {

    	},

		charactersLeft: function() {
			var remainChars = this.get('postTextArea').length();
			var counter = 140 - remainChars;
			return counter;
			window.console.log('test!');
		}.property('postTextArea'),
  	}
  
});