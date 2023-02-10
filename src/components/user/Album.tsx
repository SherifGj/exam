import {useEffect, useState} from "react";
import {IAlbum} from "../../interfaces/IAlbum";

function Details() {
  const [data, setData] = useState<Array<IAlbum>>();
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/albums`)
        .then((res) => res.json())
        .then((data) => setData(data));
  }, []);
  return (
      <div className=" p-5 pt-32">
        {data?.map((item) => (
            <div>
              <p>
                {item.userId}
              </p>
              <p>
                {item.title}
              </p>
              <p>
                {item.id}
              </p>
            </div>
        ))}
      </div>
  );
};

export default Details;
