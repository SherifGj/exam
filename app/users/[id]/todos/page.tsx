"use client";
import Todo from "@/components/Todo";
import { fetcher } from "@/helpers/fetcher";
import { ITodo } from "@/interfaces/ITodo";
import { usePathname } from "next/navigation";
import useSWR from "swr";
export default function Todos() {
	const path = usePathname();
	const id = path?.split("/")[2];
	const { data: todos } = useSWR<ITodo[]>(
		`https://jsonplaceholder.typicode.com/user/${id}/todos`,
		fetcher
	);

	if (!todos) {
		return <div>Loading...</div>;
	}

	return (
		<ul className="rounded-md bg-white p-3">
			{todos.map((el) => (
				<Todo item={el} key={el.id} />
			))}
		</ul>
	);
}
