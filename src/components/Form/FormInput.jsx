import React from 'react';

const FormInput = ({ label, name, type, defaultValue }) => {
	return (
		<div className="form-control">
			<label className="label">
				<span className="capitalize label-text">{label}</span>
			</label>

			<input
				type={type}
				name={name}
				defaultValue={defaultValue}
				className="input input-bordered input-sm"
			/>
		</div>
	);
};

export default FormInput;
