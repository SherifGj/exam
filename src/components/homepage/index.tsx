import { useEffect, useState } from 'react';
import { IUser } from '../../interfaces/IUser';
import UserCard from './UserCard';

export default function HomePage() {
	const [users, setUsers] = useState<IUser[]>([] as IUser[]);
	useEffect(() => {
		fetch(`${process.env.REACT_APP_API}/users`)
			.then((res) => res.json())
			.then((data) => setUsers(data))
			.catch((err) => console.error(err));
	}, []);
	if (!users) {
		return <div>Loading...</div>;
	}
	return (
		<div className="grid grid-cols-5 gap-3 p-5 pt-32">
			{users.map((el) => (
				<UserCard
					key={el.id}
					{...el}
				/>
			))}
		</div>
	);
}
