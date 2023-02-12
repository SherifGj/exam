import Link from "next/link";

export default function UserCard({
	name,
	username,
	id,
}: {
	name: string;
	username: string;
	id: number;
}) {
	return (
		<Link
			href={`/users/${id}`}
			className="group col-span-1 h-32 max-h-32 rounded-lg border bg-white p-4 shadow-lg transition-all duration-500 ease-in-out hover:bg-blue-300 hover:bg-opacity-30"
		>
			<div className="mb-2">
				<p className="font-bold transition-all duration-500 ease-in-out group-hover:text-blue-500">
					{username}
				</p>
				<p className="font-light text-gray-600  transition-all duration-500 ease-in-out group-hover:text-blue-500">
					{name}
				</p>
			</div>
		</Link>
	);
}
