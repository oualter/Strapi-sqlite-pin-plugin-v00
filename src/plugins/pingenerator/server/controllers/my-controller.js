'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    console.log('MY controller en marche !')
    // ctx.body = strapi
    //   .plugin('pingenerator')
    //   .service('myService')
    //   .getWelcomeMessage();
  },
});
