"use strict";

const myController = require('./my-controller');
// const configController = require("./config-controller");
// const pingeneratorController = require("./pingenerator-controller");
// const pingeneratorContentType = require('./pingenerator-content-type')
const pingen = require('./pingen')

module.exports = {
  pingen,
  myController,
  // // pingeneratorContentType,
  // configController,
  // pingeneratorController,
};
