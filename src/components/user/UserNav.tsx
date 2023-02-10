import { NavLink } from "react-router-dom";

const UserNav: React.FC = () => {
  //just the hrefs are missing here.. nothing to worry about
  const defaultClass =
    "p-4 text-gray-500 font-semibold block transition-colors";
  const activeClass = "p-4 text-blue-700 font-semibold block transition-colors";
  return (
    <div className="shadow bg-white rounded-md mt-7">
      <ul>
        <li>
          <NavLink
            to={"details"}
            end
            className={({ isActive }) =>
              isActive ? activeClass : defaultClass
            }
          >
            Details
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"albums"}
            className={({ isActive }) =>
              isActive ? activeClass : defaultClass
            }
          >
            Albums
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"todos"}
            className={({ isActive }) =>
              isActive ? activeClass : defaultClass
            }
          >
            Todos
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default UserNav;
