import React from 'react';
import { UserContext } from '../../context/UserContext';
import { IUser } from '../../interfaces/IUser';

interface UserContextProps {
	user: IUser;
}

const Details: React.FC = () => {
	const { user } = React.useContext(UserContext) as UserContextProps;

	return (
		<div className='shadow w-100 h-100 bg-white flex flex-row p-6 rounded-md'>
			<div className='info w-1/2 flex flex-col gap-1 text-gray-700'>
				<p className='text-gray-700'>Email:</p>
				<p className='h-[100px]'>Address:</p>
				<p className='text-gray-700'>Phone:</p>
				<p className='text-gray-700'>Website:</p>
				<p className='text-gray-700'>Company:</p>
			</div>
			<div className='more__info w-1/2 flex flex-col gap-1'>
				<p>{user.email}</p>
				<div className='address flex'>
					<div className='address__info w-1/2 text-gray-700'>
						<p>Street:</p>
						<p>Suite:</p>
						<p>City:</p>
						<p>Zipcode:</p>
					</div>
					<div className='address__more_info w-1/2'>
						<p>{user.address?.street}</p>
						<p>{user.address?.suite}</p>
						<p>{user.address?.city}</p>
						<p>{user.address?.zipcode}</p>
					</div>
				</div>
				<p>{user.phone}</p>
				<p>{user.website}</p>
				<p>{user.company?.name}</p>
			</div>
		</div>
	);
};

export default Details;
