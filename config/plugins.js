module.exports = {
  // ...
  //   'image-pinner': {
  //     enabled: true,
  //     resolve: './src/plugins/image-pinner'
  //   },
  //   'mf-v-one': {
  //     enabled: true,
  //     resolve: './src/plugins/mf-v-one'
  //   },
  //     'todo-test': {
  //     enabled: true,
  //     resolve: './src/plugins/todo-test'
  //   },
  // imagepin: {
  //   enabled: true,
  //   resolve: "./src/plugins/imagepin",
  // },
  // imagepingenerator: {
  //   enabled: true,
  //   resolve: "./src/plugins/imagepingenerator",
  // },
  pingenerator: {
    enabled: true,
    resolve: "./src/plugins/pingenerator",
  },
  upload: {
    config: {
      providerOptions: {
        localServer: {
          maxage: 300000,
        },
      },
    },
  },
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
};