import { useState } from "react";
import { ITodo } from "../../../interfaces/ITodo";

const Item: React.FC<ITodo> = ({ completed, title }) => {
  const [isCompleted, setIsCompleted] = useState(completed);


  const handleComplete = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <li className="py-2  border-b">
      <div className={`flex align-middle flex-row justify-between`}>
        <p className={ isCompleted ? 'text-lime-600 line-through': ` text-lg text-black `}>{title}</p>
        <div className="p-2">
          <input type="checkbox" value="false"  onChange={handleComplete} />
        </div>
      </div>
    </li>
  );
};

export default Item;
