var Post = DS.Model.extend({
  date: DS.attr('date'),
  content: DS.attr('string'),
  user: DS.belongsTo('User')
});

Post.reopenClass({
	FIXTURES: [
	{
		id: 1,
		date: 'Tue, 10 Jun 2014 12:00:00 GMT',
		content: 'Great teams constantly learn how to lorem ipsum lorem ipsum.',
		user: 'jonbukiewicz',
	},
	{
		id: 2,
		date: 'Mon, 09 June 2014 12:00:00 GMT',
		content: 'Hello world!',
		user: 'johndoe'
	}
  ]
});

export default Post;