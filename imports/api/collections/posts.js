import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Posts = new Mongo.Collection( 'posts' );

Posts.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Posts.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

let PostsSchema = new SimpleSchema({
  'title': {
    type: String,
    label: 'The title of this post.'
  },
  'content': {
    type: String,
    label: 'The content of this post.'
  }
});

Posts.attachSchema( PostsSchema );