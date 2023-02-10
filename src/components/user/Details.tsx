import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

interface DetailsProps {
  
}
 
const Details: React.FC<DetailsProps> = () => {
  const value = useContext(UserContext).user;  
  return ( 
    <div className="user-details">
      <div className="details-name">
        <p>Email: </p>
        <p>Address: </p><br /><br /><br /><b></b>
        <p>Phone: </p>
        <p>Website: </p>
        <p>Company: </p>
      </div>
      <div className="details-data">
        <p><span>{value.email}</span></p>
        <p>Street: <span>{value.address?.street}</span></p>
        <p>Suite: <span>{value.address?.suite}</span></p>
        <p>City: <span>{value.address?.city}</span></p>
        <p>Zipcode: <span>{value.address?.zipcode}</span></p>
        <p><span>{value.phone}</span></p>
        <p><span>{value.website}</span></p>
        <p><span>{value.company?.name}</span></p>
      </div>
    </div>
   );
}
 
export default Details;