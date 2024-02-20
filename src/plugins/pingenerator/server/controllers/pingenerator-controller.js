"use strict";

// const {createCoreController}  = require("@strapi/strapi").factories;

// const pluginId = require("../utils/pluginId.js");
console.log("allo ici le settings-controller !!!!!!!");

module.exports = {
  // module.exports = createCoreController('plugin::pingenerator.config', {
  async index(ctx) {
    console.log("************* ROUTES INDEX !!!! ***************");
    ctx.body = "Hey c'est moi l'index du PINGENERATOR !!!!";
    console.log("ctx.body => ", ctx.body);
  },
  async getConfig(ctx) {
    //  async config()  {
    console.log("************* ROUTES GETCONFIG *************");
    ctx.body = "Hey c'est moi le getConfig du PINGENERATOR !!!!";
    console.log("ctx.body => ", ctx.body);
    
    // const uid = "plugin::pingenerator.settingsController";
    // const imgConfigured = ["imageToPinOnUrl"];

    // return strapi.plugin(pluginId).service("handleConfig").getConfig();

    // const {imageToPinOnUrl}= await strapi.entityService.findOne('plugin::pingenerator.settings', 1);
    // console.log("imageToPinOnUrl  => ", imageToPinOnUrl);
    // return imageToPinOnUrl;

    // const imgToGet = await strapi.entityService.findOne(
    //   "plugin::pingenerator.config", 1
    // );
    // console.log(
    //   "entityService !!!! => ",
    //   await strapi.entityService.findOne(
    //     "plugin::pingenerator.settingsController",
    //     1
    //   )
    // );
    // return {
    //   // ...
    // };
  },
  async useSettingsConfig() {
    console.log("************* ROUTES USECONFIG ************* ");
  },
  async setConfig(ctx) {
    console.log("************* ROUTES SETCONFIG!!!! ************* ");
    ctx.body = "Hey c'est moi le setConfig du PINGENERATOR !!!!";
    console.log("ctx.body => ", ctx.body);
    // return strapi
    //   .plugin('pingenerator')
    //   .service("handleConfig")
    //   .setConfig(ctx.request.body);
  },
};
