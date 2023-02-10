import { useState } from "react";
import { Link } from "react-router-dom";
import { ITodo } from "../../../interfaces/ITodo";

const Item: React.FC<ITodo> = ({ completed, title }) => {
  //Use onChange to mark your to-dos as done.
  return (
   
    <li className="py-2  bg-white p-4 border-b">
      <div className={`flex align-middle flex-row justify-between`}>
        <p className={` text-lg text-black hover:text-green-500`}>{title}</p>
        <div className="p-2">
          <input type="checkbox" value="true"  />
        </div>
      </div>
    </li>
    
  );
};

export default Item;
