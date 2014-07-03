export default Ember.ArrayController.extend({

	postTextArea: '',
	postFail: false,
	//http://emberjs.com/api/classes/Ember.SortableMixin.html#property_sortProperties
	sortProperties: ['date'],
	//http://emberjs.com/api/classes/Ember.SortableMixin.html#property_sortAscending
	sortAscending: false,

	actions: {

		createPost: function() {

			var postContent = this.get('postTextArea');
			var controller = this;

			var postFail = function() {
				controller.setProperties({
					postError:true
				});
			};

			if(postContent) {
				var post = this.store.createRecord('post', {
					content: this.get('postTextArea'),
					user: this.get('session.user'),
					date: new Date()
					//http://livsey.org/blog/2013/02/20/tick-tock/
				});
				post.save().then(function(){
					controller.set('postTextArea','');
					window.console.log('created post!');
				});
			} else {
				postFail();
			}

		},

		//http://emberjs.com/guides/models/creating-and-deleting-records/
		deletePost: function(post) {

				post.deleteRecord();
				post.get('isDeleted');
				post.save().then(function(){
					window.console.log('deleted post!');
				});
		}
	},

	charactersLeft: function() {
		var remainChars = this.get('postTextArea').length;
		var counter = 140 - remainChars;
		return counter;
	}.property('postTextArea')

});