import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { IAlbum } from "../../interfaces/IAlbum";


export const Album: React.FC<IAlbum> = () => {
  const [albums, setAlbums] = useState<IAlbum[]>([] as IAlbum[]);
  const {user} = useContext(UserContext);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/albums?userId=${user.id}`)
      .then((res) => res.json())
      .then((data) => setAlbums(data));
  }, []);
  return (
    <div>
      {albums.map(el => 
        <div className="bg-white rounded-md p-5 hover:scale-105 hover:bg-blue-400 mb-4 flex justify-between">
          <p>{el.title}</p>
          <NavLink
            to={`photos/${el.id}`}
            end
            className="text-blue-500"
          >
            See more
          </NavLink>
        </div>
      )}
    </div>
    
  )
};