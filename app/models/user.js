var User = DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  photo: DS.attr('string'),
  password: DS.attr('string'),
  following: DS.attr('string')
});

User.reopenClass({
  FIXTURES: [
   {
     id: 'jonbukiewicz',
     name: 'Jon Bukiewicz',
     email: 'jonathan@tenebroso.net',
     photo:'/assets/jonB.jpg',
     password: '1234',
     following: 'johndoe',
     followers: 'johndoe'
   },
   {
     id: 'johndoe',
     name: 'John Doe',
     email: 'johndoe@gmail.com',
     photo:'/assets/johnD.jpg',
     password: '1234',
     following: 'jonbukiewicz',
     followers: 'johndoe'
   }
  ]
});

export default User;