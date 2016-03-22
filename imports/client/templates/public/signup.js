import { Template } from 'meteor/templating';
import signup from '../../modules/signup';

import './signup.html';

Template.signup.onRendered( () => {
  signup({ form: '#signup', template: Template.instance() });
});

Template.signup.events({
  'submit form': ( event ) => event.preventDefault()
});