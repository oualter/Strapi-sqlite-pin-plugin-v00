'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    console.log('controller en marche !')
    ctx.body = strapi
      .plugin('pingenerator')
      .service('myService')
      .getWelcomeMessage();
  },
});
