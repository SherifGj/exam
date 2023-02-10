import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ITodo } from "../../../interfaces/ITodo";
import Item from "./Item";

const Todos: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([] as ITodo[]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/todos`)
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);
  return (
    <>
      <div className="bg-white rounded-md h-[50vh] w-auto overflow-hidden overflow-y-auto">
        <ul className="p-2">
          {todos.map((el) => (
            <Item {...el} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todos;
