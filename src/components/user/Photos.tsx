import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IPhotos } from "../../interfaces/IPhoto";

const Photos: React.FC = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const [photos, setPhotos] = useState<IPhotos[]>([] as IPhotos[]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/photos`)
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);

  return (
    <>
      <button
        className="px-4 py-1 ring-2 ring-blue-500 rounded-md text-gray-600 font-bold mb-2 hover:bg-blue-500 hover:text-white shadow-md"
        onClick={goBack}
      >
        Back
      </button>
        <div className="grid grid-cols-3 gap-1">
      {photos.map((el)=>(
          <div className="w-52 h-36 mb-2 mr-2 border border-gray-300">
            <img
            src={el.url}
            alt=""/>
            <p className="opacity-0 -mt-20 bg-transparent w-full h-12 z-30 hover:bg-gray-800 overflow-hidden hover:opacity-100">{el.title}</p>
          </div>
      ))}
        </div>
    </>
  );
};

export default Photos;
