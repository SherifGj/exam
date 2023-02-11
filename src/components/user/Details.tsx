import {useEffect, useState} from 'react';
import { IUser } from '../../interfaces/IUser';



export const Details: React.FC = () => {
  
  const [details, setDetails] = useState<IUser[]>([] as IUser[]);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setDetails(data));
  }, []);

  return(
      <div className="grid-cols-2 ">
        <div>
          <p>Email:</p>
          <p></p>
        </div>
        
          {details.map((element) => (
            <div>
              <p>{element.email}</p>
              <div>
              <p>Street:</p>
              <p>{element.address.street}</p>
              </div>
              <div>
              <p>Suite:</p>
              <p>{element.address.suite}</p>
              </div>
              <div>
              <p>City:</p>
              <p>{element.address.city}</p>
              </div>
              <div>
              <p>Zipcode:</p>
              <p>{element.address.zipcode}</p>
              </div>
              <p>{element.phone}</p>
              <p>{element.website}</p>
              <p>{element.company.name}</p>
            </div>
          ))}
          
      </div>

  );
};

