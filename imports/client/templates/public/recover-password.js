import { Template } from 'meteor/templating';
import recoverPassword from '../../modules/recover-password.js';

import './recover-password.html';

Template.recoverPassword.onRendered( () => {
  recoverPassword( { form: '#recover-password', template: Template.instance() } );
});

Template.recoverPassword.events({
  'submit form': ( event ) => event.preventDefault()
});