import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ITodo } from '../../../interfaces/ITodo';
import Item from './Item';

export default function Todos() {
	const [todos, setTodos] = useState<ITodo[]>([] as ITodo[]);
	const { id } = useParams();

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/user/${id}/todos`)
			.then((res) => res.json())
			.then((data) => setTodos(data))
			.catch((err) => console.error(err));
	}, [id]);

	if (!todos) {
		return <div>Loading...</div>;
	}
	return (
		<ul className="rounded-md bg-white p-3">
			{todos.map((el) => (
				<Item
					item={el}
					key={el.id}
				/>
			))}
		</ul>
	);
}
