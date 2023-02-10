import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IAlbum } from "../../interfaces/IAlbum";
import { IUser } from "../../interfaces/IUser";


export default function Albums() {
  const { id } = useParams();
 
  
  const [album, setAlbum] = useState<IAlbum[]>([] as IAlbum[]);
  useEffect(() => {
    const getAllData = async () => {
      const userRes = await fetch(`${process.env.REACT_APP_API}/albums?userId=${id}`);
      const Albums = await userRes.json();
      setAlbum(Albums);
    };
    getAllData();
  }, []);


  return (
    <div>
      <div>Albums</div>
      <div>
        <div>
          {album.map((el: IAlbum) => (
            <div className=" bg-slate-200 flex" > <p className=" ">{el.title}</p>  <span className="text-sky-400   ">SeeMore</span> </div>
          ))}
        </div>
      </div>
      

    </div>

    
    
  )
  

}