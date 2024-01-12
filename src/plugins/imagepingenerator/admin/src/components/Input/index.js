import React from "react";
import { Button } from "@strapi/design-system";
// import getTrad from "../../utils/getTrad";

export default function Input() {
  return (
    <Button onClick={() => console.log("click")}>
      {/* // formatMessage() est une fonction qui vient récupérer la clé de
      traduction et afficher le texte correpsondant
      {formatMessage({
        id: getTrad("plugin.field.generator.button"),
      })} */}
      Test
    </Button>
  );
}
