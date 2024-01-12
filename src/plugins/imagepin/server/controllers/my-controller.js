'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('imagepin')
      .service('myService')
      .getWelcomeMessage();
  },
});
