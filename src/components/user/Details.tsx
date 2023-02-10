import { useContext } from "react";
import {UserContext} from "../../context/UserContext";

interface DetailsProps {
  
}
 
const Details: React.FC<DetailsProps> = () => {


  const {user} = useContext(UserContext);
  console.log(user);
  return ( 
    <div className="bg-white shadow-sm">
      <div className="flex justify-between">
      <p className="text-gray-500">Email:</p>
      <p>{user.email}</p>
      </div> 
      <div className="flex justify-between">
      <p >Address:</p>
      <div className="flex justify-between">
        <div >
          <p>Street:</p>
          <p>Suite:</p>
          <p>City:</p>
          <p>Zipcode:</p>
        </div>
        <div>
          <p>{user.address.street}</p>
          <p>{user.address.suite}</p>
          <p>{user.address.city}</p>
          <p>{user.address.zipcode}</p>
        </div>
        <div>
          
        </div>
      </div>
      </div>
     
      <div className="flex justify-between">
        <div>
      <p>Phone:</p>
      <p>Website:</p>
      <p>Company:</p>
        </div>

        <div>
      <p>{user.phone}</p>
      <p>{user.website}</p>
      <p>{user.company.name}</p>

        </div>
      </div> 
           
    </div>
   );
}
 
export default Details;