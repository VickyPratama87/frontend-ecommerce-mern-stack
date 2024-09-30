import React from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

const Pagination = () => {
	const { pagination } = useLoaderData();
	const { page, totalPage } = pagination;
	const { search, pathname } = useLocation();
	const navigate = useNavigate();

	const handlePageChange = (number) => {
		console.log(number);
		console.log(search);
		console.log(pathname);

		const searchParams = new URLSearchParams(search);
		searchParams.set('page', number);
		navigate(`${pathname}?${searchParams.toString()}`);
	};

	const pages = Array.from({ length: totalPage }, (_, index) => {
		return index + 1;
	});

	return (
		<div className="join">
			{pages.map((pageNumber) => (
				<button
					key={pageNumber}
					onClick={() => handlePageChange(pageNumber)}
					className={`btn btn-sm px-4 py-2 border-none rounded-md transition-all duration-200 join-item ${pageNumber === page ? 'bg-primary text-white shadow-lg' : 'bg-gray-200 text-gray-600 hover:bg-primary hover:text-white'}`}>
					{pageNumber}
				</button>
			))}
		</div>
	);
};

export default Pagination;
