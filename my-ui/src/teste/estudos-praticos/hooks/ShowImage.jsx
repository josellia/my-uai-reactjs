import React, { useState } from "react";

const image =
  "https://cdn.pixabay.com/photo/2017/02/01/10/12/characters-2029374_960_720.png";
const ShowImage = (props) => {
  const [showImage, setShowImage] = useState(false);

  const handleShowImage = () => {
    setShowImage(!showImage);
  };
  return (
    <>
      <button onClick={handleShowImage}>
        {showImage ? "Esconder imagem" : "Mostrar imagem"}
      </button>
      {showImage && <img style={{ width: "10rem" }} src={image} alt="" />}
    </>
  );
};

export default ShowImage;
