import { useState } from "react";
import { ITodo } from "../../../interfaces/ITodo";

const Item: React.FC<ITodo> = ({ completed, title }) => {

  const [done, setDone] = useState("");
  const handleChange = () => {
    if(done === ""){
        setDone("text-green-500 line-through")
    } else {
      setDone("");
    }
  }
  //Use onChange to mark your to-dos as done.
  return (
    <li className="py-2  border-b">
      <div className={`flex align-middle flex-row justify-between `}>
        <p className={` text-lg text-black ${done}`}>{title}</p>
        <div className="p-2">
          <input type="checkbox" value="true" onChange={() => handleChange()
          
          }/>
        </div>
      </div>
    </li>
  );
};

export default Item;
