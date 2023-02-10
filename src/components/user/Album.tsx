import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IAlbum } from '../../interfaces/IAlbum';
import { IPhotos } from '../../interfaces/IPhoto';
import Photos from './Photos';
interface AlbumProps {
  
}
 
const Album: React.FC<AlbumProps> = () => {
  // add post for only the user that is clicked on
  const { id } = useParams<{ id: string }>();
  const [albums, setAlbums] = useState<IPhotos[]>([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/albums?userId=${id}`)
      .then((res) => res.json())
      .then((data) => setAlbums(data));
  }, [id]);
  console.log(albums);



  
  return ( 
    <div className='flex gap-4 border border-gray-200 shadow-lg rounded-md bg-white p-4'>
      <ul className='gap-8'>
        {albums.map((el) => (
          <li key={el.id}>{el.title}
        <Link className='font-bold text-xl' to={`/users/${id}/albums/${el.id}/photos`}>
          See more
        </Link>
          </li>
          ))}
      </ul>
    </div>

   );
}
 
export default Album;
