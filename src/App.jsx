//## HOOKS ##########
// import { useEffect } from 'react';
import { useState, useEffect } from "react";
import { useScrollPosition } from "./hooks/userScrollPosition";
import apiUrlManager from "./utils/apiUrlManager";

//## UTILS  ###########
import axios from "axios";
// ## ASSETS - RESSOURCES #############
import "./App.css";

//## COMPONENTS  ###########
import ImageList from "./components/ImageList";

function App() {
  // TODO: que faire de ceci??
  // const apiUrl = apiUrlManager(1, 10);
  // console.log("url : ", apiUrl);

  // States
  const [imageList, setImageList] = useState([]);
  const { isBottom } = useScrollPosition();
  const [pageToFetch, setPageToFetch] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchImageByPage(pageToFetch);
  }, [pageToFetch]);

  useEffect(() => {
    if (isBottom) {
      incrementPage();
    }
  }, [isBottom]);

  async function fetchImageByPage(page) {
    setIsLoading(true);
    const { data } = await axios.get(apiUrlManager(page, 5));
    setImageList([...imageList, ...data]);
    setIsLoading(false);
  }

  const incrementPage = () => {
    setPageToFetch((p) => p + 1);
  };

  // const DATA = [];
  // {
  //   // [
  //   //   {
  //   //     id: "0",
  //   //     author: "Alejandro Escamilla",
  //   //     width: 5000,
  //   //     height: 3333,
  //   //     url: "https://unsplash.com/photos/yC-Yzbqy7PY",
  //   //     download_url: "https://picsum.photos/id/0/5000/3333",
  //   //   },
  //   //   {
  //   //     id: "1",
  //   //     author: "Alejandro Escamilla",
  //   //     width: 5000,
  //   //     height: 3333,
  //   //     url: "https://unsplash.com/photos/LNRyGwIJr5c",
  //   //     download_url: "https://picsum.photos/id/1/5000/3333",
  //   //   },
  //   //   {
  //   //     id: "2",
  //   //     author: "Alejandro Escamilla",
  //   //     width: 5000,
  //   //     height: 3333,
  //   //     url: "https://unsplash.com/photos/N7XodRrbzS0",
  //   //     download_url: "https://picsum.photos/id/2/5000/3333",
  //   //   },
  //   //   {
  //   //     id: "3",
  //   //     author: "Alejandro Escamilla",
  //   //     width: 5000,
  //   //     height: 3333,
  //   //     url: "https://unsplash.com/photos/Dl6jeyfihLk",
  //   //     download_url: "https://picsum.photos/id/3/5000/3333",
  //   //   },
  //   //   {
  //   //     id: "4",
  //   //     author: "Alejandro Escamilla",
  //   //     width: 5000,
  //   //     height: 3333,
  //   //     url: "https://unsplash.com/photos/y83Je1OC6Wc",
  //   //     download_url: "https://picsum.photos/id/4/5000/3333",
  //   //   },
  //   //   {
  //   //     id: "5",
  //   //     author: "Alejandro Escamilla",
  //   //     width: 5000,
  //   //     height: 3334,
  //   //     url: "https://unsplash.com/photos/LF8gK8-HGSg",
  //   //     download_url: "https://picsum.photos/id/5/5000/3334",
  //   //   },
  //   //   {
  //   //     id: "6",
  //   //     author: "Alejandro Escamilla",
  //   //     width: 5000,
  //   //     height: 3333,
  //   //     url: "https://unsplash.com/photos/tAKXap853rY",
  //   //     download_url: "https://picsum.photos/id/6/5000/3333",
  //   //   },
  //   //   {
  //   //     id: "7",
  //   //     author: "Alejandro Escamilla",
  //   //     width: 4728,
  //   //     height: 3168,
  //   //     url: "https://unsplash.com/photos/BbQLHCpVUqA",
  //   //     download_url: "https://picsum.photos/id/7/4728/3168",
  //   //   },
  //   //   {
  //   //     id: "8",
  //   //     author: "Alejandro Escamilla",
  //   //     width: 5000,
  //   //     height: 3333,
  //   //     url: "https://unsplash.com/photos/xII7efH1G6o",
  //   //     download_url: "https://picsum.photos/id/8/5000/3333",
  //   //   },
  //   //   {
  //   //     id: "9",
  //   //     author: "Alejandro Escamilla",
  //   //     width: 5000,
  //   //     height: 3269,
  //   //     url: "https://unsplash.com/photos/ABDTiLqDhJA",
  //   //     download_url: "https://picsum.photos/id/9/5000/3269",
  //   //   },
  //   // ];
  // }

  // console.log(isBottom);

  return (
    <>
      {isLoading && <div className="Loader">Chargement ...</div>}
      <header className="Header">
        <h1>Infinite Random Images</h1>
        <h2>Built with lorem picsum API</h2>
      </header>
      <main>
        <ImageList imageList={imageList} />
      </main>
    </>
  );
}

export default App;
