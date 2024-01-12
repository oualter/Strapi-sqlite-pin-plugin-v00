'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('image-pin-generator')
      .service('myService')
      .getWelcomeMessage();
  },
});
