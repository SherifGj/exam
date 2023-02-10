import { title } from "process";
import { useEffect, useState } from "react";
import { useParams, Outlet, Link } from "react-router-dom";
import { UserProvider } from "../../context/UserContext";
import { IUser } from "../../interfaces/IUser";
import DetailItem from "./DetailItem";
import UserNav from "./UserNav";

const Details: React.FC = () => {
  const[details, setDetails]=useState<IUser []>([] as IUser[]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  
  return (
    <div>
      <div>
        <p>Email :</p>
        <p>Adres :</p>
        <p>Phone :</p>
        <p>Website:</p>
        <p>Company :</p>
      </div>
     
      
    </div>
  );
};

export default Details;
