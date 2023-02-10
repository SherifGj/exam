import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { IUser } from "../../interfaces/IUser";

interface DetialsProps {}

const Detials: React.FC<DetialsProps> = () => {
  // const [U, setUser] = useState<IUser>();
  const { user } = useContext(UserContext);

  return (
    <div className="border border-gray-100 bg-white shadow-md p-4 rounded-md flex gap-64">
      <div className="dummy-data">
        <p className="pb-4 text-gray-500">Email:</p>
        <p className="pb-4 text-gray-500 mb-20">Address:</p>
        <p className="pb-4 text-gray-500">Phone:</p>
        <p className="pb-4 text-gray-500">Website:</p>
        <p className="pb-4 text-gray-500">Company:</p>
      </div>

      <div className="real-data">
        <p className="pb-4 text-gray-500">{user?.email}</p>
        <p className="pb-4 text-gray-500 mb-20">{user?.address?.city}</p>
        <p className="pb-4 text-gray-500">{user?.phone}</p>
        <p className="pb-4 text-gray-500">{user?.website}</p>
        <p className="pb-4 text-gray-500">{user?.company?.name}</p>
      </div>
    </div>
  );
};

export default Detials;
