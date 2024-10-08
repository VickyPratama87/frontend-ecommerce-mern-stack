import React from 'react';

const FormSelect = ({ label, name, list, defaultValue }) => {
	return (
		<>
			<div className="form-control">
				<label className="label">{label}</label>
				<select
					name={name}
					className="select select-bordered select-sm"
					defaultValue={defaultValue}>
					{list.map((item) => (
						<option
							value={item}
							key={item}>
							{item}
						</option>
					))}
				</select>
			</div>
		</>
	);
};

export default FormSelect;
