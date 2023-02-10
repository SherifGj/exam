import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IAlbum } from "../../interfaces/IAlbum";
import AlbumTittle from "./AlbumTittle";

interface AlbumProps {
  
}
 
const Album: React.FC<AlbumProps> = () => {
  const id = useParams().id
  const [albums, setAlbums] = useState<IAlbum[]>([] as IAlbum[]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/albums?userId=${id}`)
      .then((res) => res.json())
      .then((data) => setAlbums(data));
  }, []);
  
  return ( 
    <div className="user-albums">
      <ul>
          {albums.map((el) => (
            <AlbumTittle {...el} />
          ))}
        </ul>
    </div>
   );
}
 
export default Album;