import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ITodo } from "../../../interfaces/ITodo";
import Item from "./Item";

const Todos: React.FC = () => {
  const id = useParams().id
  const [todos, setTodos] = useState<ITodo[]>([] as ITodo[]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/todos?userId=${id}`)
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);
  
  
  return (
    <>
      <div className="user-todos">
        <ul>
          {todos.map((el) => (
            <Item {...el} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todos;
