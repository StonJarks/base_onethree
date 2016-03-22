import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Posts } from '../../../api/collections/posts.js';
import { insert } from '../../../api/methods/posts/methods.js';

import './dashboard.html';

Template.dashboard.onCreated( function dashboardOnCreated() {
	Meteor.subscribe( 'posts' );
});

Template.dashboard.helpers({
	posts() {
		return Posts.find( {} );
	}
});

