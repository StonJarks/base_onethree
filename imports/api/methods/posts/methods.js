import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Posts } from '../../collections/posts.js';

const POST_ID_ONLY = new SimpleSchema({
	postId: { type: String }
}).validator();


export const insert = new ValidatedMethod({
	name: 'posts.insert',
	validate: new SimpleSchema({
		title: { type: String },
		content: { type: String }
	}).validator(),
	run(post) {
		return Posts.insert(post)
	},
});


export const update = new ValidatedMethod({
	name: 'posts.update',
	validate: new SimpleSchema({
		title: { type: String },
		content: { type: String }
	}).validator(),
	run( { postId, newTitle, newContent }) {
		Posts.update(postId, {
			$set: { title: newTitle, content: newContent }
		});
	}
});

export const remove = new ValidatedMethod({
	name: 'posts.remove',
	validate: POST_ID_ONLY,
	run( { postId } ) {
		Posts.remove( postId );
	}
});