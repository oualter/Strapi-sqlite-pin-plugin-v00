import { useRef } from "react";
export default function CoordsBox(props) {
  // console.log('CoordsBox props => ', props)
  const { xpos, ypos } = props;
  const ref = useRef(null);
  // if (ref.current) {
  //   console.log("ref => ", ref.current.value);
  // }

  const handleCopy = () => {
    // some action
    console.log("copy function");
  };

  return (
    <>
      {/* <div id="selected-pin-coords-box">
        Epingle : X : {xpos} - Y : {ypos}
        &nbsp; <button onClick={handleCopy}>Copier</button>
      </div> */}

      <label>
        position de l'épingle :
        <input
          ref={ref}
          // name={name}
          // disabled={disabled}
          value={xpos + ", " + ypos}
          // required={required}
          // onChange={handleChange}
        />
      </label>
    </>
  );
}
