import { useState } from "react";
import mapImage from "./../../assets/img/croquis-reunion.png";
import CoordsBox from "./../CoordBox";

export default function ImagePlaceHolder() {
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
    setLocalCoords({
      x: (((event.clientX - rect.left) / imageWith) * 100).toFixed(2),
      y: (((event.clientY - rect.top) / imageHeight) * 100).toFixed(2),
    });
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
  };
  return (
    <>
      <p id="display-pos-box">
        Position : ({localCoords.x}, {localCoords.y})
      </p>
      {pins[0] && <CoordsBox xpos={pins[0].x} ypos={pins[0].y} />}
      <div className="image-placeholder">
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
}
