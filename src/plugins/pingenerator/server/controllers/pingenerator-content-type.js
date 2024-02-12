"use strict";

module.exports = () => ({
  async index(ctx) {
    console.log("controller content-type OK !!!")
    ctx.body = "You are in the my-plugin-content-type controller!";
  },
});
