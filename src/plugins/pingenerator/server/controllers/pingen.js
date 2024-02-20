"use strict";
module.exports = ({ strapi }) => ({
  async index(ctx) {
    console.log("************* ROUTES INDEX !!!! ***************");
  },
  async getConfig(ctx) {
    let imageToPinOnUrlDB = await strapi.entityService.findOne(
      "plugin::pingenerator.pingenerator-setting",
      1,
      {
        fields: ["imageToPinOnUrl"],
      }
    );
    if (imageToPinOnUrlDB) {
      return imageToPinOnUrlDB;
    }
  },
  async setConfig(ctx) {
    let { imageToPinOnUrl } = ctx.request.body.data;
    if (!imageToPinOnUrl) return;

    let imageToPinOnUrlDB = await strapi.entityService.findOne(
      "plugin::pingenerator.pingenerator-setting",
      1,
      {
        fields: ["imageToPinOnUrl"],
      }
    );

    if (!imageToPinOnUrlDB && imageToPinOnUrl) {
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
      imageToPinOnUrlDB = await strapi.entityService.update(
        "plugin::pingenerator.pingenerator-setting", 1,
        {
          data: {
            imageToPinOnUrl,
          },
        }
      );
    }
  },
});