//## HOOKS ##########
// import { useState } from 'react';
// import { useEffect } from 'react';

//## UTILS  ###########
import classManager from "../../utils/classManager";
import { saveAs } from "file-saver";

// ## ASSETS - RESSOURCES #############
import "./ImageItem.css";

//## COMPONENTS  ###########

export default function ImageItem({ parentClass, img }) {
  const dynamicClass = classManager([parentClass, "ImageItem"]);
  async function downloadImage() {
    const resp = await fetch(img.download_url);
    const blob = await resp.blob();
    saveAs(blob, img.author + "_" + img.id);
  }

  return (
    <>
      <div className={dynamicClass}>
        <a className="ImageItem-link" href={img.url} target="_blank">
          <img
            className="ImageItem-img"
            src={`https://picsum.photos/id/${img.id}/400/300`}
            alt={`Author : ${img.author}`}
          />
        </a>
        <footer className="ImageItem-infos">
          <h4 className="ImageItem-infos-author">{img.author}</h4>
          <p className="ImageItem-infos-size">
            Original size : {img.width} x {img.height}
          </p>
          <button onClick={downloadImage}>Download</button>
        </footer>
      </div>
    </>
  );
}
