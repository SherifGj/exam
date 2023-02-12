"use client";
import { UserContext } from "@/context/UserContext";
import { useContext } from "react";

export default function UserPage() {
	const { user } = useContext(UserContext);
	if (!user) return <div>loading...</div>;
	return (
		<div className="grid grid-cols-2 gap-4 border bg-white p-6">
			<header className="col-span-1 font-bold text-gray-400">Email:</header>
			<p className="col-span-1 font-semibold">{user?.email}</p>
			<header className="col-span-1 font-bold text-gray-400">Address:</header>
			<div className="col-span-1 grid grid-cols-2">
				<div className="flex flex-col gap-2">
					<header className="font-bold text-gray-400">Street:</header>
					<header className="font-bold text-gray-400">Suite:</header>
					<header className="font-bold text-gray-400">City:</header>
					<header className="font-bold text-gray-400">Zipcode:</header>
				</div>
				<div>
					<p className="font-semibold">{user?.address?.street}</p>
					<p className="font-semibold">{user?.address?.suite}</p>
					<p className="font-semibold">{user?.address?.city}</p>
					<p className="font-semibold">{user?.address?.zipcode}</p>
				</div>
			</div>
			<header className="col-span-1 font-bold text-gray-400">Phone:</header>
			<p className="col-span-1">{user.phone}</p>
			<header className="col-span-1 font-bold text-gray-400">Website:</header>
			<p className="col-span-1">{user.website}</p>
			<header className="col-span-1 font-bold text-gray-400">Company:</header>
			<p className="col-span-1">{user?.company?.name}</p>
		</div>
	);
}
