import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownRenderer: React.FC = () => {
	const [markdown, setMarkdown] = useState<string>('');
	const [modal, setModal] = useState<boolean>(false);

	useEffect(() => {
		fetch('../../readme.md')
			.then((response) => response.text())
			.then((text) => setMarkdown(text))
			.catch((error) => console.error(error));
	}, []);

	return (
		<>
			<button
				className={`fixed top-3  right-3 z-10 rounded-xl border border-none py-2 px-4 font-semibold transition-colors duration-300
        ${modal ? 'bg-blue-500 text-white' : 'bg-white text-black'}
        `}
				onClick={() => setModal(!modal)}
				type="button"
			>
				<span className="bg-blue" />
				Read Me
			</button>
			<div
				className={`container fixed inset-x-0 inset-y-20 z-50 mx-auto origin-top-right transform-gpu overflow-auto rounded-md bg-white py-10 shadow transition-all duration-300${
					modal
						? 'pointer-events-auto translate-x-0 translate-y-0 scale-100 opacity-100'
						: 'pointer-events-none translate-x-16 -translate-y-10 scale-75 opacity-0'
				}`}
			>
				<button
					type="button"
					onClick={() => setModal(false)}
					className="absolute right-0 top-0 mt-3 mr-3"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="h-8 w-8"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
				<div className="markdown-renderer prose mx-auto w-full">
					<ReactMarkdown>{markdown}</ReactMarkdown>
				</div>
			</div>
		</>
	);
};

export default MarkdownRenderer;
