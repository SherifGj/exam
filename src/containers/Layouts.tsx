import { ReactNode } from 'react';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }: { children: ReactNode }) => {
	return (
		<div className="bg-gray-100">
			<div className="container mx-auto ">
				<div className="min-h-screen pb-10">{children}</div>
				<footer>{/* use creativity if you want */}</footer>
			</div>
		</div>
	);
};

export default Layout;
