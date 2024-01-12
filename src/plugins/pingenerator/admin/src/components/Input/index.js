import { React, useState } from "react";
import {
    Typography, 
    DatePicker, 
    Box,
  Button,
  ModalLayout,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from "@strapi/design-system";
import ImagePlaceHolder from "./../ImagePlaceHolder";
// import getTrad from "../../utils/getTrad";
import "./../../assets/css/imagepin.css";


export default function Input() {

    const [date, setDate] = useState();
    const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <Button onClick={() => setIsVisible((prev) => !prev)}>
        {/* // formatMessage() est une fonction qui vient récupérer la clé de
      traduction et afficher le texte correpsondant
      {formatMessage({
        id: getTrad("plugin.field.generator.button"),
      })} */}
        Epingler sur la carte
      </Button>
      
      {isVisible && (
        <ModalLayout
          onClose={() => setIsVisible((prev) => !prev)}
          labelledBy="title"
        >
          <ModalHeader>
            <Typography
              fontWeight="bold"
              textColor="neutral800"
              as="h2"
              id="title"
            >
              Placer la microfiction sur l'image
            </Typography>
          </ModalHeader>
          <ModalBody>
            <ImagePlaceHolder />          
          </ModalBody>
          <ModalFooter
            startActions={
              <Button
                onClick={() => setIsVisible((prev) => !prev)}
                variant="tertiary"
              >
                Annuler
              </Button>
            }
            endActions={
              <>
                {/* <Button variant="secondary">Add new stuff</Button> */}
                <Button onClick={() => setIsVisible((prev) => !prev)}>
                  Enregistrer
                </Button>
              </>
            }
          />
        </ModalLayout>
      )}
    </>
  );
}
