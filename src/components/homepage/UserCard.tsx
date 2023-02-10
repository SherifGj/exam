import { Link } from "react-router-dom";
import { IUser } from "../../interfaces/IUser";

const UserCard: React.FC<IUser> = ({ name, username, id }) => {
  return (
    //this card needs some styling... don't you think?
    <Link to={`/user/${id}`}>
      <div className="border mb-2 w-72 h-40 hover:bg-blue-300 hover:text-blue-700 p-4 rounded-md">
        <p className="font-bold">{username}</p>
        <p className="font-light">
          {name}
        </p>
      </div>
    </Link>
  );
};

export default UserCard;
