import { useEffect, useState } from "react";
import { IUser } from "../../interfaces/IUser";
import UserCard from "./UserCard";

const HomePage: React.FC = () => {
  
  const [users, setUsers] = useState<IUser[]>([] as IUser[]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    //make it look same as Homepage.png
    <div className=" p-5 pt-32 flex justify-start items-center w-4/5 flex-wrap">
      {users.map((el) => (
        <UserCard key={el.id} {...el} />
      ))}
    </div>
  );
};

export default HomePage;
