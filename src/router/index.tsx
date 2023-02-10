import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../components/homepage';
import UserPage from '../components/user';
import Details from '../components/user/Details';
import Album from '../components/user/Album';
import Photos from '../components/user/Photos';
import Todos from '../components/user/todos/Item';

const Router: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<HomePage />} />
				<Route path='/user/:id' element={<UserPage />}>
					<Route index element={<Details />} />
					<Route path='albums' element={<Album />} />
					<Route path='todos' element={<Photos />} />
					{/* <Route path='/user/:id/photos' element={<Todos />} /> */}
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
