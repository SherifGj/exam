"use client";
import { fetcher } from "@/helpers/fetcher";
import { IPhotos } from "@/interfaces/IPhoto";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import useSWR from "swr";

export default function Photos() {
	const router = useRouter();
	const goBack = () => {
		router.back();
	};

	const path = usePathname();
	const albumId = path?.split("/")[4];

	const { data: photos } = useSWR<IPhotos[]>(
		`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`,
		fetcher
	);

	if (!photos) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<button
				className="mb-2 rounded-md px-4 py-1 font-bold text-gray-600 shadow-md ring-2 ring-blue-500 hover:bg-blue-500 hover:text-white"
				type="button"
				onClick={goBack}
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
							backgroundSize: "50%",
							height: "200px",
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
