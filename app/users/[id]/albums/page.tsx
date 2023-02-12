"use client";
import { IAlbum } from "../../../../interfaces/IAlbum";
import useSWR from "swr";
import { fetcher } from "@/helpers/fetcher";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function Albums() {
	const path = usePathname();
	const id = path?.split("/")[2];

	const { data: albums } = useSWR<IAlbum[]>(
		`https://jsonplaceholder.typicode.com/user/${id}/albums`,
		fetcher
	);

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
						<header className="font-medium group-hover:font-semibold">
							{album.title}
						</header>
						<Link
							href={`/users/${id}/albums/${album.id}`}
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
