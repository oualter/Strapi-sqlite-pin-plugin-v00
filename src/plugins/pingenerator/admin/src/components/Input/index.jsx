import { useState, useRef, forwardRef } from "react";
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
import ImagePlaceHolder from "../ImagePlaceHolder";
// import getTrad from "../../utils/getTrad";
import "./../../assets/css/imagepin.css";

const Input = ({ attribute, name, onChange, value }) => {  
  const ref = useRef({ x: 0, y: 0 });
  // const { formatMessage } = useIntl();
  const [isVisible, setIsVisible] = useState(false);
  const [pins, setPins] = useState(value ? value : []);

  const handleCoordsChange = (pins) => {
    setPins(pins);
    onChange({
      target: {
        name,
        type: attribute.type,
        value: pins,
      },
    });
  };


  const handleRegisterData = (dataCoords) => {
    setPins(dataCoords);
    ref.current.value = dataCoords[0].x + ", " + dataCoords[0].y;
    handleCoordsChange(ref.current.value);
  };

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
      {/* {inputData[0] && (
        <label>
          Coordonnées de l'épingle
          <input
            ref={ref}
            name="pincoords"
            // disabled={disabled}
            value={inputData[0].x + ", " + inputData[0].y}
            // required={required}
            onInput={(e) => {
              console.log("this => ", this);
              handleChange(e);
            }}
            onChange={()=>handleChange}
          />
        </label>
      )} */}
      <label>
        Coordonnées de l'épingle
        <input
          ref={ref}
          name="pincoords"
          // disabled={disabled}
          value={value}
          onChange={handleCoordsChange}
        />
      </label>

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
            <ImagePlaceHolder handleRegisterData={handleRegisterData} />
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
                <Button
                  onClick={() => {
                    setIsVisible((prev) => !prev);
                    // handleRegisterData();
                    // console.log("CoordsContext => ", CoordsContext);
                  }}
                >
                  Enregistrer
                </Button>
              </>
            }
          />
        </ModalLayout>
      )}
    </>
  );
};
export default Input;
