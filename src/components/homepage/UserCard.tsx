import { Link } from 'react-router-dom';
import { IUser } from '../../interfaces/IUser';

const UserCard: React.FC<IUser> = ({ name, username, id }) => {
	return (
		//this card needs some styling... don't you think?
		<Link to={`/user/${id}`}>
			<div className='border mb-2 p-4 aspect-4/3 transition ease-in-out duration-300 hover:bg-gradient-to-r  hover:from-pink-100 hover:to-blue-200 rounded-md shadow-md shadow-black-100/50 '>
				<p className='font-bold group-hover:text-blue-500'>{username}</p>
				<p className='text-gray-600 font-light  group-hover:text-blue-500'>{name}</p>
			</div>
		</Link>
	);
};

export default UserCard;
