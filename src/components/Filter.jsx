import React from 'react';
import FormInput from './Form/FormInput';
import { Form, Link } from 'react-router-dom';
import FormSelect from './Form/FormSelect';
import { useLoaderData } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { BiRotateLeft } from 'react-icons/bi';

const Filter = () => {
	const { params } = useLoaderData();
	const { name, category } = params;

	const categories = ['sepatu', 'baju', 'kemeja', 'celana'];
	return (
		<>
			<Form
				method="get"
				className="grid items-center grid-cols-2 p-4 mb-10 rounded-md bg-base-200 gap-x-4 gap-y-3">
				<FormInput
					label="Search Product"
					name="name"
					type="search"
					defaultValue={name}
				/>

				<FormSelect
					label="Select Category"
					name="category"
					list={categories}
					defaultValue={category}
				/>

				<button
					type="submit"
					className="btn btn-primary btn-sm btn-outline">
					<FaSearch /> Search
				</button>
				<Link
					to="/products"
					className="btn btn-accent btn-sm btn-outline">
					<BiRotateLeft size={20} /> Reset
				</Link>
			</Form>
		</>
	);
};

export default Filter;
