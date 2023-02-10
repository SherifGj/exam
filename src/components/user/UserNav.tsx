import { NavLink } from 'react-router-dom';

export default function UserNav() {
	const defaultClass = 'p-4 text-gray-500 font-semibold block transition-colors';
	const activeClass = 'p-4 text-blue-700 font-semibold block transition-colors';
	return (
		<div className="mt-7 rounded-md bg-white shadow">
			<ul>
				<li>
					<NavLink
						to=""
						end
						className={({ isActive }) => (isActive ? activeClass : defaultClass)}
					>
						Details
					</NavLink>
				</li>
				<li>
					<NavLink
						to="albums"
						className={({ isActive }) => (isActive ? activeClass : defaultClass)}
					>
						Albums
					</NavLink>
				</li>
				<li>
					<NavLink
						to="todos"
						className={({ isActive }) => (isActive ? activeClass : defaultClass)}
					>
						Todos
					</NavLink>
				</li>
			</ul>
		</div>
	);
}
