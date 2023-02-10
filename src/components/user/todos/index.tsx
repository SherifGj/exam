import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ITodo } from "../../../interfaces/ITodo";


import Item from "./Item";
const Todos: React.FC = () => {
  const [list, setList] = useState<ITodo[]>([] as ITodo[]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((res) => res.json())
      .then((data) => setList(data));
  }, []);
  return (
    <>
      <div className="">
        <ul>
       
         {list.map((el) => (
            <Item key={el.id} {...el} />
          
        ))}
        
         </ul>
      </div>
       
     
    </>
  );
};

export default Todos;
