import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../../../client/layouts/default.js';
import '../../../client/templates/authenticated/dashboard.js';
import '../../../client/templates/authenticated/index.js';

const authenticatedRoutes = FlowRouter.group( { name: 'authenticated' } );

authenticatedRoutes.route( '/', {
  name: 'index',
  action() {
    BlazeLayout.render( 'default', { yield: 'index' } );
  }
});

authenticatedRoutes.route( '/dashboard', {
  name: 'dashboard',
  action() {
    BlazeLayout.render( 'default', { yield: 'dashboard' } );
  }
});
