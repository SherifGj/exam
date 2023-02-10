import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IPhotos } from '../../interfaces/IPhoto';

export default function Photos() {
	const [photos, setPhotos] = useState<IPhotos[]>([] as IPhotos[]);
	const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	};

	const { albumId } = useParams();

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
			.then((res) => res.json())
			.then((data) => setPhotos(data))
			.catch((err) => console.error(err));
	}, [albumId]);

	if (!photos) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<button
				className="mb-2 rounded-md px-4 py-1 font-bold text-gray-600 shadow-md ring-2 ring-blue-500 hover:bg-blue-500 hover:text-white"
				onClick={goBack}
				type="button"
			>
				Back
			</button>
			<div className="grid grid-cols-3 gap-3">
				{photos.map((photo) => (
					<div
						className="group relative flex items-end justify-start rounded-md shadow-md"
						key={photo.id}
						style={{
							backgroundImage: `url(${photo.thumbnailUrl})`,
							backgroundSize: '50%',
							height: '200px',
						}}
					>
						<div className="absolute bottom-0 -z-0 h-[40%] w-full bg-opacity-25 bg-gradient-to-t from-black to-transparent opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
							<p className="p-4 text-white opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
								{photo.title}
							</p>
						</div>
					</div>
				))}
			</div>
		</>
	);
}
