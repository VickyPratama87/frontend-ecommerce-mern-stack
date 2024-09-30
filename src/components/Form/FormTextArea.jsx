import React from 'react';

const FormTextArea = ({ label, name, type, defaultValue }) => {
	return (
		<div className="form-control">
			<label className="label">
				<span className="capitalize label-text">{label}</span>
			</label>

			<textarea
				className="textarea textarea-bordered h-36"
				name={name}
				defaultValue={defaultValue}></textarea>
		</div>
	);
};

export default FormTextArea;
