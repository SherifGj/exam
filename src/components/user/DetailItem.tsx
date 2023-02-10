
import { IUser } from "../../interfaces/IUser";

const DetailItem: React.FC<IUser> = ({email }) => {
  //Use onChange to mark your to-dos as done.
  return (
   
    <li className="py-2  border-b">
      <div className={`flex align-middle flex-row justify-between`}>
        <p className={` text-lg text-black`}>{email}</p>
       
      </div>
    </li>
    
  );
};

export default DetailItem;
