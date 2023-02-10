import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ITodo } from "../../../interfaces/ITodo";
import Item from "./Item";


const Todos: React.FC = () => {
  const { id } = useParams();

  const [todos, setTodo] = useState<ITodo>();
   useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/todos/${id}`)
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, [id]);

  return (
    <>
      <div className="">
        <ul>
          {todos.map((el) => (
            <Item key={el.id} {...el} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todos;
