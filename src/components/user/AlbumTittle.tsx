import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { IAlbum } from "../../interfaces/IAlbum";

 
const AlbumTittle: React.FC<IAlbum> = ({title,id}) => {

    
    return ( 
            <li className="py-2  border-b">
            <div className={`flex align-middle flex-row justify-between`}>
                <p className={` text-lg text-black`}>{title}</p>
                <NavLink to={`photos/${id}`}><button>See more...</button></NavLink>
            </div>
            </li>
     );
}
 
export default AlbumTittle;