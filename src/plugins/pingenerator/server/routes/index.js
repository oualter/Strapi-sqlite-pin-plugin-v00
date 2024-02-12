module.exports = [
  {
    method: "GET",
    path: "/settings",
    handler: "settingsController.getConfig",
    config: { policies: [], auth: false },
  },
  {
    method: "POST",
    path: "/settings",
    handler: "settingsController.setConfig",
    config: { policies: [], auth: false },
  },
  // {
  //   method: "GET",
  //   path: "/",
  //   handler: "myController.index",
  //   config: {
  //     policies: [],
  //   },
  // },
  // {
  //   method: "GET",
  //   path: "/config",
  //   handler: "configController.index",
  //   config: {
  //     policies: ["admin::isAuthenticatedAdmin"],
  //   },
  // },
  // {
  //   method: "POST",
  //   path: "/config",
  //   handler: "configController.update",
  //   config: {
  //     policies: [
  //       "admin::isAuthenticatedAdmin",
  //       {
  //         name: "admin::hasPermissions",
  //         config: {
  //           actions: ["plugin::pingenerator.config"],
  //         },
  //       },
  //     ],
  //   },
  // },
  // {
  //   method: "PUT",
  //   path: "/config",
  //   handler: "config.update",
  //   config: {
  //     policies: [
  //       "admin::isAuthenticatedAdmin",
  //       {
  //         name: "admin::hasPermissions",
  //         config: {
  //           actions: ["plugin::google-maps.config"],
  //         },
  //       },
  //     ],
  //   },
  // },

  // {
  // "pass-data": {
  // type: "admin",
  // routes: [
  //   {
  // method: "GET",
  // path: "/pass-data",
  // handler: "pingeneratorContentType.index",
  // config: {
  //   policies: [],
  //   auth: false,
  // },
  //   },
  // ],
  // },
  // },
];
