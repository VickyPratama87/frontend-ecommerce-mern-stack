const AboutView = () => {
	return (
		<>
			<div className="px-4 py-10 mx-auto mt-24 max-w-7xl">
				{/* Section Header */}
				<div className="text-center">
					<h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
						About Vic<span className="text-accent">Store</span>
					</h1>
					<p className="max-w-xl mx-auto mt-6 text-lg leading-8 text-gray-500">Your trusted online store for quality products at affordable prices. Here at VicStore, we believe in customer satisfaction and offering only the best.</p>
				</div>

				{/* Our Story Section */}
				<div className="mt-16 space-y-10 lg:space-y-0 lg:space-x-16 lg:flex lg:items-center">
					<div className="lg:w-1/2">
						<h2 className="text-3xl font-semibold text-neutral-content sm:text-4xl">Our Story</h2>
						<p className="mt-4 leading-relaxed text-gray-600">
							VicStore was founded in 2023 with the mission to provide a seamless shopping experience. From the very beginning, we aimed to create a platform where people could find the best products, at the best prices, without
							compromising on quality.
						</p>
					</div>
					<div className="lg:w-1/2">
						<img
							src="/images/about-us.jpg"
							alt="Our Story"
							className="object-cover w-full h-40 rounded-lg shadow-lg lg:h-96"
						/>
					</div>
				</div>

				{/* Vision and Mission Section */}
				<div className="grid grid-cols-1 gap-16 mt-20 lg:grid-cols-2">
					{/* Vision */}
					<div>
						<h3 className="text-3xl font-semibold text-neutral-content">Our Vision</h3>
						<p className="mt-4 leading-relaxed text-gray-600">To be the leading e-commerce platform, offering innovative and customer-centric shopping experiences that redefine convenience and trust in online shopping.</p>
					</div>

					{/* Mission */}
					<div>
						<h3 className="text-3xl font-semibold text-neutral-content">Our Mission</h3>
						<p className="mt-4 leading-relaxed text-gray-600">Our mission is to provide top-quality products with exceptional service while continuously striving to make online shopping faster, easier, and more affordable.</p>
					</div>
				</div>

				{/* Technology Section */}
				<div className="mt-20 text-center">
					<h3 className="text-3xl font-semibold text-neutral-content">Technologies We Use</h3>
					<p className="max-w-xl mx-auto mt-4 text-lg leading-8 text-gray-500">
						VicStore is built using modern web technologies to ensure performance, scalability, and ease of use. Our website is powered by the <strong>MERN Stack</strong>.
					</p>

					<div className="grid grid-cols-1 gap-12 mt-12 sm:grid-cols-2 lg:grid-cols-4">
						{/* MongoDB */}
						<div className="p-8 text-center rounded-lg shadow-lg bg-base-300">
							<img
								src="/images/mongo-db-logo.png"
								alt="MongoDB"
								className="w-16 h-16 mx-auto"
							/>
							<h4 className="mt-4 text-xl font-bold text-neutral-content">MongoDB</h4>
							<p className="mt-2 text-sm text-gray-500">A NoSQL database used for storing product data, user information, and transaction histories in a flexible and scalable format.</p>
						</div>

						{/* Express.js */}
						<div className="p-8 text-center rounded-lg shadow-lg bg-base-300">
							<img
								src="/images/express-logo.png"
								alt="Express.js"
								className="w-16 h-16 mx-auto"
							/>
							<h4 className="mt-4 text-xl font-bold text-neutral-content">Express JS</h4>
							<p className="mt-2 text-sm text-gray-500">A web application framework for Node.js used to build the API and backend services, ensuring smooth data flow between the frontend and database.</p>
						</div>

						{/* React */}
						<div className="p-8 text-center rounded-lg shadow-lg bg-base-300">
							<img
								src="/images/react-logo.png"
								alt="React"
								className="w-16 h-16 mx-auto"
							/>
							<h4 className="mt-4 text-xl font-bold text-neutral-content">React JS</h4>
							<p className="mt-2 text-sm text-gray-500">A powerful JavaScript library used for building dynamic and responsive user interfaces, ensuring a seamless user experience across devices.</p>
						</div>

						{/* Node.js */}
						<div className="p-8 text-center rounded-lg shadow-lg bg-base-300">
							<img
								src="/images/node-logo.png"
								alt="Node.js"
								className="w-16 h-16 mx-auto"
							/>
							<h4 className="mt-4 text-xl font-bold text-neutral-content">Node JS</h4>
							<p className="mt-2 text-sm text-gray-500">A JavaScript runtime used on the server to handle requests and ensure the application runs smoothly and efficiently.</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutView;
