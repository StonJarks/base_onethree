import { Template } from 'meteor/templating';
import login from '../../modules/login.js';

import './login.html';

Template.login.onRendered( () => {
  login( { form: '#login', template: Template.instance() } );
});

Template.login.events({
  'submit form': ( event ) => event.preventDefault()
});