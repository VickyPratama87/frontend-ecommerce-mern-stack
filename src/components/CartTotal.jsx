import React from 'react';
import { useSelector } from 'react-redux';
import { priceFormat } from '../utils';

const CartTotal = () => {
	const { cartTotal } = useSelector((state) => state.cartState);

	return (
		<>
			<div className="border-2 border-dotted card bg-base-300 border-primary">
				<div className="card-body">
					<p className="flex justify-between pb-2 text-sm">
						<span>Total Shopping</span>
						<span className="font-bold">{priceFormat(cartTotal)}</span>
					</p>
				</div>
			</div>
		</>
	);
};

export default CartTotal;
