import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../../../client/layouts/default.js';
import '../../../client/templates/globals/not-found.js';

FlowRouter.notFound = {
  action() {
    BlazeLayout.render( 'default', { yield: 'notFound' } );
  }
};