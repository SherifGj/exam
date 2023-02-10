import { useState } from "react";
import { Link } from "react-router-dom";
import { IAlbum } from "../../interfaces/IAlbum";


const AlbumItem: React.FC<IAlbum> = ({title }) => {
  //Use onChange to mark your to-dos as done.
  return (
   
    <li className="py-2  bg-white p-4 border-b list-none">
      <div className={`flex align-middle flex-row justify-between`}>
        <p className={` text-lg text-black hover:text-sky-500`}>{title}</p>
        <p className={` text-lg text-black`}>See more</p>
        
      </div>
    </li>
    
  );
};

export default AlbumItem;
