import {useEffect, useState} from "react";
import {IUser} from "../../interfaces/IUser";
import DetailsCard from "./DetailsCard";

function Details() {
  const [data, setData] = useState<IUser[]>([] as IUser[]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/users`)
        .then((res) => res.json())
        .then((data) => setData(data));
  }, []);
  return (
      <div className=" p-5 pt-32">
            <DetailsCard />
      </div>
  );
};

export default Details;
