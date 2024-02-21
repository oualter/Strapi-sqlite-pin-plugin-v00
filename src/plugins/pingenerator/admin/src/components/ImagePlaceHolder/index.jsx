import MapImage from "./../MapImage";
// import CoordsBox from "./../CoordBox";

// export default function ImagePlaceHolder() {
const ImagePlaceHolder = ({ handleRegisterData }) => {
  return (
    <>
      <div className="image-placeholder">
        <MapImage
          handleRegisterData={handleRegisterData}
        />
      </div>
    </>
  );
};
export default ImagePlaceHolder;
