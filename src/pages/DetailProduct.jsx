import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaCartPlus } from 'react-icons/fa';
import { addItem } from '../features/cartSlice';
import { generateSelectAmount, priceFormat } from '../utils';
import customAPI from '../api';

const DetailProduct = () => {
	const { id } = useParams();
	const [product, setProduct] = useState('');
	const [amount, setAmount] = useState(1);

	// Store
	const dispatch = useDispatch();

	const productData = async () => {
		const { data } = await customAPI.get(`/product/${id}`);
		setProduct(data.data);
	};

	const handleAmount = (e) => {
		const value = parseInt(e.target.value, 10);

		if (value >= 1 && value <= product.stock) {
			setAmount(value);
		}
	};

	const productCart = {
		cartId: product._id + product.name,
		productId: product._id,
		image: product.image,
		name: product.name,
		price: product.price,
		stock: product.stock,
		amount,
	};

	const increaseCount = () => {
		if (amount < product.stock) {
			setAmount(amount + 1);
		}
	};

	const decreaseCount = () => {
		if (amount > 1) {
			setAmount(amount - 1);
		}
	};

	const handleCart = () => {
		dispatch(addItem({ product: productCart }));
	};

	useEffect(() => {
		productData();
	}, []);

	return (
		<>
			<section>
				<div className="mt-24 shadow-xl card lg:card-side bg-base-300">
					<div className="relative flex flex-col p-3">
						<img
							src={product.image}
							alt={product.name}
							className="w-[310px] h-[310px] object-cover rounded-lg"
						/>

						{product.stock < 1 && (
							<div className="absolute right-3 top-3 left-3 bottom-3">
								<img
									src="/images/sold-out-1.jpg"
									alt="sold-out"
									className="object-cover w-full h-full rounded-lg opacity-80"
								/>
							</div>
						)}
					</div>
					<div className="card-body">
						<h2 className="text-3xl font-bold card-title">{product.name}</h2>
						<span className="my-3 text-2xl italic text-accent">{priceFormat(product.price)}</span>
						<span className="text-xl font-bold">Stock : {product.stock}</span>
						<span className="badge badge-primary">{product.category}</span>
						<p className="mt-3 text-sm">{product.description}</p>

						<div className="justify-end card-actions">
							<div className="flex items-end gap-x-4">
								{product.stock > 0 && (
									<>
										<div className="flex flex-row items-center gap-3 form-control">
											{/* <label className="label">
												<span className="capitalize label-text">Amount</span>
											</label>
											<select
												name="amount"
												className="select select-bordered select-sm"
												onChange={handleAmount}>
												{generateSelectAmount(product.stock)}
											</select> */}

											<label className="label">
												<span className="capitalize label-text">Amount : </span>
											</label>

											<div className="flex items-center space-x-4">
												<button
													onClick={decreaseCount}
													className="btn btn-sm btn-outline btn-secondary"
													disabled={amount <= 1}>
													-
												</button>

												<input
													value={amount}
													name="amount"
													min="1"
													max={product.stock}
													onChange={handleAmount}
													disabled="true"
													className="w-10 p-1 text-center border rounded-lg"
												/>

												{/* <span className="text-lg font-semibold">{count}</span> */}

												<button
													onClick={increaseCount}
													className="btn btn-sm btn-outline btn-secondary"
													disabled={amount >= product.stock}>
													+
												</button>
											</div>
											<button
												onClick={handleCart}
												className="btn btn-primary btn-sm">
												<FaCartPlus size={15} />
											</button>
										</div>
									</>
								)}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default DetailProduct;
