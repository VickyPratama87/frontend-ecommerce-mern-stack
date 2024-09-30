import React from 'react';
import { generateSelectAmount, priceFormat } from '../utils';
import { FaTrash } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { editItem, removeItem } from '../features/cartSlice';

const CartListItems = ({ cartItem }) => {
	const { cartId, name, price, image, amount, stock } = cartItem;
	const dispatch = useDispatch();

	const handleAmount = (e) => {
		const amount = parseInt(e.target.value);
		dispatch(editItem({ cartId, amount }));
	};

	const removeProductItem = () => {
		dispatch(removeItem({ cartId }));
	};

	return (
		<>
			<div
				className="flex flex-col flex-wrap p-3 mb-12 border-[1px] border-solid bg-base-300 rounded-xl border-primary gap-y-4 sm:flex-row"
				key={cartId}>
				<img
					src={image}
					alt={name}
					className="object-cover w-24 h-24 rounded-lg sm:w-32 sm:h-32"
				/>

				<div className="sm:ml-16 sm:w-48">
					<h2 className="capitalize">{name}</h2>
					<span className="font-bold">Count : {amount} product</span>
				</div>

				<p className="font-bold sm:ml-auto">{priceFormat(price)}</p>

				<div className="sm:ml-12">
					<div className="max-w-xs form-control">
						<select
							name="amount"
							className="select select-sm select-bordered sm:w-full"
							value={amount}
							onChange={handleAmount}>
							{generateSelectAmount(stock)}
						</select>
					</div>

					<button
						className="mt-2 btn btn-sm btn-secondary btn-block"
						onClick={removeProductItem}>
						<FaTrash />
					</button>
				</div>
			</div>
		</>
	);
};

export default CartListItems;
