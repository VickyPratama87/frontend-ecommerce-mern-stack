import { useLoaderData, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BsPlusCircle } from 'react-icons/bs';
import Filter from '../components/Filter';
import CartProduct from '../components/CartProduct';
import Pagination from '../components/Pagination';
import customAPI from '../api';

export const loader = async ({ request }) => {
	const params = Object.fromEntries([...new URL(request.url).searchParams.entries()]);
	const { data } = await customAPI.get('/product', { params: params });

	const products = data.data;
	const pagination = data.pagination;
	return { products, params, pagination };
};

const ProductView = () => {
	const user = useSelector((state) => state.userState.user);
	const { products, pagination } = useLoaderData();

	return (
		<>
			<div className="flex justify-between mt-24">
				<h3 className="my-3 text-lg font-bold text-right text-primary">Total : {pagination.totalProduct} Product</h3>
				{user && user.role === 'owner' && (
					<div className="flex justify-end mb-5">
						<Link
							to="/product/create"
							className="btn btn-secondary btn-sm btn-outline">
							<BsPlusCircle />
							Add Product
						</Link>
					</div>
				)}
			</div>

			<Filter />
			<div className="grid gap-5 md:grid-cols-3 lg:grid-cols-4 ">
				{!products.length ? (
					<h1 className="mt-5 text-3xl font-bold text-center">Product Not Found</h1>
				) : (
					products.map((item) => (
						<CartProduct
							item={item}
							key={item._id}
							user={user}
						/>
					))
				)}
			</div>

			<div className="flex justify-center mt-10">
				<Pagination />
			</div>
		</>
	);
};

export default ProductView;
