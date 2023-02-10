import { IUser } from "../../interfaces/IUser";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../context/UserContext";


const Details: React.FC = () => {
  const { id } = useParams();
  const { user } = useContext(UserContext);



  return <div className="bg-white flex justify-between	p-5">
    
    <div className="flex justify-between	">
      <p className="text-gray-400">Email</p> 
    </div>
    <div>
      <p>{user.email}</p>
    </div>

  </div>;
};

export default Details;