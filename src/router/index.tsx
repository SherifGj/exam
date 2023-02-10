import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../components/homepage';
import UserPage from '../components/user';
import Albums from '../components/user/Albums';
import Details from '../components/user/Details';
import Photos from '../components/user/Photos';
import Todos from '../components/user/todos';

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					index
					element={<HomePage />}
				/>
				<Route
					path="/user/:id"
					element={<UserPage />}
				>
					<Route
						index
						element={<Details />}
					/>
					<Route path="albums">
						<Route
							index
							element={<Albums />}
						/>
						<Route
							path=":albumId/photos"
							element={<Photos />}
						/>
					</Route>
					<Route
						path="todos"
						element={<Todos />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
