const Strapi = require("@strapi/strapi");
// const Config = require('../../types');
// import {Config}  from '../../types';

// console.log('Config => ', Config);

const uid = "plugin::pingenerator.config";
const fields = ["imageToPinOnUrl"];

module.exports = ({ strapi }) => ({
  async retrieve() {
    console.log("plugin retrieve function !!!!!");

    // await function retrieve() {
    let config;

    // console.log("strapi.entityService.findOne => ", await strapi.entityService);
    console.log("uid  => ", uid);
    console.log("fields  => ", fields);
    // return "tadaaaaa !"
    // Find existing config
    // config = (await strapi.entityService.findMany(
    config = (await strapi.entityService.findMany(
        // uid as never,
        uid,
        {
        fields,
        }
      )
    // ) as unknown /*as Config*/;
    );
    console.log('await strapi.entityService.findOne => ', config)
     
    // /* Create config if not found 
    if (!config) {
      // config = (await strapi.entityService.create(uid as never, {
      config = (await strapi.entityService.create(uid, {
        fields,
        data: {},
      // })) as Config;
      }));
    }

    return config;
    
  },

  async update(data) {
    console.log("update data => ", data);
    // /* Retrieve config
    let config = await this.retrieve();
    console.log("config data => ", config);

    // /* Update config
    // config = await strapi.entityService.update(uid as never, config.id, {
    //   ...data,
    //   fields,
    // });

    // return config;
    return updatedConfig
  },
});
