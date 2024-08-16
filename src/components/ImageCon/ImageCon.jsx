import "./ImageCon.css";
// @ts-ignore
import PerfumeImg from "../../assets/image/Perfume.jpg";
import PerfumeImgPhone from "../../assets/image/image-product-mobile.jpg";
function ImageCon() {
  return (
    <div id="ImageDiv">
      <img id="MyImgPhone" src={PerfumeImgPhone}></img>
      <img id="MyImg" src={PerfumeImg}></img>
    </div>
  );
}

export default ImageCon;
