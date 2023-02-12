import { IUser } from "@/interfaces/IUser";
import UserCard from "@/components/UserCard";

async function getUsers() {
	const res = await fetch("https://jsonplaceholder.typicode.com/users", {
		next: {
			revalidate: 60,
		},
	});
	const data = await res.json();

	return data;
}
async function HomePage() {
	const users: IUser[] = await getUsers();
	if (!users) {
		return <div>Loading...</div>;
	}

	return (
		<div className="grid grid-cols-5 gap-3 p-5 pt-32">
			{users.map((el) => (
				<UserCard key={el.id} {...el} />
			))}
		</div>
	);
}

export default HomePage;
