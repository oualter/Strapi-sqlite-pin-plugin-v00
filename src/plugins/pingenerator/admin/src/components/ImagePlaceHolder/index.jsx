import { useState, useEffect } from "react";
import mapImage from "./../../assets/img/croquis-reunion.png";
import CoordsBox from "./../CoordBox";

// export default function ImagePlaceHolder() {
const ImagePlaceHolder = ({ handleRegisterData }) => {
  const [localCoords, setLocalCoords] = useState({ x: 0, y: 0 });

  // dimensions de l'épingle
  const pinWidth = 10;
  const pinHeight = 10;

  // fonction pour accéder à l'objet js getBoundingClientRect permettant de récupérer les coordonnées
  let boundingClientRect = (event) => {
    return event.target.getBoundingClientRect();
  };

  const handleCalcXYCoords = (event) => {
    const rect = boundingClientRect(event);
    let imageWith = rect.width;
    let imageHeight = rect.height;
    // set x and y coordinates in percentage
    const newLocalCoords = {
      x: (((event.clientX - rect.left) / imageWith) * 100).toFixed(2),
      y: (((event.clientY - rect.top) / imageHeight) * 100).toFixed(2),
    };
    setLocalCoords([newLocalCoords]);
  };
  // objet épingle
  const [pins, setPins] = useState([]);

  // objet coordonnées de l'épingle choisie
  const [XYPosBox, setXYPosBox] = useState([]);

  const handlePinOnMap = (event) => {
    const rect = boundingClientRect(event);
    let imageWith = rect.width;
    let imageHeight = rect.height;
    let xpos = (
      ((event.clientX - rect.left - pinWidth / 2) / imageWith) *
      100
    ).toFixed(2);
    let ypos = (
      ((event.clientY - rect.top - pinHeight / 2) / imageHeight) *
      100
    ).toFixed(2);
    // add a new pin
    const newPin = { x: xpos, y: ypos };
    // setPins([...pins, newPin]);  // ok for a set of pins
    setPins([newPin]);
    // pinsCoords = newPin;
    if (xpos) {
      handleRegisterData([{ x: xpos, y: ypos }]);
    } else {
      console.log("no data");
    }
  };
  return (
    <>
      <div className="image-placeholder">
        {localCoords[0] && (
          <p className="display-pos mouse-pos">
            Position souris : {localCoords[0].x}, {localCoords[0].y}
          </p>
        )}

        {pins[0] && (
          <p className="display-pos pin-pos">
            Position épingle : {pins[0].x + ", " + pins[0].y}
          </p>
        )}
        <img
          src={mapImage}
          width="1000"
          height="auto"
          className="tomap"
          alt="basemap"
          onMouseMove={handleCalcXYCoords}
          onClick={handlePinOnMap}
        />

        {pins.map((elt, index) => (
          <div
            key={index}
            className="pin"
            style={{
              width: pinWidth + "px",
              height: pinHeight + "px",
              left: elt.x + "%",
              top: elt.y + "%",
            }}
          ></div>
        ))}
      </div>
    </>
  );
};
export default ImagePlaceHolder;
