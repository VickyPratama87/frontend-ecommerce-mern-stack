import { Link } from 'react-router-dom';
import { priceFormat } from '../utils';
import { FaTrash, FaPencilAlt } from 'react-icons/fa';
import customAPI from '../api';
import { toast } from 'react-toastify';
import { useRevalidator } from 'react-router-dom';
import Swal from 'sweetalert2';

const CartProduct = ({ item, user }) => {
	const { revalidate } = useRevalidator();

	const deleteProduct = async () => {
		const result = await Swal.fire({
			title: 'Are you sure?',
			text: 'You will not be able to recover this product!',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!',
			cancelButtonText: 'No, keep it',
		});

		if (!result.isConfirmed) return;
		await customAPI.delete(`/product/${item._id}`);
		toast.info('Product deleted successfully');
		revalidate();
	};

	return (
		<>
			{/* <div
				className="shadow-xl card bg-base-300"
				key={item._id}>
				<div className="relative flex justify-center p-3">
					<img
						src={item.image}
						alt={item.name}
						className="w-full rounded-lg"
					/>

					{item.stock < 1 && (
						<div className="absolute right-3 top-3 left-3 bottom-3">
							<img
								src="/images/sold-out-1.jpg"
								alt="sold-out"
								className="object-cover w-full h-full rounded-lg opacity-80"
							/>
						</div>
					)}
				</div>

				<div className="p-3 card-body">
					{user && user.role === 'owner' && (
						<div className="flex justify-end gap-x-3">
							<Link
								to={`/product/${item._id}/edit`}
								className="btn btn-warning btn-sm">
								<FaPencilAlt />
							</Link>
							<button
								className="btn btn-error btn-sm"
								onClick={deleteProduct}>
								<FaTrash />
							</button>
						</div>
					)}

					<Link to={`/product/${item._id}`}>
						<h2 className="font-bold duration-100 card-title text-primary hover:text-opacity-80">{item.name}</h2>
					</Link>
					<p className="italic font-bold text-accent">{priceFormat(item.price)}</p>
					<p className="text-sm">{item.description.substring(0, 60)}...</p>
				</div>
			</div> */}

			<div
				className="transition-transform duration-300 transform border-[1px] border-solid shadow-xl border-primary card bg-base-100 hover:scale-105 hover:shadow-2xl"
				key={item._id}>
				<div className="relative flex justify-center p-3">
					<img
						src={item.image}
						alt={item.name}
						className="object-cover w-full h-48 rounded-lg"
					/>

					{item.stock < 1 && (
						<div className="absolute flex items-center justify-center bg-black bg-opacity-50 rounded-lg inset-3">
							<img
								src="/images/sold-out-1.jpg"
								alt="sold-out"
								className="object-cover w-full h-full rounded-lg opacity-70"
							/>
						</div>
					)}
				</div>

				<div className="p-4 card-body">
					{user && user.role === 'owner' && (
						<div className="flex justify-end mb-3 gap-x-2">
							<Link
								to={`/product/${item._id}/edit`}
								className="flex items-center gap-1 transition-colors duration-200 btn btn-warning btn-sm hover:bg-yellow-600">
								<FaPencilAlt />
							</Link>
							<button
								className="flex items-center gap-1 transition-colors duration-200 btn btn-error btn-sm hover:bg-red-700"
								onClick={deleteProduct}>
								<FaTrash />
							</button>
						</div>
					)}

					<Link
						to={`/product/${item._id}`}
						className="block mb-2">
						<h2 className="text-lg font-bold transition-colors duration-200 card-title text-primary hover:text-primary-focus">{item.name}</h2>
					</Link>

					<p className="mb-2 text-lg italic font-bold text-accent">{priceFormat(item.price)}</p>

					<p className="text-sm text-gray-600">{item.description.substring(0, 60)}...</p>
				</div>
			</div>
		</>
	);
};

export default CartProduct;
