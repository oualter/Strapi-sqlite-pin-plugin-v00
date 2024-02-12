"use strict";

module.exports = {
  getConfig: async () => {
    console.log("GETCONFIG")
    // const uid = "plugin::pingenerator.settingsController";
    // const imgConfigured = ["imageToPinOnUrl"];

    const {imageToPinOnUrl}= await strapi.entityService.findOne('plugin::pingenerator.settings', 1);
    console.log("imageToPinOnUrl  => ", imageToPinOnUrl);
    return imageToPinOnUrl;

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
  useSettingsConfig: async () => {
    console.log("USECONFIG");
  },
  setConfig: async () => {
    console.log("setConfig!!!!");
  },
};
