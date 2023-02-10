import { useEffect, useState , useContext} from "react";
import { useParams } from "react-router-dom";
import {UserContext} from "../../../context/UserContext";
import { ITodo } from "../../../interfaces/ITodo";
import Item from "./Item";

const Todos: React.FC = () => {

  const {user} = useContext(UserContext);
  const userId = user.id;
  const [todos, setTodos] = useState<ITodo[]>([] as ITodo[]);

  useEffect(()=>{
    const getUserAlbums = async() => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const json = await res.json()
      const userTodos = json.filter((todo:ITodo) => 
      todo.userId === userId)
      setTodos(userTodos);
    }
    getUserAlbums();
  },[userId])

  console.log(todos)
  return (
    <>
      <div className="">
        <ul>
          {todos.map((el) => (
            <Item key = {el.id} {...el} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todos;
