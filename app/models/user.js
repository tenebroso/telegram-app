// http://emberjs.com/api/data/#method_attr

var User = DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  photo: DS.attr('string'),
  password: DS.attr('string'),
  //following: DS.hasMany('user'),
  //followers: DS.hasMany('user'),
  posts: DS.hasMany('post')
});

User.reopenClass({
  FIXTURES: [
   {
     id: 'jonbukiewicz',
     name: 'Jon Bukiewicz',
     email: 'jonathan@tenebroso.net',
     photo:'assets/avatars/JonB.jpg',
     password: '1234',
     following: ['johndoe','sally'],
     followers: ['johndoe','sally'],
     posts:['1','4']
   },
   {
     id: 'johndoe',
     name: 'John Doe',
     email: 'johndoetelegramtest@gmail.com',
     photo:'assets/avatars/LouisCK.jpg',
     password: '1234',
     following: ['jonbukiewicz','sally'],
     followers: ['jonbukiewicz','sally'],
     posts:['2']
   },
   {
     id: 'sally',
     name: 'Sally Jessy Raphael',
     email: 'sallytelegramtest@gmail.com',
     photo:'assets/avatars/Sally.jpg',
     password: '1234',
     following: ['johndoe','jonbukiewicz'],
     followers: ['johndoe','jonbukiewicz'],
     post:['3']
   }
  ]
});

export default User;