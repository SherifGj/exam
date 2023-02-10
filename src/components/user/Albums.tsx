import { useContext, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { IAlbum } from "../../interfaces/IAlbum";
import Album from "./Album";

interface AlbumProps {
  
}
 
const Albums: React.FC<AlbumProps> = () => {

  const {user} = useContext(UserContext);
  const userId = user.id;
  const [albums, setAlbums] = useState<IAlbum[]>([] as IAlbum[]);

  useEffect(()=>{
    const getUserAlbums = async() => {
      const res = await fetch("https://jsonplaceholder.typicode.com/albums");
      const json = await res.json();
      const userAlbums = json.filter((album:IAlbum) => 
       album.userId === userId)
       setAlbums(userAlbums);
    }
    getUserAlbums();
  },[userId])
  return ( 
    <div className="rounded-md">
      {albums.map((album) => <Album key={album.id} album={album}/>)}
    </div>
   );
}
 
export default Albums;