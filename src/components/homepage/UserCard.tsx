import { Link } from "react-router-dom";
import { IUser } from "../../interfaces/IUser";

const UserCard: React.FC<IUser> = ({ name, username, id }) => {
  return (
    //this card needs some styling... don't you think?
    <Link to={`/user/${id}`}>
      <div className="border mb-2 w-60 h-40 p-5 rounded-md">
        <p className="font-bold group-hover:text-blue-500">{username}</p>
        <p className="text-gray-600 font-light  group-hover:text-blue-500">
          {name}
        </p>
      </div>
    </Link>
  );
};

export default UserCard;
