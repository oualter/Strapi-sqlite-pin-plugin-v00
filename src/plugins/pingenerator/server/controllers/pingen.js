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
    let dataGet = await strapi.db
      .query("plugin::pingenerator.pingenerator-setting")
      .findOne({ select: ["imageToPinOnUrl"] });
    console.log("||||| dataGet |||| => ", dataGet);
    return ctx.request.url
  },
  async setConfig(ctx) {
    console.log("************* ROUTES SETCONFIG!!!! ************* ");
    console.log("ctx.request.body => ", ctx.request.body);
    // return ctx.request.url;
    let { imageToPinOnUrl } = ctx.request.body.data;
    console.log("{imageToPinOnUrl} => ", imageToPinOnUrl);
    let dataPost = await strapi.entityService.findOne(
      "plugin::pingenerator.pingenerator-setting",
      1,
      {
        fields: ["imageToPinOnUrl"]
      }
    );
    console.log("dataPost => ", dataPost);
    // let dataPost = await strapi.db
    //   .query("plugin::pingenerator.pingenerator-setting")
    //   .findOne({ select: ["imageToPinOnUrl"] });
      if (!dataPost) {
        console.log("create api entity service !!!")
        dataPost = await strapi.entityService.create(
          "plugin::pingenerator.pingenerator-setting",
          {
            data: {
              imageToPinOnUrl: "testUrl"
            },
          }
        );
      }
    let dataPostTemp = dataPost ? dataPost : "defaultImgUrl";
    return dataPostTemp;
    // console.log("||||| dataPost |||| => ", dataPost);
    // return strapi
    //   .plugin('pingenerator')
    //   .service("handleConfig")
    //   .setConfig(ctx.request.body);
  },
});