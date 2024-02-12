import * as utils from '@strapi/utils';
// import { Model } from '@strapi/utils/dist/types';

const { sanitize } = utils;
// const { contentAPI } = sanitize;
/*
const schema = {
  // kind: 'singleType',
//   collectionName: 'google_maps_configs',
  collectionName: 'pin_generator_configs',
  info: {
    singularName: 'config',
    pluralName: 'configs',
    // @ts-ignore
    displayName: 'Pin Generator',
  },
  options: {
    populateCreatorFields: false,
    // @ts-ignore
    draftAndPublish: false,
  },
  pluginOptions: {
    'content-manager': {
      visible: false,
    },
    'content-type-builder': {
      visible: false,
    },
  },
  attributes: {
    imageToPinOnUrl: {
      type: 'string',
      default: '',
      // required: true,
      // configurable: false,
    },
  },
};
*/
// export default schema;

// export function sanitizeConfigInput(data, ctx) {
// //   return contentAPI.input(data, schema, ctx.state.auth);
//   return "Hello Config PinGenerator"
// }