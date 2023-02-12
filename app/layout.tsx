import "./globals.css";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<head />
			<body>
				<div className="bg-gray-100">
					<div className="container mx-auto ">
						<div className="min-h-screen pb-10">{children}</div>
					</div>
				</div>
			</body>
		</html>
	);
}
