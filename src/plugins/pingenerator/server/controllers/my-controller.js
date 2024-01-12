'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('pingenerator')
      .service('myService')
      .getWelcomeMessage();
  },
});
