import { useState } from "react";
import { ITodo } from "../interfaces/ITodo";

export default function Todo({ item }: { item: ITodo }) {
	const [checked, setChecked] = useState<boolean>(item.completed);
	return (
		<li className="border-b  py-2">
			<div className="flex flex-row justify-between align-middle">
				<p
					className={`${
						checked ? "text-green-500 line-through " : ""
					}text-lg text-black`}
				>
					{item.title}
				</p>
				<div className="p-2">
					<input
						type="checkbox"
						value="true"
						checked={checked}
						onChange={() => setChecked(!checked)}
					/>
				</div>
			</div>
		</li>
	);
}
