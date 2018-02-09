'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'learning-glimmer',
    environment,
    contentSecurityPolicy: {
      'connect-src': "'self' https://reddit.com",
    },
  };

  return ENV;
};
