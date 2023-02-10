import { IUser } from "../../interfaces/IUser";

interface DetailsProps {
  user: IUser;
}


export default function Details({ user }: DetailsProps) {


  return (
    <div className="col-span-2 bg-white w-full" >
      <div className="grid mx-2 grid-cols-2">
        <div className="col-span-1">
          <p className="text-gray-500 pt-5">Email:  </p>
          <p className="text-gray-500">Adress: </p> 
          <p className="text-gray-500 pt-20">Phone: </p>
     
          <p className="text-gray-500 pb-5">Website: </p>
          
        </div>
        <div className="col-span-1">
           <p className="text-black pt-5">Email: {user.email} </p>
          <p className="text-black">Adress: {user.email}</p> 
          <p className="text-black pt-20">Phone: {user.phone}</p>
     
          <p className="text-black pb-5">Website:{user.website} </p>
        </div>
      </div>
   </div>
  );
}
