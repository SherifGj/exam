import { Link } from "react-router-dom";
import { IUser } from "../../interfaces/IUser";

const UserCard: React.FC<IUser> = ({ name, username, id }) => {
  return (
    //this card needs some styling... don't you think?
    <Link to={`/user/${id}`}>
      <div className="border mb-2 h-40 w-64 p-4 rounded-2xl">
        <p className="font-bold group-hover:text-blue-500">{username}</p>
        <p className="text-gray-600 font-light  group-hover:text-blue-500">
          {name}
        </p>
      </div>
    </Link>
  );
};

export default UserCard;
