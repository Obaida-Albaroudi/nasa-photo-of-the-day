import React from "react";

const Img = ({media}) => {
  return (
    <div>
      <img src={media} alt="Cool Nasa Picture or Video"/>
    </div>
  );
};

export default Img;