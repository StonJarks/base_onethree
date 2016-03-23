import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Posts } from '../../../api/collections/posts.js';
import { Bert } from 'meteor/themeteorchef:bert';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { insert } from '../../../api/methods/posts/methods.js';
import { $ } from 'meteor/jquery';

import './dashboard.html';

Template.dashboard.onCreated( function dashboardOnCreated() {
	Meteor.subscribe( 'posts' );
});

Template.dashboard.helpers({
	posts() {
		return Posts.find( {} );
	}
});

Template.dashboard.events({
	'submit form': function( event ) {
		event.preventDefault();

		let template = Template.instance();

		let title 	= template.find( "[name='title']" ).value,
			content = template.find( "[name='content']" ).value;
		
		Meteor.call('posts.insert', {title, content }, function( error, response ) {
			if ( error ) {
				Bert.alert( error.reason, 'danger' );
			} else {
				Bert.alert ('Post created', 'success' );
				FlowRouter.go('dashboard');
				template.find( "[name='title']" ).value = "";
				template.find( "[name='content']" ).value = "";
			}
		});
	}
});