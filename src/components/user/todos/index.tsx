import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ITodo } from "../../../interfaces/ITodo";
import Item from "./Item";

const Todos: React.FC = (ITodo) => {
  const { id } = useParams<{ id: string }>();
  const [todos, setTodos] = useState<ITodo[]>([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/todos?userId=${id}`)
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, [id]);
  console.log(todos);


  return (
    <>
      <div className="">
        <ul>
          {/* when a todo list is checked change the css */}
            
          {todos.map((el) => (
            <Item {...el} />
          ))}
         
  
        </ul>
      </div>
    </>
  );
};

export default Todos;
