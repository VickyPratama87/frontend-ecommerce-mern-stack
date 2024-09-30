import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { BsBoxes } from 'react-icons/bs';

const Hero = () => {
	const { products } = useLoaderData();

	return (
		<>
			<div className="grid items-center gap-28 lg:grid-cols-2">
				<div className="mb-10">
					<h1 className="max-w-2xl text-3xl font-extrabold tracking-tight sm:text-6xl">
						Welcome to <br />
						<span className="text-primary">Vic</span>
						<span className="text-accent">Store</span>
					</h1>
					<p className="max-w-xl mt-6 text-lg font-light leading-relaxed text-gray-600">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius repudiandae ipsam itaque! Explicabo, repellat architecto? Minus ratione commodi earum rem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, itaque.
					</p>

					<div className="mt-10">
						<Link
							to="/products"
							className="transition-transform transform btn btn-sm btn-primary btn-outline hover:scale-105 hover:bg-primary hover:text-white focus:ring focus:ring-primary focus:ring-opacity-50">
							<BsBoxes className="mr-2" />
							All Products
						</Link>
					</div>
				</div>

				<div className="hidden p-4 space-x-4 shadow-lg lg:flex carousel carousel-center bg-neutral rounded-box">
					{products.map((item) => (
						<div
							className="transition-transform duration-300 transform carousel-item hover:scale-105"
							key={item._id}>
							<img
								src={item.image}
								alt={item.name}
								className="object-cover w-64 h-64 rounded-lg shadow-md"
							/>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Hero;
