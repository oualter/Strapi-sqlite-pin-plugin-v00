module.exports =
  //{
  // {
  //   method: "GET",
  //   path: "/settings",
  //   handler: "settingsController.getConfig",
  //   config: { policies: [], auth: false },
  // },
  // {
  //   method: "POST",
  //   path: "/settings",
  //   handler: "settingsController.setConfig",
  //   config: {
  //     policies: [],
  //     // policies: ["admin::hasPermissions"],
  //     auth: false
  //   },
  // },
  // pingenerator: {
  //   type: "admin",
  // pingenerator: {
  // {
  //   routes: [

  // [
  //   {
  //     method: "GET",
  //     // path: "/admin/plugins/pingenerator",
  //     path: "/test",
  //     handler: "pingen.index",
  //     config: {
  //       policies: [],
  //       auth: false,
  //     },
  //   },
  // ];

  {
    "pass-data": {
      type: "admin",
      routes: [
        {
          method: "GET",
          path: "/pass-data",
          handler: "pingen.index",
          config: {
            policies: [],
            auth: false,
          },
        },
        {
          method: "GET",
          path: "/pass-data/get",
          handler: "pingen.getConfig",
          config: {
            policies: [],
            auth: false,
          },
        },
        {
          method: "POST",
          path: "/pass-data/post",
          handler: "pingen.setConfig",
          config: {
            policies: [],
            auth: false,
          },
        },
      ],
    },
  };

//   ],
// };
// }
// {
//   method: "POST",
//   path: "/admin/plugins/pingenerator",
//   handler: "myController.index",
//   config: {
//     auth: false,
//     policies: [],
//   },
// },
// ];
// },
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
// };
// ];
