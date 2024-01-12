import { prefixPluginTranslations } from '@strapi/helper-plugin';
import pluginId from './pluginId';
import PluginIcon from './components/PluginIcon';
import { getTrad } from "./utils/getTrad";


export default {
  register(app) {
   
    
    app.customFields.register({
      name: "imagepingenerator",
      pluginId: "imagepingenerator",
      type: "string",
      intlLabel: {
        id: `${pluginId}.plugin.field.generator.field`,
        defaultMessage: "imagepingenerator",
      },
      intlDescription: {
        id: `${pluginId}.plugin.field.generator.description`,
        defaultMessage: "Pin a point on the image map",
      },
      icon: PluginIcon,
      components: {
        Input: async () => import("./components/Input"), // Component qui va être appelé à l'affichage de la page d'édition de contenu
      },
    });

  },

  async registerTrads({ locales }) {
    const importedTrads = await Promise.all(
      locales.map((locale) => {
        return import(`./translations/${locale}.json`)
          .then(({ default: data }) => {
            return {
              data: prefixPluginTranslations(data, pluginId),
              locale,
            };
          })
          .catch(() => {
            return {
              data: {},
              locale,
            };
          });
      })
    );

    return Promise.resolve(importedTrads);
  },
};


