import { ITodo } from "../../../interfaces/ITodo";
import Item from "./Item";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/UserContext";

const Todos: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([] as ITodo[]);
  const { user } = useContext(UserContext);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/todos?userId=${user.id}`)
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);
  return (
    <>
      <div className="">
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
