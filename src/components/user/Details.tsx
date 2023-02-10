import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export const Details = () => {
  const {user} = useContext(UserContext);
  return (
    <div className="bg-white rounded-md p-2">
      <div className="flex w-3/4 justify-between">
        <p>Email:</p>
          <p className="font-semibold">{user.email}</p>
      </div>
      <div className="flex w-3/4 justify-between">
        <p>Address:</p>
        <div>
          <div className="flex justify-between">
            <p>Street:</p>
            <p>{user.address.street}</p>
          </div>
          <div className="flex justify-between">
            <p>Suite:</p>
              <p>{user.address.suite }</p>
          </div>
          <div className="flex justify-between">
            <p>City:</p>
              <p>{user.address.city }</p>
          </div>
          <div className="flex justify-between">
            <p>Zipcode:</p>
              <p>{ user.address.zipcode}</p>
          </div>
        </div>
      </div>
        <div className="flex w-3/4 justify-between">
            <p>Phone:</p>
            <p>{user.phone}</p>
        </div>
        <div className="flex w-3/4 justify-between">
            <p>Website:</p>
            <p>{user.website}</p>
        </div>
        <div className="flex w-3/4 justify-between">
            <p>Company:</p>
        <p></p>
        </div>
  </div>
  )

};