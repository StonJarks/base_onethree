//TODO this is not tested if working! pushed anyway

import { Mongo } from 'meteor/mongo';
import { Factory } from 'meteor/factory';
import { chai, expect } from 'meteor/practicalmeteor:chai';
import { Template } from 'meteor/templating';
import { _ } from 'meteor/underscore';
import { $ } from 'meteor/jquery';

import '../dashboard.js';

import { withRenderedTemplate } from '../../test-helpers.js';

describe( 'Dashboard', () => {
	beforeEach( () => {
		Template.registerHelper( '_', key => key );
	});

	afterEach( () => {
		Template.deregisterHelper( '_' );
	});

	it('renders correctly with simple data', () => {
		const post = Factory.build( 'post' );

		withRenderedTemplate('dashboard', post, el => {
			expect( $( el ).find('.post-item').length).to.equal( 1 );
		});
	});
});
