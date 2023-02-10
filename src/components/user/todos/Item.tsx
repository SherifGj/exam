import { useState } from "react";
import { ITodo } from "../../../interfaces/ITodo";

const Item: React.FC<ITodo> = ({ completed, title }) => {
  //Use onChange to mark your to-dos as done.
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <li className="py-2  border-b">
      <div className={`flex align-middle flex-row justify-between`}>
        <p className={` text-lg text-black`} style={{textDecoration: isChecked? "line-through": "none", color: isChecked?"green": "black"} }>{title}</p>
        <div className="p-2">
          <input type="checkbox" value="true" onClick={()=>{setIsChecked(!isChecked)}} />
        </div>
      </div>
    </li>
  );
};

export default Item;
