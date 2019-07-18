import React from "react";

const Title = ({titleName}) => {
    console.log(titleName)
  return (
    <div>
      <h1>{titleName}</h1>
    </div>
  );
};

export default Title;