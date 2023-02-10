import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IAlbum } from '../../interfaces/IAlbum';

const Album = () => {
	const { id } = useParams();
	const [album, setAlbum] = useState<IAlbum[]>([] as IAlbum[]);
	useEffect(() => {
		const getAllData = async () => {
			const albumRes = await fetch(`${process.env.REACT_APP_API}/albums?userId=${id}`);
			const albumData = await albumRes.json();
			setAlbum(albumData);
		};
		getAllData();
	}, [id]);
	return (
		<div className='shadow w-100 h-100 bg-white flex flex-col p-6 rounded-md gap-3'>
			{album.map((al) => (
				<div className='rounded-md pt-3 pb-3 pl-2 pr-2 transition duration-150 ease-in-out hover:scale-110 hover:bg-blue-100 hover:border-2'>
					{al.title}
				</div>
			))}
		</div>
	);
};

export default Album;
