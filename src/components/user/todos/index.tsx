import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ITodo } from '../../../interfaces/ITodo';

const Album = () => {
	const { id } = useParams();
	const [todo, setTodo] = useState<ITodo[]>([] as ITodo[]);
	useEffect(() => {
		const getAllData = async () => {
			const todoRes = await fetch(`${process.env.REACT_APP_API}/todos?userId=${id}`);
			const todoData = await todoRes.json();
			setTodo(todoData);
		};
		getAllData();
	}, [id]);
	return (
		<div className='shadow w-100 h-100 bg-white flex flex-col p-6 rounded-md gap-3'>
			{todo.map((td) => (
				<div className='rounded-md pt-3 pb-3 pl-2 pr-2 transition duration-150 ease-in-out hover:scale-110 hover:bg-blue-100 hover:border-2'>
					{td.title}
				</div>
			))}
		</div>
	);
};

export default Album;
