import { useLoaderData } from 'react-router-dom';
import CartProduct from '../components/CartProduct';
import Hero from '../components/Hero';
import customAPI from '../api';

export const loader = async ({ request }) => {
	const { data } = await customAPI.get('/product?limit=3');

	const products = data.data;
	return { products };
};

const HomeView = () => {
	const { products } = useLoaderData();

	return (
		<>
			<div className="mb-5 mt-28">
				<Hero />
			</div>

			<div className="pb-5 mb-5 border-b border-primary">
				<h2 className="text-2xl font-bold capitalize">Product List</h2>
			</div>
			<div className="grid gap-5 mt-10 md:grid-cols-2 lg:grid-cols-3">
				{products.map((item) => (
					<CartProduct
						item={item}
						key={item._id}
					/>
				))}
			</div>
		</>
	);
};

export default HomeView;
