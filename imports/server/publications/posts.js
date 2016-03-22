import { Meteor } from 'meteor/meteor';
import { Posts } from '../../api/collections/posts.js';

Meteor.publish( 'posts', function postsPublication() {

  return Posts.find({});
});