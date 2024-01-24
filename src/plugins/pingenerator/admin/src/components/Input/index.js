import { React, useState, useRef, useEffect, useContext } from "react";
import { CoordsContext } from "../../context/pinsCoords";
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


const Input = ({children}) => {
  let inputRef = useRef([]);

  


  const handleChange = (e) => {
    console.log("handlechange !!!!!!!");
    // onChange({
    //   target: { name, type: attribute.type, value: e.currentTarget.value },
    // });
  };

  // const [date, setDate] = useState();


  const [isVisible, setIsVisible] = useState(false);
  const [inputData, setInputData] = useState([]);

  const handleRegisterData = (dataCoords) => {
    console.log("dataCoords => ", dataCoords);
    setInputData(dataCoords);
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
      <label>
        Coordonnées de l'épingle
        <input
          ref={inputRef}
          // name={name}
          // disabled={disabled}
          // value="cliquer sur la carte"
          // required={required}
          onChange={handleChange}
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
                <CoordsContext.Provider value="toto">
                  <Button
                    onClick={() => {
                      setIsVisible((prev) => !prev);
                      // handleRegisterData();
                      console.log("CoordsContext => ", CoordsContext);
                    }}
                  >
                    Enregistrer
                  </Button>
                </CoordsContext.Provider>
              </>
            }
          />
        </ModalLayout>
      )}
    </>
  );
};
export default Input;
