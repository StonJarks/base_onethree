import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Bert } from 'meteor/themeteorchef:bert';

import './authenticated-navigation.js';
import './public-navigation.js';

import './header.html';

Template.header.helpers({
  brandLink() {
    let login = FlowRouter.path( 'login' ),
        index = FlowRouter.path( 'index' );
    return !Meteor.loggingIn() && !Meteor.userId() ? login : index;
  }
});

Template.header.events({
  'click .logout' ( event ) {
    event.preventDefault();

    Meteor.logout( ( error ) => {
      if ( error ) {
        Bert.alert( error.reason, 'warning' );
      } else {
        Bert.alert( 'Logged out!', 'success' );
      }
    });
  }
});
