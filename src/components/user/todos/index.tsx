import { useEffect, useState } from "react";
// import { IPhotos } from "../../../interfaces/IPhoto";
import { ITodo } from "../../../interfaces/ITodo";
import Item from "./Item";

const Todos: React.FC = () => {
    // const todoList: React.FC = () => {
        const [todos, settodos] = useState<ITodo[]>([] as ITodo[]);
        useEffect(() => {
          fetch(`${process.env.REACT_APP_API}/todos`)
            .then((res) => res.json())
            .then((data) => settodos(data));
        }, []);
        return (
          //make it look same as Homepage.png
          <div className="flex flex-col justify-center gap-5 p-5 ">
            {todos.map((el) => (
              <Item key={el.id} {...el} />
            ))}
          </div>
        );
      };

export default Todos;
