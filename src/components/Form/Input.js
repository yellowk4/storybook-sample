// src/component/Input.js
import React from "react";
import { string, bool } from 'prop-types';
import './Input.css';

const Input = React.forwardRef(function Input(
	{ id, label, placeholder, readonly, disabled, error, ...others },
	ref
) {
	return (
		<div>
			<label htmlFor={id}>{label}</label>
			<input
				id={id}
				type='text'
				placeholder={placeholder}
				readOnly={readonly}
				disabled={disabled}
				{...others}
				ref={ref}
			/>
			{error && <div class="error">{error}</div>}
		</div>
	);
});

export default Input;

Input.propTypes = {
	id: string.isRequired,
	label: string.isRequired,
	placeholder: string,
	readonly: bool,
	disabled: bool,
	error: string
};