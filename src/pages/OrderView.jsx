import { redirect, useLoaderData } from 'react-router-dom';
import { priceFormat } from '../utils';
import { toast } from 'react-toastify';
import customAPI from '../api';

export const loader = (storage) => async () => {
	const user = storage.getState().userState.user;
	if (!user) {
		toast.warn('Please login first');
		return redirect('/login');
	}

	let orders;

	if (user.role !== 'owner') {
		const { data } = await customAPI.get('/order/current/user');
		orders = data.data;
	} else {
		const { data } = await customAPI.get('/order');
		orders = data.data;
	}
	return { orders };
};

const OrderView = () => {
	const { orders } = useLoaderData();
	if (!orders.length) {
		return <h1 className="text-3xl font-bold text-center text-primary">No Order</h1>;
	}
	return (
		<>
			<div className="mt-24 overflow-x-auto">
				<table className="table w-full text-left table-zebra table-md table-pin-rows table-pin-cols">
					<thead className="bg-gray-200">
						<tr className="text-sm font-semibold tracking-wide uppercase">
							<th className="px-4 py-2">No</th>
							<th className="px-4 py-2">Order By</th>
							<th className="px-4 py-2">Product</th>
							<th className="px-4 py-2">Total</th>
							<th className="px-4 py-2">Status Payment</th>
						</tr>
					</thead>
					<tbody>
						{orders.map((item, index) => (
							<tr
								key={item._id}
								className="transition-colors">
								<td className="px-4 py-3 font-medium text-center">{index + 1}</td>
								<td className="px-4 py-3">
									{item.firstName} {item.lastName}
								</td>
								<td className="px-4 py-3">
									<ul className="pl-5 space-y-2 list-disc">
										{item.itemDetails.map((itemProduct) => (
											<li key={itemProduct.product}>
												<span className="font-semibold">{itemProduct.name}</span>
												<br />
												<span className="text-sm text-gray-600">Quantity: {itemProduct.quantity}</span>
												<br />
												<em className="text-sm text-blue-500">{priceFormat(itemProduct.price)}</em>
											</li>
										))}
									</ul>
								</td>
								<td className="px-4 py-3 font-semibold text-blue-500">
									<em>{priceFormat(item.total)}</em>
								</td>
								<td className="px-4 py-3">
									{item.status === 'pending' ? <span className="badge badge-warning">Pending</span> : item.status === 'success' ? <span className="badge badge-success">Success</span> : <span className="badge badge-error">Failed</span>}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default OrderView;
