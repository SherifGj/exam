import { UserContext } from "@/context/UserContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
export default function UserNav() {
	const path = usePathname();
	const { user } = useContext(UserContext);
	const activeClass = "p-4 text-blue-700 font-semibold block transition-colors";
	const inactiveClass =
		"p-4 text-gray-500 font-semibold block transition-colors";
	return (
		<div className="mt-7 rounded-md bg-white shadow">
			<ul>
				<li>
					<Link
						href={`/users/${user?.id}`}
						className={
							path === `/users/${user?.id}` ? activeClass : inactiveClass
						}
					>
						Details
					</Link>
				</li>
				<li>
					<Link
						href={`/users/${user?.id}/albums`}
						className={
							path === `/users/${user?.id}/albums` ? activeClass : inactiveClass
						}
					>
						Albums
					</Link>
				</li>
				<li>
					<Link
						href={`/users/${user?.id}/todos`}
						className={
							path === `/users/${user?.id}/todos` ? activeClass : inactiveClass
						}
					>
						Todos
					</Link>
				</li>
			</ul>
		</div>
	);
}
