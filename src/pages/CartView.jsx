import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CartList from '../components/CartList';
import CartTotal from '../components/CartTotal';

const CartView = () => {
	const user = useSelector((state) => state.userState.user);
	const numItemInCart = useSelector((state) => state.cartState.numItemInCart);
	if (numItemInCart === 0) {
		return (
			<>
				<h1 className="text-3xl font-bold text-center">Product is null</h1>
			</>
		);
	}

	return (
		<>
			<div className="pb-5 mt-24 border-b border-primary">
				<h2 className="text-2xl font-bold capitalize">Your Cart</h2>
			</div>

			<div className="grid gap-8 mt-8 lg:grid-cols-12">
				<div className="lg:col-span-8">
					<CartList />
				</div>
				<div className="lg:col-span-4 lg:pl-4">
					<CartTotal />
					{user ? (
						<Link
							to="/checkout"
							className="mt-8 btn btn-sm btn-primary btn-block">
							Checkout
						</Link>
					) : (
						<Link
							to="/login"
							className="mt-8 btn btn-sm btn-primary btn-block">
							Please Login to Checkout
						</Link>
					)}
				</div>
			</div>
		</>
	);
};

export default CartView;
