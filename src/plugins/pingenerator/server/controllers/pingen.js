"use strict";
module.exports = ({ strapi }) => ({
  async index(ctx) {
    console.log("************* ROUTES INDEX !!!! ***************");
    ctx.body = "Hey c'est moi l'index du PINGENERATOR !!!!";
    console.log("ctx.body => ", ctx.body);
    console.log("ctx => ", ctx);
  },
  async getConfig(ctx) {
    //  async config()  {
    console.log("************* ROUTES GETCONFIG *************");
    // console.log("ctx => ", ctx);
    let imageToPinOnUrlDB = await strapi.entityService.findOne(
      "plugin::pingenerator.pingenerator-setting",
      1,
      {
        fields: ["imageToPinOnUrl"],
      }
    );
    if (imageToPinOnUrlDB) {
      console.log("||||| imageToPinOnUrlDB |||| => ", imageToPinOnUrlDB);
      return imageToPinOnUrlDB;
    }
  },
  async setConfig(ctx) {
    console.log("************* ROUTES SETCONFIG!!!! ************* ");
    console.log("ctx.request.body => ", ctx.request.body);
    // return ctx.request.url;
    let { imageToPinOnUrl } = ctx.request.body.data;
    console.log("{imageToPinOnUrl} => ", imageToPinOnUrl);
    if (!imageToPinOnUrl) return;

    let imageToPinOnUrlDB = await strapi.entityService.findOne(
      "plugin::pingenerator.pingenerator-setting",
      1,
      {
        fields: ["imageToPinOnUrl"],
      }
    );
    console.log("imageToPinOnUrlDB => ", imageToPinOnUrlDB);
    // let dataPost = await strapi.db
    //   .query("plugin::pingenerator.pingenerator-setting")
    //   .findOne({ select: ["imageToPinOnUrl"] });
    if (!imageToPinOnUrlDB && imageToPinOnUrl) {
      console.log("create api entity service !!!");
      imageToPinOnUrlDB = await strapi.entityService.create(
        "plugin::pingenerator.pingenerator-setting",
        {
          data: {
            imageToPinOnUrl,
          },
        }
      );
    }
    if (imageToPinOnUrlDB && imageToPinOnUrl) {
      console.log("update api entity service !!!");
      imageToPinOnUrlDB = await strapi.entityService.update(
        "plugin::pingenerator.pingenerator-setting", 1,
        {
          data: {
            imageToPinOnUrl,
          },
        }
      );
    }

    // let imageToPinOnUrlTemp = imageToPinOnUrl
    //   ? imageToPinOnUrl
    //   : "https://monpetit20e.com/wp-content/uploads/2022/02/placedelareunion.jpg";
    // return imageToPinOnUrlTemp;
    // console.log("||||| dataPost |||| => ", dataPost);
    // return strapi
    //   .plugin('pingenerator')
    //   .service("handleConfig")
    //   .setConfig(ctx.request.body);
  },
});
