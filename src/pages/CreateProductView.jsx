import React from 'react';
import { useNavigate, redirect } from 'react-router-dom';
import FormInput from '../components/Form/FormInput';
import FormTextArea from '../components/Form/FormTextArea';
import FormSelect from '../components/Form/FormSelect';
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

const CreateProductView = () => {
	const categories = ['sepatu', 'baju', 'kemeja', 'celana'];
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const form = e.target;
		const dataForm = new FormData(form);
		const data = Object.fromEntries(dataForm);

		try {
			// upload file
			const responseFileUpload = await customAPI.post(
				'/product/file-upload',
				{
					image: data.image,
				},
				{
					headers: {
						'Content-Type': 'multipart/form-data',
					},
				}
			);
			console.log(responseFileUpload.data.url);

			// create product
			await customAPI.post('/product', {
				name: data.name,
				price: data.price,
				stock: data.stock,
				description: data.description,
				category: data.category,
				image: responseFileUpload.data.url,
			});

			toast.success('Product added successfully');
			navigate('/products');
		} catch (error) {
			const errorMessage = error?.response?.data?.message;
			toast.error(errorMessage);
		}
	};

	return (
		<>
			<div className="mt-24">
				<form
					onSubmit={handleSubmit}
					encType="multipart/form-data">
					<FormSelect
						label="Product Category"
						name="category"
						list={categories}
					/>
					<FormInput
						label="Product Name"
						name="name"
						type="text"
					/>
					<FormInput
						label="Product Price"
						name="price"
						type="number"
					/>
					<FormInput
						label="Product Stock"
						name="stock"
						type="number"
					/>
					<FormTextArea
						label="Product Description"
						name="description"
					/>

					<div className="form-control">
						<label className="label">
							<span className="capitalize label-text">Product Image</span>
						</label>

						<input
							type="file"
							name="image"
							className="w-full file-input file-input-bordered input-sm"
						/>
					</div>

					<Button
						type="submit"
						className="mt-10 btn btn-sm btn-primary btn-block btn-outline">
						Add Product
					</Button>
				</form>
			</div>
		</>
	);
};

export default CreateProductView;
