import { ITodo } from "../../../interfaces/ITodo";

const Item: React.FC<ITodo> = ({ completed, title }) => {
  //Use onChange to mark your to-dos as done.

  const todoo = document.querySelector('input[type="checkbox"]')
  function onChange() {
    
  }
  return (
    <li className="py-2  border-b">
      <div className={`flex align-middle flex-row justify-between`}>
        <p className={` text-lg text-black`}>{title}</p>
        <div className="p-2">
          <input type="checkbox" value="true" onChange={onChange}/>
        </div>
      </div>
    </li>
  );
};

export default Item;
