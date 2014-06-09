var User = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});

User.reopenClass({
  FIXTURES: [
   {
     id: 1,
     name: 'Learn Ember.js',
     photo:''
   }
  ]
});

export default User;