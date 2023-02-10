import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ITodo } from "../../../interfaces/ITodo";
import Item from "./Item";



export default function Todos() {
  const { id } = useParams();
  const [todo, setTodo] = useState<ITodo[]>([] as ITodo[]);
  useEffect(() => {
    const getAllData = async () => {
      const userRes = await fetch(`${process.env.REACT_APP_API}/todos?userId=${id}`);
      const Todos = await userRes.json();
      setTodo(Todos);
    };
    getAllData();
  }, []);



    return (
    <>
      <div className="">
        <ul>
          {todo.map((el:ITodo) => (
            <Item {...el} />
          ))}
        </ul>
      </div>
    </>
  );
};













// const Todos: React.FC = () => {
//   return (
//     <>
//       <div className="">
//         <ul>
//           {todos.map((el) => (
//             <Item {...el} />
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Todos;
