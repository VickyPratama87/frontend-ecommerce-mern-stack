import React from 'react';

const FormTextArea = ({ label, name, defaultValue }) => {
	return (
		<>
			<div className="form-control">
				<label className="label">{label}</label>

				<textarea
					className="h-40 textarea textarea-bordered"
					name={name}
					defaultValue={defaultValue}></textarea>
			</div>
		</>
	);
};

export default FormTextArea;
