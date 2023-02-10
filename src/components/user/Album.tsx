import { Link } from "react-router-dom";
import { IAlbum } from "../../interfaces/IAlbum";

interface AlbumProps {
  album: IAlbum;
}
 
const Album: React.FC<AlbumProps> = ({album}) => {
  return ( 
    <div className="w-full bg-white p-2 group flex justify-between shadow-sm hover:bg-blue-100 hover:scale-105 transition-all">
      <div className="group-hover:text-blue-500 ">{album.title}</div>
      <Link to={`./photos/${album.id}`} className="group-hover:text-blue-500">See more</Link>
    </div>
   );
}
 
export default Album;