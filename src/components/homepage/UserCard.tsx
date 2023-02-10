import { Link } from "react-router-dom";
import { IUser } from "../../interfaces/IUser";

const UserCard: React.FC<IUser> = ({ name, username, id }) => {
  return (
    //this card needs some styling... don't you think?
    <Link to={`/user/${id}`} className="m-1 ">
      <div className="text-xs hover:bg-gradient-to-r from-purple-200 to-indigo-100 ... border mb-2 rounded-md bg-white p-3 pb-12 hover:text-blue-500">
        <p className="font-bold group-hover:text-blue-500">{username}</p>
        <p className="font-light  group-hover:text-blue-500">
          {name}
        </p>
      </div>
    </Link>
  );
};

export default UserCard;
