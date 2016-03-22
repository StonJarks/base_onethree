import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Posts } from '../../api/collections/posts.js';
import { faker } from 'meteor/digilord:faker';

// Seed User Collection
let administrators = [
  {
    name: { first: 'Admin', last: 'McAdmin' },
    email: 'admin@admin.com',
    password: 'password'
  }
];

let seedUsers = () => {
  let fakeUserCount = 5,
      usersExist    = _checkIfAccountsExist( administrators.length + fakeUserCount );

  if ( !usersExist ) {
    _createUsers( administrators );
    _createUsers( _generateFakeUsers( fakeUserCount ) );
  }
};

let _checkIfAccountsExist = ( count ) => {
  let userCount = Meteor.users.find().count();
  return userCount < count ? false : true;
};

let _createUsers = ( users ) => {
  for ( let i = 0; i < users.length; i++ ) {
    let user       = users[ i ],
        userExists = _checkIfUserExists( user.email );

    if ( !userExists ) {
      _createUser( user );
    }
  }
};

let _checkIfUserExists = ( email ) => {
  return Meteor.users.findOne( { 'emails.address': email } );
};

let _createUser = ( user ) => {
  Accounts.createUser({
    email: user.email,
    password: user.password,
    profile: {
      name: user.name
    }
  });
};

let _generateFakeUsers = ( count ) => {
  let users = [];

  for ( let i = 0; i < count; i++ ) {
    users.push({
      name: { first: faker.name.firstName(), last: faker.name.lastName() },
      email: faker.internet.email(),
      password: 'password'
    });
  }

  return users;
};

// Seed Post Collection

let seedPosts = () => {
  let postsCount = 5,
      postsExist = _checkIfPostsExist(postsCount);

  if (!postsExist) {
    _createPosts( _generateFakePosts( postsCount ) )
  }
};

let _checkIfPostsExist = ( count ) => {
  return Posts.find().count() > count;
};

let _generateFakePosts = ( count ) => {
  let posts = [];

  for (let i = 0; i < count; i++ ) {
    posts.push({
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraph()
    });
  }

  return posts;
};

let _createPosts = ( posts ) => {
  for (i = 0; i < posts.length; i++ ) {
    let post = posts[ i ];
    _createPost( post );
  }
};

let _createPost = ( post ) => {
  Posts.insert( post );
};

Meteor.startup( () => {
  seedUsers();
  seedPosts();
});