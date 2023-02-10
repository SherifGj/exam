import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../containers/Layouts";
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
    <Layout>
    <div className="container mx-auto grid pt-28 grid-cols-5 gap-4 ">
        {users.map((el) => (
        <Link to={`/users/${el.id}`}>
            <UserCard key={el.id} {...el} />
        </Link>
      ))}
      </div>
      </Layout>
  );
};

export default HomePage;
