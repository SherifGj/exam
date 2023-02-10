import { Link } from "react-router-dom";
import { IUser } from "../../interfaces/IUser";

const UserCard: React.FC<IUser> = ({ name, username, id }) => {
  return (
    //this card needs some styling... don't you think?
    <Link to={`/user/${id}`}>
      <div className="col-span-1 border-1 border-gray-200 shadow-lg hover:bg-gradient-to-r from-violet-200 to-blue-500  shadow-gray-200">
        <p className="font-bold pl-3 group-hover:text-blue-500">{username}</p>
        <p className="text-gray-600 pl-3 pb-28 font-light  group-hover:text-blue-500">
          {name}
        </p>
      </div>
    </Link>
  );
};

export default UserCard;
