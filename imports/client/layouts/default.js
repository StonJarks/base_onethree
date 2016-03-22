import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Bert } from 'meteor/themeteorchef:bert';

import './default.html';
import '../templates/globals/loading.js';
import '../templates/globals/header.js';


const handleRedirect = ( routes, redirect ) => {
	let currentRoute = FlowRouter.getRouteName();
	if ( routes.indexOf( currentRoute ) > -1 ) {
		FlowRouter.go( redirect );
		return true;
	}
};

Template.default.helpers({
	loggingIn() {
		return Meteor.loggingIn();
	},
	authenticated() {
		return !Meteor.loggingIn() && Meteor.user();
	},
	redirectAuthenticated() {
	 	return handleRedirect([
			'login',
			'signup',
			'recover-password',
			'reset-password'
		], '/' );
	},
	redirectPublic() {
		return handleRedirect([
			'index',
			'dashboard'
		], '/login' );
	}
});
