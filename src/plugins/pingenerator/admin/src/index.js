import { prefixPluginTranslations } from "@strapi/helper-plugin";
import pluginId from "./pluginId";
import PluginIcon from "./components/PluginIcon";
import { getTrad } from "./utils/getTrad";

export default {
  register(app) {
    app.customFields.register({
      name: "pingenerator",
      pluginId: "pingenerator",
      type: "string",
      intlLabel: {
        id: `${pluginId}.plugin.field.generator.field`,
        defaultMessage: "pingenerator",
      },
      intlDescription: {
        id: `${pluginId}.plugin.field.generator.description`,
        defaultMessage: "Pin a point on the image map",
      },
      icon: PluginIcon,
      components: {
        Input: async () => import("./components/Input"), // Component qui va être appelé à l'affichage de la page d'édition de contenu
      },
      // onChange: async(event)=>{console.log('change the ustom field HERE')}
      options: {
        base: [
          /*
            Declare settings to be added to the "Base settings" section
            of the field in the Content-Type Builder
          */
          {
            sectionTitle: {
              // Add a "Format" settings section
              id: "pingenerator.pingenerator.section.format",
              defaultMessage: "Format",
            },
            items: [
              // Add settings items to the section
              {
                /*
                  Add a "Color format" dropdown
                  to choose between 2 different format options
                  for the color value: hexadecimal or RGBA
                */
                intlLabel: {
                  id: "pingenerator.pingenerator.format.label",
                  defaultMessage: "pingenerator format",
                },
                name: "options.format",
                type: "text",
                value: "x,y", // option selected by default
                options: [
                  // List all available "Color format" options
                  // {
                  //   key: "hex",
                  //   defaultValue: "hex",
                  //   value: "hex",
                  //   metadatas: {
                  //     intlLabel: {
                  //       id: "color-picker.color.format.hex",
                  //       defaultMessage: "Hexadecimal",
                  //     },
                  //   },
                  // },
                  // {
                  //   key: "rgba",
                  //   value: "rgba",
                  //   metadatas: {
                  //     intlLabel: {
                  //       id: "color-picker.color.format.rgba",
                  //       defaultMessage: "RGBA",
                  //     },
                  //   },
                  // },
                ],
              },
            ],
          },
        ],
      },
    });

    // app.createSettingSection(
    //   {
    //     id: pluginId,
    //     intlLabel: {
    //       id: `${pluginId}.plugin.name`,
    //       defaultMessage: "Pin Generator",
    //     },
    //   },
    //   [
    //     {
    //       intlLabel: {
    //         id: `${pluginId}.plugin.page.configuration`,
    //         defaultMessage: "Configuration",
    //       },
    //       id: "settings.configuration",
    //       to: `/settings/${pluginId}/configuration`,
    //       Component: async () => {
    //         return import("./pages/Settings/Configuration");
    //       },
    //     },
    //   ]
    // );

    app.addMenuLink({
      to: `/plugins/${pluginId}`,
      icon: PluginIcon,
      intlLabel: {
        id: `${pluginId}.plugin.name`,
        defaultMessage: "Pin-gen-narrator",
      },
      Component: async () => {
        return import("./pages/Settings/Configuration");
      },
      permissions: [], // array of permissions (object), allow a user to access a plugin depending on its permissions
    });

  },
  bootstrap(app) {
      // execute some bootstrap code
      // app.injectContentManagerComponent('editView', 'right-links', { name: 'my-compo', Component: () => 'my-compo' })
      console.log("app.customFields => ", app.customFields);
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
