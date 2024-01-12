export default function CoordsBox(props) {
  // console.log('CoordsBox props => ', props)
  const { xpos, ypos } = props;

  const handleCopy = () => {
    // some action
    console.log("copy function");
  };

  return (
    <div id="selected-pin-coords-box">
      Epingle : X : {xpos} - Y : {ypos}
      &nbsp; <button onClick={handleCopy}>Copier</button>
    </div>
  );
}
