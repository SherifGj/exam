import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IAlbum } from "../../interfaces/IAlbum";
import { IPhotos } from "../../interfaces/IPhoto";
import Item from "./todos/Item";

const Album = () => {
  
  const [albums, setAlbums] = useState<IAlbum[]>([] as IAlbum[]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/albums`)
      .then((res) => res.json())
      .then((data) => setAlbums(data));
  }, []);
  return (
    //make it look same as Homepage.png
    <div className="flex flex-col justify-center gap-5 p-5 ">
      {albums.map((el) => (
        <Item completed={false} key={el.id} {...el} />
      ))}
    </div>
  );
    };
    
 export default Album;