"use client";
import UserProvider from "@/context/UserContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useSWR from "swr";
import { fetcher } from "@/helpers/fetcher";
import UserNav from "@/components/UserNav";
function UserLayout({ children }: { children: React.ReactNode }) {
	const router = usePathname();
	const { data: user } = useSWR(
		`https://jsonplaceholder.typicode.com/users/${router?.split("/")[2]}`,
		fetcher
	);

	return (
		<UserProvider user={user}>
			<div className="h-72">
				<span className="absolute left-0 top-0 h-48 w-full border-b-2 border-purple-400 bg-gradient-to-b from-violet-700 to-blue-300" />
			</div>
			<div className="grid grid-cols-3 px-28">
				<div className="col-span-1 pt-10 pr-32">
					<div className="justify-center">
						<div className="relative -mt-48">
							<Link href="/">
								<span className="mb-5 block h-36 w-36 animate-spin rounded-full bg-gradient-to-tr from-purple-500 to-blue-300 p-2 ">
									<span className="block h-full w-full rounded-full bg-white" />
								</span>
							</Link>
							<div>
								<p className="text-2xl">{user?.name}</p>
								<p className="text-gray-500">@{user?.username}</p>
							</div>
						</div>
					</div>
					<UserNav />
				</div>
				<div className="col-span-2">{children}</div>
			</div>
		</UserProvider>
	);
}

export default UserLayout;
