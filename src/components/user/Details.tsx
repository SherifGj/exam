import { useState, useEffect } from "react";
import { IPhotos } from "../../interfaces/IPhoto";
import { ITodo } from "../../interfaces/ITodo";
import Item from "./todos/Item";

const Details = () => {
  
  // const navigate = useNavigate();
  // const goBack = () => {
  //   navigate(-1);
  // };
  
  const [details, setDetails] = useState<ITodo[]>([] as ITodo[]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/users/address`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  return (
    //make it look same as Homepage.png
    <div className="flex flex-col justify-center gap-5 p-5 ">
      {details.map((el) => (
        <Item key={el.id} {...el} />
      ))}
    </div>
  );
  };
  
export default Details;
