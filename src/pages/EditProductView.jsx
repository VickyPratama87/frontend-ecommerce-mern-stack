import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, redirect } from 'react-router-dom';
import Loading from '../components/Loading';
import FormSelect from '../components/Form/FormSelect';
import FormInput from '../components/Form/FormInput';
import FormTextArea from '../components/Form/FormTextArea';
import { toast } from 'react-toastify';
import customAPI from '../api';
import Button from '../components/ui/Button';

export const loader = (store) => async () => {
	const user = store.getState().userState.user;

	if (!user) {
		toast.warn('Please login first');
		return redirect('/login');
	}

	if (user.role !== 'owner') {
		toast.error('You are not authorized to access this page');
		return redirect('/');
	}

	return null;
};

const EditProductView = () => {
	const [product, setProduct] = useState(null);
	const navigate = useNavigate();
	const categories = ['sepatu', 'baju', 'kemeja', 'celana'];
	const { id } = useParams();

	const getProductId = async () => {
		const { data } = await customAPI.get(`/product/${id}`);
		setProduct(data.data);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const form = e.target;
		const dataForm = new FormData(form);
		const data = Object.fromEntries(dataForm);

		try {
			// create product
			await customAPI.put(`/product/${id}`, {
				name: data.name,
				price: data.price,
				stock: data.stock,
				description: data.description,
				category: data.category,
			});

			toast.info('Product updated successfully');
			navigate('/products');
		} catch (error) {
			const errorMessage = error?.response?.data?.message;
			toast.error(errorMessage);
		}
	};

	useEffect(() => {
		getProductId();
	}, []);

	return (
		<>
			<div className="mt-24">
				{product ? (
					<form
						onSubmit={handleSubmit}
						encType="multipart/form-data">
						<FormSelect
							label="Product Category"
							name="category"
							list={categories}
							defaultValue={product.category}
						/>

						<FormInput
							label="Product Name"
							name="name"
							type="text"
							defaultValue={product.name}
						/>

						<FormInput
							label="Product Price"
							name="price"
							type="number"
							defaultValue={product.price}
						/>

						<FormInput
							label="Product Stock"
							name="stock"
							type="number"
							defaultValue={product.stock}
						/>

						<FormTextArea
							label="Product Description"
							name="description"
							defaultValue={product.description}
						/>

						<Button
							type="submit"
							className="mt-10 btn btn-primary btn-block btn-sm btn-outline">
							Update Product
						</Button>
					</form>
				) : (
					<Loading />
				)}
			</div>
		</>
	);
};

export default EditProductView;
