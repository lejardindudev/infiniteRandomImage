//## HOOKS ##########
// import { useState } from 'react';
// import { useEffect } from 'react';

//## UTILS  ###########
import classManager from "../../utils/classManager";

// ## ASSETS - RESSOURCES #############
import "./ImageList.css";

//## COMPONENTS  ###########
import ImageItem from "../ImageItem";

// ########################################
export default function ImageList({ parentClass, imageList }) {
  const dynamicClass = classManager([parentClass, "ImageList"]);

  return (
    <div className={dynamicClass}>
      <h3>Liste d'Images</h3>
      {imageList.map((image) => {
        return <ImageItem img={image} parentClass="ImageList" key={image.id} />;
      })}
    </div>
  );
}
