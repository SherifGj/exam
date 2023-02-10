import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IAlbum } from "../../interfaces/IAlbum";

const Album = () => {
  const [albums, setAlbums] = useState<IAlbum[]>([] as IAlbum[]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/albums`)
      .then((res) => res.json())
      .then((data) => setAlbums(data));
  }, []);
  return <div>
    <h1>Albums</h1>
    <div className="h-[50vh] w-auto overflow-hidden overflow-y-auto">
      {albums.map((el) => (
      <Link to={`photos/${el.id}`} className="hover:text-blue-700">
      <div className="flex w-full h-12 items-center hover:h-14 p-2 font-bold bg-white border border-gray-300 mb-2">{el.title}
        <p className="ml-auto font-light">See more</p>
          </div>
          </Link>
    ))}
      </div>
    
  </div>;
};
 
export default Album;
