import { useEffect, useState } from "react";
import { IUser } from "../../interfaces/IUser";

const Details = () => {
  const [user, setUser] = useState<IUser[]>([] as IUser[]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/users`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return <div className="bg-white rounded-md w-[50rem] h-60 p-6">
    <p className="text-gray-600">Email:</p>
    <p className="text-gray-600">Address:</p>
    <p className="text-gray-600">Phone:</p>
    <p className="text-gray-600">Website:</p>
    <p  className="text-gray-600">Company:</p>
  </div>;
};
export default Details;
