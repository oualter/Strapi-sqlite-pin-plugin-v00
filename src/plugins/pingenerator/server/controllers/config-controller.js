// import { Strapi } from "@strapi/strapi";
// import { sanitizeConfigInput } from "./../content-types/config";
// import { Config } from "../../types";

// export default ({ strapi }) => ({
module.exports = ({ strapi }) => ({
  async index(ctx) {
    console.log(
      "heyyyyyyyyy TEST => ",
      strapi.plugin("pingenerator").service("configPingenerator")
    );
    console.log('ctx => ', ctx)
    const config = await strapi // @ts-ignore Strapi typings are incomplete
      .plugin("pingenerator")
      // .service("config")
      .service("configPingenerator")
      .retrieve();

    ctx.body = {
      data: config,
    };
    console.log("ctx body => ", ctx.body);
  },

  async update(ctx) {
    // const data = await sanitizeConfigInput(ctx.request.body, ctx);
    const data = await (ctx.request.body, ctx);

    const config = await strapi // @ts-ignore Strapi typings are incomplete
      .plugin("pingenerator")
      .service("config")
      .update(data);

    ctx.body = {
      data: config,
    };
  },
});
