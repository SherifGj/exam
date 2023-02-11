import {useState, useEffect} from 'react';
import { IAlbum } from '../../interfaces/IAlbum';

export const Album: React.FC  = () => {
  
  const [albums, setAlbums] = useState<IAlbum[]>([] as IAlbum[]);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(res => res.json())
      .then(data => setAlbums(data));
  }, []); 
  
  return <div>
    <h1>Albums</h1>
    <div>
      {albums.map((element) => (
        <div>
            <p>{element.title}</p>
        </div>
      ))}
    </div>
  </div>;
};


