//TODO there is an issue with logged in / not logged in users!

import { Meteor } from 'meteor/meteor';
import { chai, expect } from 'meteor/practicalmeteor:chai';
import { Template } from 'meteor/templating';
import { _ } from 'meteor/underscore';
import { $ } from 'meteor/jquery';

import './dashboard.js';

import { withRenderedTemplate } from '../../test-helpers.js';

describe( 'Dashboard', () => {
	beforeEach( () => {
		Template.registerHelper( '_', key => key );
	});

	afterEach( () => {
		Template.deregisterHelper( '_' );
	});

	it('renders correctly with simple data', () => {
		let args = { title: 'new Title', content: 'new Content' };

		//const post = insert._execute( methodInvocation, args );
		const post = Meteor.call('posts.insert', args);

		withRenderedTemplate('dashboard', post, el => {
			expect( $( el ).find('.post-item').length).to.equal( 1 );
		});
	});
});
