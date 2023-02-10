import { Link } from "react-router-dom";
import { IUser } from "../../interfaces/IUser";

const UserCard: React.FC<IUser> = ({ name, username, id }) => {
  return (
    //this card needs some styling... don't you think?
    <Link to={`/user/${id}`}>
      <div className="border mb-2 w-64 h-32 flex flex-col hover:text-white justify-center px-12  bg-white hover:bg-gradient-to-r from-green-400 via-cyan-900 to-blue-500 ">
        <p className="font-bold  ">{username}</p>
        <p className="font-light ">
          {name}
        </p>
      </div>
    </Link>
  );
};

export default UserCard;
