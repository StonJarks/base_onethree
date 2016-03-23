import { Meteor } from 'meteor/meteor';
import { chai, expect } from 'meteor/practicalmeteor:chai';
import { resetDatabase } from 'meteor/xolvio:cleaner';
import { _ } from 'meteor/underscore';

import { Posts } from '../../collections/posts.js';
import { insert, update, remove } from './methods.js'

if ( Meteor.isServer ) {
	//require('../../../server/publiations/posts.js');
	describe( 'Posts', () => {
		beforeEach( () => {
			resetDatabase();
		});

		describe( 'methods', () => {
			it( 'inserts a new Post', () => {
				let methodInvocation 	= {},
					args 				= { title: 'new Title', content: 'new Content' };

				insert._execute( methodInvocation, args );

				expect(Posts.find().count()).to.equal( 1 );
			});

			it( 'updates a Post', () => {
				let postId = Posts.insert( {title: 'post 1', content: 'content' } );

				let methodInvocation 	= {},
					args 				= { postId, newTitle: 'post 2', newContent: 'content' };

				update._execute( methodInvocation, args );

				expect( Posts.findOne( postId ).title ).to.equal( 'post 2' );
			});

			it( 'removes a Post', () => {
				let postId = Posts.insert( {title: 'post 1', content: 'content' } );

				let methodInvocation 	= {},
					args 				= { postId };

				remove._execute( {}, args );

				expect( Posts.find().count()).to.equal( 0 );
			});
		});
	});
};