import { useEffect, useState } from "react";
import { useParams, Outlet, Link } from "react-router-dom";
import { UserProvider } from "../../context/UserContext";
import { IAlbum } from "../../interfaces/IAlbum";
import { IUser } from "../../interfaces/IUser";
import AlbumItem from "./AlbumItem";
import UserNav from "./UserNav";

const Album: React.FC = () => {
  const[albums, setAlbums]= useState<IAlbum []>([] as IAlbum[]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums`)
      .then((res) => res.json())
      .then((data) => setAlbums(data));
  }, []);
  
  return (
    <div>
    {albums.map((element) => (
      <AlbumItem key={element.id} {...element} />
    
  ))}
  </div>
  );
};

export default Album;
