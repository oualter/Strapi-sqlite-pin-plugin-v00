/**
 * This file was automatically generated by Strapi.
 * Any modifications made will be discarded.
 */
import strapiCloud from "@strapi/plugin-cloud/strapi-admin";
import colorPicker from "@strapi/plugin-color-picker/strapi-admin";
import i18N from "@strapi/plugin-i18n/strapi-admin";
import usersPermissions from "@strapi/plugin-users-permissions/strapi-admin";
import pingenerator from "../../src/plugins/pingenerator/strapi-admin";
import { renderAdmin } from "@strapi/strapi/admin";

renderAdmin(document.getElementById("strapi"), {
  plugins: {
    "strapi-cloud": strapiCloud,
    "color-picker": colorPicker,
    i18n: i18N,
    "users-permissions": usersPermissions,
    pingenerator: pingenerator,
  },
});
