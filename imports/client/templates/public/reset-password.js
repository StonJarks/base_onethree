import { Template } from 'meteor/templating';
import resetPassword from '../../modules/reset-password.js';

import './reset-password.html';

Template.resetPassword.onRendered( () => {
  resetPassword( { form: '#reset-password', template: Template.instance() } );
});

Template.resetPassword.events({
  'submit form': ( event ) => event.preventDefault()
});