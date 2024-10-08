import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, redirect } from 'react-router-dom';
import CartTotal from '../components/CartTotal';
import FormInput from '../components/Form/FormInput';
import { clearCartItem } from '../features/cartSlice';
import { toast } from 'react-toastify';
import customAPI from '../api';
import Button from '../components/ui/Button';

const insertSnapScript = () => {
	return new Promise((resolve) => {
		const script = document.createElement('script');
		script.src = 'https://app.sandbox.midtrans.com/snap/snap.js';
		script.setAttribute('data-client-key', import.meta.env.VITE_CLIENT_MIDTRANS);
		script.onload = () => resolve();
		document.body.appendChild(script);
	});
};

export const loader = (storage) => () => {
	const user = storage.getState().userState.user;
	if (!user) {
		toast.warn('Please login first');
		return redirect('/login');
	}
	return null;
};

const CheckoutView = () => {
	const user = useSelector((state) => state.userState.user);
	const carts = useSelector((state) => state.cartState.CartItems);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		insertSnapScript();
	}, []);

	const handleCheckout = async (e) => {
		e.preventDefault();
		const form = e.target;
		const formData = new FormData(form);

		const data = Object.fromEntries(formData);

		const newArrayCart = carts.map((item) => {
			return {
				product: item.productId,
				quantity: item.amount,
			};
		});

		try {
			const response = await customAPI.post('/order', {
				email: data.email,
				firstName: data.firstname,
				lastName: data.lastname,
				phone: data.phone,
				cartItem: newArrayCart,
			});

			const snapToken = response.data.token;

			window.snap.pay(snapToken.token, {
				onSuccess: function (result) {
					console.log(result);
					dispatch(clearCartItem());
					navigate('/orders');
				},
				onPending: function (result) {
					console.log(result);
					alert('Payment pending');
				},
				onError: function (result) {
					console.log(result);
					alert('Payment failed');
				},
			});

			toast.success('Order created successfully');
		} catch (error) {
			const errorMessage = error?.response?.data?.message;
			toast.error(errorMessage);
		}
	};

	return (
		<>
			<div className="pb-5 mt-24 border-b border-primary">
				<h2 className="text-2xl font-bold capitalize">Checkout Product</h2>
			</div>

			<div className="grid mt-8 gap-y-8 gap-x-2 lg:grid-cols-12">
				{/* Form */}
				<div className="lg:col-span-8 border-[1px] border-solid border-primary rounded-xl">
					<form
						method="POST"
						className="grid items-center p-5 rounded-2xl bg-base-300 gap-y-5"
						onSubmit={handleCheckout}>
						<div className="grid grid-cols-2 gap-x-4">
							<FormInput
								label="First Name"
								type="text"
								name="firstname"
							/>

							<FormInput
								label="Last Name"
								type="text"
								name="lastname"
							/>
						</div>

						<FormInput
							label="email"
							type="email"
							name="email"
							defaultValue={user.email}
						/>

						<FormInput
							label="phone"
							type="text"
							name="phone"
						/>

						<Button
							className="btn btn-primary btn-sm"
							type="submit">
							Bayar
						</Button>
					</form>
				</div>

				{/* Cart Total */}
				<div className="lg:col-span-4 lg:pl-4">
					<CartTotal />
				</div>
			</div>
		</>
	);
};

export default CheckoutView;
