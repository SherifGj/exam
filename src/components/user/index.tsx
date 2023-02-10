import { useEffect, useState } from "react";
import { useParams, Outlet, Link } from "react-router-dom";
import { UserProvider } from "../../context/UserContext";
import { IUser } from "../../interfaces/IUser";
import UserNav from "./UserNav";

const React: React.FC = () => {
  const { id } = useParams();
  const [user, setUser] = useState<IUser>({} as IUser);
  useEffect(() => {
    const getAllData = async () => {
      const userRes = await fetch(`${process.env.REACT_APP_API}/users/${id}`);
      const userData = await userRes.json();
      setUser(userData);
    };
    getAllData();
  }, [id]);
  return (
    <UserProvider user={user}>
      <div className="h-72">
        {/* this should be gradient, not gray */}
        <span className="absolute left-0 top-0 bg-gradient-to-r from-indigo-400 to-purple-300 ...  h-48 w-full border-b-2 border-purple-400" />
      </div>
      <div className="grid grid-cols-3 px-28">
        <div className="pt-10 col-span-1 pr-32">
          <div className="justify-center">
            <div className="relative -mt-48">
              <Link to="/">
                {/* make this spin reverse */}
                <span className="mb-5 w-36 h-36 animate-reverse-spin rounded-full block bg-gradient-to-tr from-purple-500 to-blue-300 p-2 ">
                  <span className="rounded-full h-full w-full bg-white block" />
                </span>
              </Link>
              <div>
                <p className="text-2xl">{user.name}</p>
                <p className="text-gray-500">@{user.username}</p>
              </div>
            </div>
          </div>
          <UserNav />
        </div>
        <div className="col-span-2">
          <Outlet />
        </div>
      </div>
    </UserProvider>
  );
};

export default React;
