import React, {useContext} from "react";
import {UserContext} from "../../context/UserContext";

const DetailsCard: React.FC = () => {
    const {user} = useContext(UserContext)
    return (
        <div >
            <p>Email: {user.email}</p>
            <p>Address: {user.address.city}</p>
            <p>Phone: {user.phone}</p>
            <p>Company: {user.company.name}</p>
        </div>
    );
};

export default DetailsCard;
