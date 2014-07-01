export default Ember.ArrayController.extend({

	postTextArea: '',

	actions: {

	    createPost: function() {

			var post = this.store.createRecord('post', {
				content: this.get('postTextArea'),
				user: this.get('session.user'),
				date: new Date()
				//http://livsey.org/blog/2013/02/20/tick-tock/
			});
			
			post.save().then(function(){
				self.set('content', '');
				window.console.log('postTextArea');
			}); 

    	},

    	//http://emberjs.com/guides/models/creating-and-deleting-records/
    	deletePost: function() {

			store.deleteRecord(post);

    	},

		charactersLeft: function() {
			var remainChars = this.get('postTextArea').length();
			var counter = 140 - remainChars;
			return counter;
			window.console.log('test!');
		}.property('postTextArea'),
  	}
  
});