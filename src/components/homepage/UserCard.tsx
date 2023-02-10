import { Link } from "react-router-dom";
import { IUser } from "../../interfaces/IUser";

const UserCard: React.FC<IUser> = ({ name, username, id }) => {
  return (
    //this card needs some styling... don't you think?
    <Link to={`/user/${id}`}>
      <div className="group border mb-2 rounded-md bg-gradient-to-t from-[#e9d6ff] to-[#dce9ff] h-28 w-auto p-2">
        <p className="font-bold group-hover:text-blue-500">{username}</p>
        <p className="text-gray-600 font-light  group-hover:text-blue-500">
          {name}
        </p>
      </div>
    </Link>
  );
};

export default UserCard;
