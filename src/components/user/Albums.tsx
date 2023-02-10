import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IAlbum } from '../../interfaces/IAlbum';

export default function Albums() {
	const [albums, setAlbums] = useState<IAlbum[]>([] as IAlbum[]);
	const { id } = useParams();

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/user/${id}/albums`)
			.then((res) => res.json())
			.then((data) => setAlbums(data))
			.catch((err) => console.error(err));
	}, [id]);

	if (!albums) {
		return <div>Loading...</div>;
	}
	return (
		<>
			<header className="mb-4 text-2xl font-thin">Albums</header>
			<div className="flex flex-col rounded-lg bg-white shadow-lg">
				{albums.map((album) => (
					<div
						className="group flex justify-between rounded-md border-b bg-white p-2 transition-all duration-500 ease-in-out hover:scale-x-105 hover:bg-blue-100"
						key={album.id}
					>
						<header className="font-medium group-hover:font-semibold">{album.title}</header>
						<Link
							to={`${album.id}/photos`}
							className="text-sm transition-all duration-500 ease-in-out group-hover:font-bold group-hover:text-blue-500"
						>
							See more
						</Link>
					</div>
				))}
			</div>
		</>
	);
}
